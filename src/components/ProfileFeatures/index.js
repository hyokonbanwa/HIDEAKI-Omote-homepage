import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import news from "@site/static/news";
import Link from "@docusaurus/Link";
import SkillList from "./SkillList";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// const sortedNews = news.sort(function (a, b) {
//     return a.date > b.date ? -1 : 1; //オブジェクトの降順ソート
// });
const FeatureList = news.map((news) => ({
    title: (
        <>
            {news.date} : {news.title}
        </>
    ),
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
                    <h1 className="row padding-bottom--md padding-top--md">自己紹介 | Profile</h1>
                    <ul>
                        <li>名前：表 英輝</li>
                        <li>所属：岐阜大学院　自然科学技術研究科　知能理工学専攻　加藤研究室</li>
                        <li>学年：修士1年(M1)</li>
                        <li>研究内容：</li>
                        <ul>
                            <li>
                                <Link to={"/blog/2024/03/11/2"}>
                                    卒業研究「物体領域を用いたChain of Thoughtによるマルチモーダルモデルへの説明性の付与」
                                </Link>
                            </li>
                        </ul>
                    </ul>
                </div>
            </section>

            
            <section className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">経歴 | History</h1>
                    <ul>
                        <li>2019年4月　岐阜大学　工学部 電気電子・情報工学科　入学</li>
                        <li>2024年3月　岐阜大学　工学部 電気電子・情報工学科　卒業</li>
                        <li>2024年4月　岐阜大学　自然科学技術研究科 知能理工学専攻　入学</li>
                    </ul>
                </div>
            </section>
            <section id="news" className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">ニュース一覧 | News</h1>
                    <div>
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <SkillList />
            <section className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">発表 | Publication</h1>
                    <h2 className="row padding-bottom--md">国内学会 | Domestic Conference</h2>
                    <ul>
                        <li><Link to="https://www.tc-iaip.org/dia/2024/program.html#os3">軸屋敬介，梁瀬和哉，<u>表英輝</u>，土田裕登，加藤邦人: "大規模Vision&Languageマルチタスクモデルの学習効率化とHuman-Object Interactionへの適用"，動的画像処理実利用化ワークショップ DIA 2024，OS3-2 (IS3-2)，2024.3.5</Link></li>
                        <li>(投稿中) <u>表英輝</u>，梁瀬 和哉，加藤 邦人: "物体領域を用いたChain of Thoughtによるマルチモーダルモデルへの説明性の付与"，第30回画像センシングシンポジウム SSII 2024</li>
                    </ul>
                    <h2 className="row padding-bottom--md">国際学会 | International Conference</h2>
                    <ul>
                        <li><Link to="https://sites.google.com/view/iw-fcv2024/conference">Kazuya Yanase，Keisuke Jikuya，<u>Hideaki Omote</u>，Hiroto Tsuchida，Kunihito Kato: "Constructing Lightweight Large Vision-Language Model: A Target Approach to Downstream Tasks"，IW-FCV 2024，OS6-1，2024.2.20</Link></li>
                    </ul>
                </div>
            </section>

            <section className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">制作物 | Products</h1>
                    <ul>
                        <li><h3><Link to="https://hyokonbanwa.github.io/hiyori_live2d_voice.github.io/">二次元美少女を動かせるWebアプリ</Link></h3>
                        pixi-live2d-displayという描画ライブラリPixiJS上でLive2dキャラクターを動かせるライブラリを使用しました<br></br>
                こだわった点はキャラクターが音声に応じて口パクする(VOICEVOX利用時のみ)ところです。<br></br>VOICEVOXを起動する場合は
                <Link to="https://note.com/natukichan/n/n016bcd171da0">なつきちゃん様の記事(https://note.com/natukichan/n/n016bcd171da0)</Link>を参考にしていただきCORS Policy
                Modeをallにする必要があります</li>
                    </ul>
                </div>
            </section>

            {/* <section id="slider" className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">Githubリポジトリ</h1> */}
            {/* <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
        }}

        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="button button--secondary button--lg padding--xl">Slide 1</div></SwiperSlide>
      </Swiper> */}
            {/* </div>
            </section> */}


        </>
    );
}
