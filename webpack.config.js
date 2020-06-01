const webpack = require("webpack");
const path = require("path");
const config = require("sapper/config/webpack.js");
const pkg = require("./package.json");
const {
  CheckerPlugin,
  TsConfigPathsPlugin,
} = require("awesome-typescript-loader");
const sveltePreprocessPostcss = require("svelte-preprocess-postcss");
const stylePreprocessor = sveltePreprocessPostcss({
  configFilePath: path.join(__dirname, "postcss.config.js"),
  useConfigFile: true,
});

const mode = process.env.NODE_ENV;
const dev = mode === "development";
console.log(mode);

const alias = {
  svelte: path.resolve("node_modules", "svelte"),
};
const extensions = [".mjs", ".js", ".ts", ".json", ".svelte", ".html"];
const mainFields = ["svelte", "module", "browser", "main"];
const resolvePlugins = () => [new TsConfigPathsPlugin()];

const commonLoaders = () => {
  return [
    { test: /\.css$/, use: ["isomorphic-style-loader", "postcss-loader"] },
  ];
};

const commonPlugins = () => [new CheckerPlugin()];
const commonSvelteOptions = {
  preprocess: {
    style: stylePreprocessor,
  },
  onwarn: (warning, onwarn) =>
    warning.code === "css-unused-selector" ||
    warning.message.includes("has unused export property") ||
    onwarn(warning),
};

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields, plugins: resolvePlugins() },
    module: {
      rules: [
        ...commonLoaders(),

        {
          // Exclude server modules from typescript compilation
          test: /(?<!\.server)\.tsx?$/,
          use: [
            {
              loader: "awesome-typescript-loader",
              options: {
                useCache: true,
              },
            },
          ],
        },

        {
          test: /\.(svelte|html)$/,
          use: {
            loader: "svelte-loader-hot",
            options: {
              dev,
              hydratable: true,
              hotReload: dev, // pending https://github.com/sveltejs/svelte/issues/2377
              hotOptions: {
                optimistic: true,
              },
              ...commonSvelteOptions,
            },
          },
        },
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      dev && new webpack.HotModuleReplacementPlugin(),
      ...commonPlugins(),
      new webpack.DefinePlugin({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && "inline-source-map",
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: "node",
    resolve: { alias, extensions, mainFields, plugins: resolvePlugins() },
    externals: [...Object.keys(pkg.dependencies).concat("encoding")],
    module: {
      rules: [
        ...commonLoaders(),
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          options: {
            useCache: true,
          },
        },
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: "svelte-loader-hot",
            options: {
              css: false,
              generate: "ssr",
              dev,
              ...commonSvelteOptions,
            },
          },
        },
      ],
    },
    plugins: [
      ...commonPlugins(),
      new webpack.DefinePlugin({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
    ],
    mode: process.env.NODE_ENV,
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode: process.env.NODE_ENV,
  },
};
