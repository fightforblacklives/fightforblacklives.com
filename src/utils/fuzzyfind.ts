export const fuzzyName = (name1, name2) => {
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

fuzzyName("Andrew M. Cuomo", "Andrew Jackson");
