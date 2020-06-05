export const delay = (amount: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, amount);
  });
};

/**
 * Throttle a function by the given wait time.
 *
 * If you pass { leading: false } in options, it will not trigger upon
 * the first call. If you pass { trailing: false }, it will not call
 * on the final call.
 *
 * Based on:  https://stackoverflow.com/questions/27078285/simple-throttle-in-js
 */
export const throttle = <T extends Function>(
  func: T,
  wait: number,
  {
    leading = true,
    trailing = true,
  }: { leading: boolean; trailing: boolean } = {
    leading: true,
    trailing: true,
  }
) => {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  var later = function () {
    previous = leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  return function () {
    var now = Date.now();
    if (!previous && leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
