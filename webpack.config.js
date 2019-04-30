const { VueLoaderPlugin } = require("vue-loader");
const StatsPlugin = require("stats-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, options) => {
  let envVars = {};
  if (options.mode === "development") {
    envVars = {
      GOOGLE_MAP_API_KEY: "AIzaSyBq5DSPVJrF_7xlXTytsuCnhaqvvKWQhI4",
    };
  } else {
    envVars = {
      GOOGLE_MAP_API_KEY: "AIzaSyDYco7xbM_0sdt4T0knOuo9cVimWUtlVBo",
    };
  }

  const config = {
    mode: options.mode,
    entry: "./src/entry.ts",
    output: {
      filename: "app.js",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.ts?$/,
          loader: "ts-loader",
          exclude: "/node_modules/",
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.EnvironmentPlugin(envVars),
      new StatsPlugin("stats.json", {
        chunkModules: true,
      }),
    ],
  };

  return config;
};
