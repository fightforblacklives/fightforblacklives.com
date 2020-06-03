const empty = Symbol("empty");

export const memoOnce = <T extends Function>(fn: T): T => {
  let cachedArg = empty;
  let cachedReturn;

  return (((arg) => {
    if (cachedArg === arg) {
      return cachedReturn;
    }

    cachedArg = arg;
    cachedReturn = fn(arg);
    return cachedReturn;
  }) as any) as T;
};
