import * as sapper from "@sapper/app";
import "core-js/features/array/from";
import "core-js/features/array/flat";
import "core-js/features/array/flat-map";
import "core-js/features/url";
import "core-js/features/set";
import "core-js/features/promise";
import "element-qsa-scope";
import { spring } from "svelte/motion";

const polyfillScroll = (Proto: any) => {
  Proto.scroll = function (params) {
    const el = this;
    const topDest = params.top ?? el.scrollTop;
    const leftDest = params.left ?? el.scrollLeft;

    if (params.behavior === "smooth") {
      const scrollSpring = spring({ x: el.scrollLeft, y: el.scrollTop });

      scrollSpring.subscribe((v) => {
        el.scrollTop = v.y;
        el.scrollLeft = v.x;
      });

      scrollSpring.set({
        y: topDest,
        x: leftDest,
      });
    } else {
      el.scrollTop = topDest;
      el.scrollLeft = leftDest;
    }
  };
};

polyfillScroll(HTMLElement.prototype);

sapper.start({
  target: document.querySelector("#sapper"),
});
