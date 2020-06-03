import { memoOnce } from "./memo";

export const getZipCodeBundle = (code: string) => {
  return request(
    `https://fightforblacklives.github.io/ffbl-data/zip-code-bundles/${code}.jsonp`
  );
};

const getFetch = memoOnce(() => {
  return import("fetch-jsonp");
});

const request = async (url: string) => {
  const { default: fetch } = await getFetch();

  return fetch(url, { jsonpCallbackFunction: "callback" }).then((res) =>
    res.json()
  );
};
