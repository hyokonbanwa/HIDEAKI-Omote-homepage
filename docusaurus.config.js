// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "表 英輝",
    tagline: "岐阜大学 工学部 電気電子・情報工学科 情報コース4年",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://hyokonbanwa.github.io/",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/HIDEAKI-Omote-homepage/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "hyokonbanwa", // Usually your GitHub org/user name.
    projectName: "HIDEAKI-Omote-homepage", // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "ja",
        locales: ["ja"],
        path: "i18n",
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                // docs: {
                //     sidebarPath: "./sidebars.js",
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                // },
                blog: {
                    blogSidebarTitle: "最新の5件",
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "ホーム",
                logo: {
                    alt: "表 英輝のホームページのロゴ",
                    src: "img/logo.svg",
                },
                items: [
                    // {
                    //     type: "docSidebar",
                    //     sidebarId: "tutorialSidebar",
                    //     position: "left",
                    //     label: "Tutorial",
                    // },
                    { to: "/profile", label: "プロフィール", position: "left" },
                    { to: "/blog", label: "ブログ", position: "left" },
                    { to: "/blog/tags/research", label: "研究", position: "left" },

                    {
                        href: "https://github.com/facebook/docusaurus",
                        label: "加藤研究室",
                        // html: "<p><img src='img/docusaurus-social-card.jpg' alt='加藤研究室' width='30' height='30'>ラベル</p>",
                        position: "right",
                    },
                    {
                        href: "https://github.com/facebook/docusaurus",
                        label: "Labbase",
                        position: "right",
                    },
                    {
                        href: "https://github.com/facebook/docusaurus",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    // {
                    //     title: "Docs",
                    //     items: [
                    //         {
                    //             label: "Tutorial",
                    //             to: "/docs/intro",
                    //         },
                    //     ],
                    // },
                    {
                        title: "コンテンツ",
                        items: [
                            {
                                label: "プロフィール・ニュース",
                                to: "/profile",
                            },
                            {
                                label: "ブログ",
                                to: "/blog",
                            },
                            { label: "研究", to: "/blog/tags/research" },
                            // {
                            //     label: "Discord",
                            //     href: "https://discordapp.com/invite/docusaurus",
                            // },
                            // {
                            //     label: "Twitter",
                            //     href: "https://twitter.com/docusaurus",
                            // },
                        ],
                    },
                    {
                        // title: " ",
                        items: [
                            {
                                label: "ホーム",
                                to: "/",
                            },
                            // {
                            //     label: "Discord",
                            //     href: "https://discordapp.com/invite/docusaurus",
                            // },
                            // {
                            //     label: "Twitter",
                            //     href: "https://twitter.com/docusaurus",
                            // },
                        ],
                    },
                    {
                        title: "所属",
                        items: [
                            {
                                label: "岐阜大学 加藤研究室",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "お問い合わせ",
                                href: "mailto:omote@cv.info.gifu-u.ac.jp",
                            },
                            // {
                            //     label: "Discord",
                            //     href: "https://discordapp.com/invite/docusaurus",
                            // },
                            // {
                            //     label: "Twitter",
                            //     href: "https://twitter.com/docusaurus",
                            // },
                        ],
                    },

                    {
                        title: "アカウント",
                        items: [
                            // {
                            //     label: "Blog",
                            //     to: "/blog",
                            // },
                            {
                                label: "Labbase",
                                href: "https://github.com/facebook/docusaurus",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © 2024 - ${new Date().getFullYear()} Hideaki OMOTE, Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
