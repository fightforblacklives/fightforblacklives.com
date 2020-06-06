import * as sapper from "@sapper/app";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

sapper.start({
  target: document.querySelector("#sapper"),
});
