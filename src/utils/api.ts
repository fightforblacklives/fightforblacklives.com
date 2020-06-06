const fuzzyName = (name1, name2) => {
  name1 = name1
    .toLowerCase()
    .trim()
    .split(" ")
    .map((x) => x.trim())
    .filter((x) => x != null && x !== "");
  name2 = new Set(
    name2
      .toLowerCase()
      .trim()
      .split(" ")
      .map((x) => x.trim())
      .filter((x) => x != null && x !== "")
  );

  const isMatch = name1.filter((n1) => name2.has(n1)).length > 1;

  return isMatch;
};

const dedupeBy = <T, C>(getKey: (value: T) => C, list: T[]) => {
  const items = new Set();

  return list.filter((value) => {
    const key = getKey(value);
    if (!items.has(key)) {
      items.add(key);
      return true;
    }

    return false;
  });
};

const peopleSort = (people) => {
  const priorityList = [
    "U.S. Senator",
    "U.S. Representative",
    "US Representative",
    "Governor",
    "Lieutenant Governor",
    "State Senator",
    "State Representative",
    "Mayor",
    "Sheriff",
    "District Attorney",
  ];

  const ordered = priorityList.flatMap((plitem) =>
    people.filter((p) => p.title.includes(plitem))
  );

  const included = new Set(ordered.map((x) => x.name));

  const remaining = [
    ...people.filter((x) => !included.has(x.name) && x.image),
    ...people.filter((x) => !included.has(x.name) && !x.image),
  ];

  return dedupeBy((x) => x.name, [...ordered, ...remaining]);
};

const id = (x) => x;

const request = async (url: string) => {
  const jsonP = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    const headers = {
      Accept: "*/*",
    };

    for (let i in headers) {
      xhr.setRequestHeader(i, headers[i]);
    }

    let callback: any = function (type) {
      return function () {
        if (callback) {
          callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;

          if (type === "abort") {
            xhr.abort();
          } else if (type === "error") {
            reject(new Error(`failed http request: ${xhr.statusText}`));
          } else {
            resolve(xhr.responseText);
          }
        }
      };
    };

    xhr.onload = callback();
    xhr.onabort = xhr.onerror = xhr.ontimeout = callback("error");

    callback = callback("abort");

    try {
      xhr.send(null);
    } catch (e) {
      if (callback) {
        throw e;
      }
    }
  });

  return jsonP.then((res) => {
    return new Function("callback", `return ${res}`)(id);
  });
};

const googleCivicApi = async (address) => {
  const apiKey = "AIzaSyDVb6LeI3JZCBL9j228ujYz2kjqsfgbnLk";
  const data = await fetch(
    `https://d7s3gef0idata.cloudfront.net/representatives?key=${apiKey}&address=${address}`,
    {
      headers: {
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.5",
      },
      method: "GET",
      mode: "cors",
    }
  ).then((res) => res.json());
  return data;
};

export const getDataByAddress = async (zip) => {
  const googleCivicData = await googleCivicApi(zip + ", United States");
  const addlData = await request(
    `https://d2jm68nhxp4m1b.cloudfront.net/zip-code-bundles/${zip}.jsonp?t=${Date.now()}`
  );
  const addlPeople = addlData.people
    .filter(
      (x) => !googleCivicData.officials.some((y) => fuzzyName(y.name, x.name))
    )
    .map((x) =>
      Object.assign({}, x, {
        image: x.image
          ? x.image.replace(
              "fightforblacklives.s3.amazonaws.com",
              "fightforblacklives.s3-accelerate.amazonaws.com"
            )
          : null,
        address:
          x.address && x.address.length
            ? x.address[0].replace(/;/g, ", ")
            : null,
        phone:
          x.phone && Array.isArray(x.phone) && x.phone.length > 0
            ? x.phone[0]
            : x.phone,
        email: x.email && x.email.length ? x.email[0] : null,
      })
    );
  const city = googleCivicData.normalizedInput.city;
  const state = googleCivicData.normalizedInput.state;
  const googlePeople = googleCivicData.officials.flatMap((p, i) => {
    const office = googleCivicData.offices.find((o) =>
      o.officialIndices.includes(i)
    );

    if (
      office.name === "President of the United States" ||
      office.name === "Vice President of the United States"
    ) {
      return [];
    }
    return {
      name: p.name,
      image: p.photoUrl
        ? p.photoUrl
        : addlData.people.find((addl) => fuzzyName(addl.name, p.name))?.image,
      title: office.name,
      address:
        p.address && p.address.length > 0
          ? `${p.address[0].line1}
${p.address[0].city}, ${p.address[0].state}, ${p.address[0].zip}`
          : null,
      phone: p.phones && p.phones.length > 0 ? p.phones[0] : null,
      twitter:
        p.channels && p.channels.some((x) => x.type === "Twitter")
          ? p.channels.find((x) => x.type === "Twitter").id
          : null,
      party: p.party,
      email: p.emails && p.emails.length > 0 ? p.emails[0] : null,

      facebook:
        p.channels && p.channels.some((x) => x.type === "Facebook")
          ? p.channels.find((x) => x.type === "Facebook").id
          : null,
    };
  });

  const people = peopleSort([...googlePeople, ...addlPeople]).map((x, i) =>
    Object.assign({}, x, { id: i })
  );

  return {
    city,
    state,
    people,
  };
};
