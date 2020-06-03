export const delay = (amount: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, amount);
  });
};
