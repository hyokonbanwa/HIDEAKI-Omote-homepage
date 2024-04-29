// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "表 英輝のホームページ",
    tagline: "岐阜大学工学部加藤研究室で深層学習・マルチモーダルモデルの研究をしている表英輝のホームページです。",
    favicon: "img/favicon.ico",
    noIndex: false,

    // Set the production url of your site here
    url: "https://hyokonbanwa.github.io",
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
                    blogSidebarTitle: "最新の10件",
                    blogSidebarCount: 10,
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
            //Google Search Consoleのタグ認識
            metadata: [{ name: "google-site-verification", content: "E1aPysisryTirXXLRhxU2UV-DlstISShSia06Gvz58g" }],

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
                        href: "http://www.cv.info.gifu-u.ac.jp/index.html",
                        label: "加藤研究室",
                        // html: "<p><img src='img/docusaurus-social-card.jpg' alt='加藤研究室' width='30' height='30'>ラベル</p>",
                        position: "right",
                    },
                    // {
                    //     href: "https://compass.labbase.jp/",
                    //     label: "LabBase",
                    //     position: "right",
                    // },
                    {
                        href: "https://github.com/hyokonbanwa",
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
                                label: "ホーム",
                                to: "/",
                            },
                            {
                                label: "プロフィール",
                                to: "/profile",
                            },
                            {
                                label: "ニュース",
                                to: "/profile#news",
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
                        title: "　",
                        items: [
                            {
                                label: "ブログ",
                                to: "/blog",
                            },
                            { label: "研究", to: "/blog/tags/research" },
                            {
                                label: "お問い合わせ(メール)",
                                to: "mailto:omote.hideaki.s8@s.gifu-u.ac.jp",
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
                        title: "制作物",
                        items: [
                            {
                                label: "3Dモデル チャットアプリ",
                                href: "https://github.com/hyokonbanwa/ChatWith3DAgent",
                            },
                            {
                                label: "Live2DモデルWebアプリ",
                                href: "https://hyokonbanwa.github.io/hiyori_live2d_voice.github.io/",
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
                        title: "所属・アカウント",
                        items: [
                            // {
                            //     label: "Blog",
                            //     to: "/blog",
                            // },
                            // {
                            //     label: "LabBase",
                            //     href: "https://compass.labbase.jp/",
                            // },
                            {
                                label: "岐阜大学 加藤研究室",
                                href: "http://www.cv.info.gifu-u.ac.jp/contents/members.html",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/hyokonbanwa",
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
