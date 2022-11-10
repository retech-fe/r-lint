# ESlint 规范

Re:Tech 前端 ESlint 规范，目前支持 taro|vue|react|next

#### 安装

```
npm install @retech/eslint-config-retech -D
# OR
yarn add @retech/eslint-config-retech --dev
# OR
pnpm add @retech/eslint-config-retech -D
```

### 使用

在你的工程根目录下创建一个`.eslintrc.js` 配置文件

配置如下:

- taro

```js
module.exports = {
  extends: ["retech/taro"],
};
```

- vue

```js
module.exports = {
  extends: ["retech/vue"],
};
```

- react

```js
module.exports = {
  extends: ["retech/react"],
};
```

package.json 命名

```json
"lint:js": "eslint --ext .js,.jsx,.ts,.tsx ./src",
"lint:fix": "eslint --fix --ext .js,.jsx,.ts,.tsx ./src ",
```

安装`lint-stage`

```json
"lint-staged": "lint-staged",
"lint-staged:js": "tsc --noEmit && eslint --ext .js,.jsx,.ts,.tsx ./src",

```

```json

 "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": "pnpm run lint-staged:js",
    "**/*.{js,jsx,tsx,ts,less,md,json}": [
      "prettier --write"
    ]
  },
```

配合`.husky/pre-commit`

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
```

> 如果项目之前安装过 ESLint 相关的包，建议卸载，避免引入不必要的包。如 `eslint`、`eslint-plugin-vue`、`@babel/eslint-parser`、`@typescript-eslint/eslint-plugin` 、`@typescript-eslint/parser`、`@vue/eslint-config-standard`、`@vue/eslint-config-typescript`、`eslint-config-react-app`、 `eslint-plugin-import` 等，直接在 `package.json` 搜索 `eslint`，相关的包全部卸载
