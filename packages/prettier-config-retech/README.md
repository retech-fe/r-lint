## Prettier 规范

Re:Tech 前端 prettier 规范

#### 安装

```shell
npm install @retech/stylelint-config-retech -D
# OR
yarn add @retech/stylelint-config-retech -D
# OR
pnpm add @retech/stylelint-config-retech -D
```

#### 使用

在你的工程根目录下创建一个`.prettierrc.js`配置文件

配置如下：

```js
module.exports = {
  ...require("@retech/@retech/prettier-config-retech"),
  // 你自己的配置
};
```

在你的工程根目录下创建一个`.prettierignore`配置文件，用来配置忽略 `prettier` 的文件

```shell
node_modules/
coverage/
dist/
build/
out/
.next/
```

#### 配合 tailwind 使用

使用`tailwindcss`可以配合[`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)来对原子类进行[排序](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)

```
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
```

#### npm 命令脚本

```
 "scripts": {
    "prettier": "prettier --write .",
  }
```

#### 提交代码检查

可参考 [`Prettier`](https://prettier.io/) 文档将其配置到 `lint-staged` 中：

[https://prettier.io/docs/en/install.html#git-hooks](https://prettier.io/docs/en/install.html#git-hooks)

具体在`package.json`文件中的配置如下：

```JSON
"lint-staged": {
    "**/*.{js,jsx,ts,tsx}": "pnpm run lint-staged:js",
    "**/*.{js,jsx,tsx,ts,less,md,json}": [
      "prettier --write"
    ]
  },
```

在`.husky`目录中`pre-commit`钩子中的配置如下：

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged

```

其他配置可参考 [`Prettier`](https://prettier.io/docs/en/precommit.html)

#### 其他

- [UMI Prettier 配置生成器](https://umijs.org/docs/guides/generator#prettier-%E9%85%8D%E7%BD%AE%E7%94%9F%E6%88%90%E5%99%A8)
- [umijs fabric prettier](https://github.com/umijs/fabric/blob/master/src/prettier.ts)
- [类 umijs fabric prettier](https://github.com/G-G-boy/fabric/tree/main/packages/prettier)
