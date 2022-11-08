# Stylelint 规范

Re:Tech 前端 Stylelint 规范，目前支持 css|less

#### 安装

```
npm install @retech/stylelint-config-retech -D
# OR
yarn add @retech/stylelint-config-retech --dev
# OR
pnpm add @retech/stylelint-config-retech -D
```

#### 使用

在你的工程根目录下创建一个`.stylelintrc.js` 配置文件

配置如下即可:

```
module.exports = {
  extends: [require.resolve('@retech/stylelint-config-retech')],
  rules: {
    // your rules
  },
};

```

如果你使用 `vscode` 编辑器，建议安装 `stylelint` 插件，并在设置配置文件 `settings.json` 中配置如下，在代码编写时会实时提示，保存是会自动修复

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true
},
"stylelint.validate": [
    "css",
    "less",
    "scss",
    "postcss",
    "vue", // 如果是Vue技术栈，需要加上，识别.vue文件中的style
],
"css.validate": true,
"less.validate": true,
"stylelint.enable": true,
```

在 package.json 文件中配置脚本

如果使用 `css`

```json
// package.json
"scripts":{
  "lint:css":"stylelint src/**/*.css --fix"
}
```

如果使用 `less`，需要安装`postcss-less`配置到`customSyntax`属性上

```json
// package.json
"scripts":{
  "lint:css":"stylelint src/\*_/_.less --fix --custom-syntax postcss-less"
}

```

如果使用 `css` 和 `less`

```json
"stylelint": "stylelint **/*.{css,less}",
"stylelint:fix": "stylelint --fix  ./src/**/*.{css, less}",
```

> 如果项目之前安装过 `Stylelint` 相关的包，建议卸载，避免引入不必要的包。如`@stylelint`、`stylelint-config-standard`、`stylelint-order` 等，直接在 `package.json` 搜索 `stylelint`，相关的包全部卸载

#### 规范

- 使用 `stylelint` 官方代码风格 `stylelint-config-standard`；该风格是 `stylelint` 汲取了 `GitHub`、`Google`、`Airbnb` 等；
- 使用`stylelint-config-prettier`来关闭和`prettier`冲突的规则
- 使用 `stylelint-order` 强制按照某个顺序进行编码
- 使用 `stylelint-declaration-block-no-ignored-properties`来保证某个属性不能和其他属性同时使用
- 使用`stylelint-config-css-modules`来支持`css modules`的规则校验
- 使用`@stylelint/postcss-css-in-js`来支持`css-in-js`的规则校验
- 使用`postcss-less`来支持`less`文件的校验

###### 目的：

增加 css 代码的重用性和易于维护性
统一规范、提高协作效率
提升渲染性能

#### 其他

- [fabric style lint](https://github.com/umijs/fabric)
- [umi style lint](https://github.com/umijs/umi/blob/master/packages/lint/src/config/stylelint/index.ts)
- [stylelint 接入实战踩坑总结](https://juejin.cn/post/7026998283155275807)
