import * as sapper from "@sapper/server";
import compression from "compression";
import polka from "polka";
import sirv from "sirv";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = polka() // You can also use Express
  .use(
    process.env.NODE_ENV === "development" ? "/" : "/fightforblacklives.com",
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  );

app.listen(PORT, (err) => {
  if (err) console.log("error", err);
});

export default app;
