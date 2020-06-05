import { memoOnce } from "./memo";

export const getZipCodeBundle = (code: string) => {
  return request(
    `https://fightforblacklives.github.io/ffbl-data/zip-code-bundles/${code}.jsonp`
  );
};

const getFetch = memoOnce(() => {
  return import("fetch-jsonp");
});

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
  console.log(isMatch);
  return isMatch;
};

const request = async (url: string) => {
  const { default: fetch } = await getFetch();

  return fetch(url, { jsonpCallbackFunction: "callback" }).then((res) =>
    res.json()
  );
};

const googleCivicApi = async (address) => {
  const apiKey = "AIzaSyDVb6LeI3JZCBL9j228ujYz2kjqsfgbnLk";
  const data = await fetch(
    `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${address}`,
    {
      headers: {
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.5",
      },
      referrer: "https://myreps.datamade.us/",
      method: "GET",
      mode: "cors",
    }
  ).then((res) => res.json());
  return data;
};

export const getDataByAddress = async (zip) => {
  const googleCivicData = await googleCivicApi(zip + ", United States");
  const addlData = await request(
    `https://raw.githubusercontent.com/fightforblacklives/ffbl-data/master/zip-code-bundles/${zip}.jsonp`
  );
  const addlPeople = addlData.people.filter(
    (x) => !googleCivicData.officials.some((y) => fuzzyName(y.name, x.name))
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
  const people = [...googlePeople, ...addlPeople].map((x, i) =>
    Object.assign({}, x, { id: i })
  );
  console.log(googleCivicData);
  console.log(addlData);

  return {
    city,
    state,
    people,
  };
};
