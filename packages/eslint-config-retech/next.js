/**
 * retech ESLint 规则
 *
 * 贡献者：
 *   pengfei.zuo <469547164@qq.com>
 *
 * 依赖版本：
 *
    "@babel/eslint-parser": "^7.19.1",
    "@typescript-eslint/eslint-plugin": "^5.42.1",
    "@typescript-eslint/parser": "^5.42.1",
    "@vue/eslint-config-prettier": "^7.0.0",
    "@vue/eslint-config-standard": "^8.0.1",
    "@vue/eslint-config-typescript": "^11.0.2",
    "eslint": "^8.27.0",
    "eslint-config-next": "^13.0.2",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-config-taro": "^3.5.7",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.31.10",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-vue": "^9.7.0"

 *
 */

module.exports = {
  extends: ["next/core-web-vitals", "./react.js"],
  rules: {
    "@next/next/no-img-element": 0,
  },
};
