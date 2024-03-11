import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import news from "@site/static/news";
import Link from "@docusaurus/Link";

const recentPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");
const recentBlog = recentPosts.items.slice(0, 5).map((item, index) => (
    <Link key={index} to={item.permalink}>
        <p>{item.title}</p>
    </Link>
));

const allPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/hideaki-omote-homepage-build-blog-archive-df1.json");

const researchBlog = allPosts.blogPosts
    .filter((item) => item.metadata.tags.map((tag) => tag.label).includes("research"))
    .slice(0, 5)
    .map((item, index) => (
        <Link key={index} to={item.metadata.permalink}>
            <p>{item.metadata.title}</p>
        </Link>
    ));

// console.log(recentBlog);

const sortedNews = news
    .sort(function (a, b) {
        return a.date > b.date ? -1 : 1; //オブジェクトの降順ソート
    })
    .slice(0, 5); //最新の3件を取得

const newsDescription = sortedNews.map((news) => (
    <p key={Math.random()}>
        {news.date}：{news.title}
    </p>
));

//jsonにニュースをまとめる
const FeatureList = [
    {
        title: "直近のニュース",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: <>{newsDescription}</>,
        button: "ニュース一覧",
        link: "/profile#my-news",
    },

    {
        title: "最新のブログ投稿", //ブログポップアップ
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description:
            // <>
            //     Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the <code>docs</code>{" "}
            //     directory.
            // </>
            recentBlog,
        button: "ブログ一覧",
        link: "/blog",
    },
    {
        title: "研究ブログ", //ブログポップアップ
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: researchBlog,
        button: "研究ブログ一覧",
        link: "/blog/tags/research",
    },
    // {
    //     title: "Powered by React",
    //     Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    //     description: (
    //         <>Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.</>
    //     ),
    // },
];

function Feature({ Svg, title, description, button, link }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3" className="text--center">
                    {title}
                </Heading>
                {description}
            </div>
            <div className="text--center">
                <Link className="button button--secondary button--lg margin--xs button--center" to={link}>
                    {button}
                </Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
