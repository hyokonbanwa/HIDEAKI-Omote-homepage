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
                    <h1 className="row padding-bottom--md padding-top--md">プロフィール</h1>
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
                    <h1 className="row padding-bottom--md">経歴</h1>
                    <ul>
                        <li>2019年4月　岐阜大学　工学部 電気電子・情報工学科　入学</li>
                        <li>2024年3月　岐阜大学　工学部 電気電子・情報工学科　卒業</li>
                        <li>2024年4月　岐阜大学　自然科学技術研究科 知能理工学専攻　入学</li>
                    </ul>
                </div>
            </section>

            <SkillList />

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

            <section id="news" className={styles.features}>
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
