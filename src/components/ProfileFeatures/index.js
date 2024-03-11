import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import news from "@site/static/news";
import Link from "@docusaurus/Link";
import SkillList from "./SkillList";

// const sortedNews = news.sort(function (a, b) {
//     return a.date > b.date ? -1 : 1; //オブジェクトの降順ソート
// });
const FeatureList = news.map((news) => ({
    title: news.date + "：" + news.title,
    description: news.description,
}));

// const newsDescription = sortedNews.map((news) => (
//     <p key={news.date}>
//         {news.date}：{news.title}
//     </p>
// ));
// const FeatureList = [
//     {
//         title: "Easy to Use",
//         // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
//         description: <>Docusa</>,
//     },
//     {
//         title: "Focus on What Matters",
//         // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
//         description: (
//             <>
//                 Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the <code>docs</code>{" "}
//                 directory.
//             </>
//         ),
//     },
//     {
//         title: "Powered by React",
//         // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
//         description: (
//             <>Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.</>
//         ),
//     },
// ];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("")}>
            {/* <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div> */}
            <div className="text--left padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function ProfileFeatures() {
    return (
        <>
            <section className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">プロフィール</h1>
                    <ul>
                        <li>名前：表 英輝</li>
                        <li>所属：岐阜大学 加藤研究室</li>
                        <li>研究内容：マルチモーダルモデル</li>
                        <ul>
                            <li>
                                <Link to={"/blog/2"}>画像</Link>
                            </li>
                            <li>音声</li>
                            <li>テキスト</li>
                        </ul>
                    </ul>
                </div>
            </section>

            <section className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">経歴</h1>
                    <ul>
                        <li>2019 年岐阜大学入学</li>
                    </ul>
                </div>
            </section>

            <SkillList />

            <section id="my-news" className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">ニュース一覧</h1>
                    <div>
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
