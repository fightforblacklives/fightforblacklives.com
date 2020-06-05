import { throttle } from "utils/time";

export default (el: HTMLElement, { selector, offsetTop, itemData }) => {
  let currentData = null;

  const updateSection = () => {
    const elRect = el.getBoundingClientRect();
    const els = el.querySelectorAll(selector);

    const currentEl =
      Array.from(els)
        .reverse()
        .find((child) => {
          const rect = child.getBoundingClientRect();
          const delta = rect.y - elRect.y;

          return delta < offsetTop;
        }) ?? els[0];

    if (currentEl) {
      const newData = currentEl.dataset[itemData];

      if (currentData !== newData) {
        currentData = newData;

        const evt = new Event("updateScrollSection");
        (evt as any).detail = newData;

        el.dispatchEvent(evt);
      }
    }
  };

  const listener = throttle(updateSection, 100);

  el.addEventListener("scroll", listener);

  requestAnimationFrame(() => {
    updateSection();
  });

  return {
    update(options) {
      selector = options.selector;
      offsetTop = options.offsetTop;
      itemData = options.itemData;

      updateSection();
    },

    destroy() {
      el.removeEventListener("scroll", listener);
    },
  };
};
