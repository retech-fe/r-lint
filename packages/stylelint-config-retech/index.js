"use strict";

const coreRules = require("./rules");
const orderRules = require("./rules/order");

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-css-modules",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: Object.assign(
    { "plugin/declaration-block-no-ignored-properties": true },
    coreRules,
    orderRules
  ),
  customSyntax: require.resolve("postcss-less"),
  ignoreFiles: ["node_modules"],
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
      customSyntax: require.resolve("@stylelint/postcss-css-in-js"),
    },
  ],
};
