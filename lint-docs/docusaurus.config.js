const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "lint-config",
    tagline: "一个全面、通用的前端Lint规范解决方案",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logo.svg",
    organizationName: "Re:tech",
    projectName: "front-lint",

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
          },
          blog: {
            showReadingTime: true,
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "",
          logo: {
            alt: "Re:tech Logo",
            src: "img/logo.svg",
          },
          items: [
            {
              to: "docs/commit/guide",
              label: "CommitLint",
              position: "left",
              activeBaseRegex: "docs/commit/",
            },
            {
              to: "docs/es/guide",
              position: "left",
              label: "ESLint",
              activeBaseRegex: "docs/es/",
            },
            {
              to: "docs/cli/guide",
              label: "CLI",
              position: "left",
              activeBaseRegex: "docs/cli/",
            },
            {
              to: "docs/prettier/guide",
              label: "Prettier-config",
              position: "left",
              activeBaseRegex: "docs/prettier/",
            },
            {
              to: "docs/style/guide",
              label: "StyleLint",
              position: "left",
              activeBaseRegex: "docs/style/",
            },

            {
              href: "https://github.com/retech-fe/r-lint/issues",
              label: "反馈issues",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          copyright: `Copyright © ${new Date().getFullYear()} Re:tech 海外部门-前端研发组`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
