---
sidebar_position: 1
---

# 介绍

先使用下列任一命令安装脚手架

```shell
npm install -g @retech/lint-cli-retech
# OR
yarn global add @retech/lint-cli-retech
```

安装之后，你就可以在命令行中访问`s-lint`命令。你可以通过简单运行`s-lint`，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：

```shell
s-lint --version
```

如需升级全局的 selling-lint-cli 包，请运行：

```shell
npm upgrade -g @retech/lint-cli-retech
# OR
yarn global upgrade --latest @retech/lint-cli-retech
```

s-lint 提供了三个命令，init、init-git-hooks 和 upgrade，下面分别介绍这三个命令：

### 1. init 命令

在工程路径下，运行以下命令来为工程加上 lint 规范

```shell
s-lint init
```

随后命令行会列举可选的规范类型，目前包括 eslint、stylelint 及 commitlint，默认全选，使用上下键切换目标选项，空格键可切换选中态，回车确认。

![image.png](https://storage.360buyimg.com/hawley-common/init.jpg)

如果选择的规范包含 eslint，则会继续询问要初始化的 eslint 类型，如 vue、react、taro 等，该选项为单选，选择完毕后将开始进行初始化。

![image.png](https://storage.360buyimg.com/hawley-common/eslintType.jpg)

cli 将按照所选的规范类型依次进行初始化，单个规范的初始化过程包括

1. 检查并移除旧包，包括项目内的冗余依赖
2. 检查并移除旧[xxx]rc.js 文件
3. 安装目标规范的依赖
4. 添加对应的 rc 文件，如.eslintrc.js、.stylelintrc.js 等

对于 commitlint 规范，cli 还会额外安装 husky 依赖，并在 package.json 中增加 husky 配置。期间命令行将提示当前的大致进度。

init 的执行流程图如下：
![image.png](https://storage.360buyimg.com/hawley-common/init%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg)

### 2. init-git-hooks 命令

在工程路径下，运行以下命令可单独初始化 commitlint 规范

```shell
s-lint init-git-hooks
```

### 3. upgrade 命令

在工程路径下，运行以下命令可升级 lint 规范，目前暂不支持升级单个 lint 规范，仅支持升级到规范的最新版本

```shell
s-lint upgrade
```

cli 会依次尝试对三个规范进行升级，单个规范的升级过程如下：

1. 检查是否安装了当前规范以及当前是否为最新版本，如果是则直接跳过后续步骤
2. 安装最新 lint 规范
3. 更新 rc 文件

更新 rc 文件时，如果是 commitlint 或 stylelint 规范，直接复制最新的模板文件到工程根路径下即可；如果是 eslint 规范，则先扫描原 rc 文件，判断 eslint 类型，再进行模板替换，如果扫描失败，则再次询问要升级的 eslint 类型。

cli 所支持的 eslint 类型和 lint 的相关安全依赖分别保存在 scripts/eslintType.js 和 scripts/safeDeps.js 中，文件的内容分别由 npm run scan-eslint-type 和 npm run scan-deps 命令自动扫描生成，无需手动维护。这两个命令已添加到 npm run build 操作流中，因此只需执行 build 命令即可。

upgrade 会依次调用核心函数 checkAndUpgradeLint 三次，尝试对三个规范进行升级，该函数的执行逻辑如下：
![image.png](https://storage.360buyimg.com/hawley-common/upgrade%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.jpg)

以上三个命令整体的执行原理如下图：
![image.png](https://storage.360buyimg.com/hawley-common/s-lint%E6%89%A7%E8%A1%8C%E5%8E%9F%E7%90%86%E5%9B%BE.jpg)
