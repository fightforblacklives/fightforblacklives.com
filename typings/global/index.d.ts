declare module "*.svelte";

declare module "*";

declare var process: {
  browser: boolean;
  env: { NODE_ENV: "development" | "production" | null; PORT: string };
};
