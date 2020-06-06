import * as sapper from "@sapper/app";
import smoothscroll from "smoothscroll-polyfill";
import "core-js/features/array/from";
import "core-js/features/array/flat";
import "core-js/features/array/flat-map";
import "core-js/features/set";
import "core-js/features/promise";
import "element-qsa-scope";

smoothscroll.polyfill();

sapper.start({
  target: document.querySelector("#sapper"),
});
