import * as sapper from "@sapper/server";
import compression from "compression";
import "envkey";
import polka from "polka";
import sirv from "sirv";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  );

if (dev) {
  app.listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
}

export default app;
