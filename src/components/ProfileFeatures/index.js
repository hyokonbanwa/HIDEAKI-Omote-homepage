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
                        <li>学年：修士2年(M2)</li>
                        <li>研究内容解説：</li>
                        <ul>
                            <li>
                                <Link to={"/blog/2025/01/18/index"}>
                                    修士での研究内容「距離反比例ラベルとGEM損失関数を用いた視覚言語モデルを物体検出を伴う下流タスクにより効果的に適応させるファインチューニング手法の提案」」
                                </Link>
                            </li>
                            <li>
                                <Link to={"/blog/2024/06/09/index"}>
                                    チーム研究「大規模Vision&Languageマルチタスクモデルの学習効率化とHuman-Object
                                    Interactionへの適用」(DIA2024の共著論文)
                                    <br></br>及び「Constructing Lightweight Large Vision-LanguageModel: A Target Approach to Downstream
                                    Tasks」(IW-FCV2024の共著論文)
                                </Link>
                            </li>
                            <li>
                                <Link to={"/blog/2024/03/11/2"}>
                                    卒業研究「物体領域を用いたChain of
                                    Thoughtによるマルチモーダルモデルへの説明性の付与」(SSII2024へ投稿し採択&スポットライト論文に選定)
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
                        <li>
                            <Link to="https://www.tc-iaip.org/view/2024/program.html#is4">
                                <u>表英輝</u>，鈴木哲平: "⽂書画像理解性能向上に向けた視覚⾔語モデル構築⽅法の検討"，
                                ビジョン技術の実利用ワークショップ2024 ViEW2024，IS4-5，2024.12.6，
                                <br></br>
                                <Link to="https://x.com/sbintuitions/status/1859869504240746794">
                                    ※SB Intuitions株式会社でのインターンシップの成果
                                </Link>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://confit.atlas.jp/guide/event/ssii2024/subject/SO2-06/category?cryptoId=">
                                <u>表英輝</u>，梁瀬 和哉，加藤 邦人: "物体領域を用いたChain of
                                Thoughtによるマルチモーダルモデルへの説明性の付与"，第30回画像センシングシンポジウム SSII 2024，SO2-06
                                (IS2-06)，2024.6.13
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.tc-iaip.org/dia/2024/program.html#os3">
                                軸屋敬介，梁瀬和哉，<u>表英輝</u>，土田裕登，加藤邦人:
                                "大規模Vision&Languageマルチタスクモデルの学習効率化とHuman-Object
                                Interactionへの適用"，動的画像処理実利用化ワークショップ DIA 2024，OS3-2 (IS3-2)，2024.3.5
                            </Link>
                        </li>
                    </ul>
                    <h2 className="row padding-bottom--md">国際学会 | International Conference</h2>
                    <ul>
                        <li>
                            <Link to="https://sites.google.com/view/iw-fcv2024/conference#h.xtqndf4telz0">
                                Kazuya Yanase，Keisuke Jikuya，<u>Hideaki Omote</u>，Hiroto Tsuchida，Kunihito Kato: "Constructing Lightweight Large
                                Vision-Language Model: A Target Approach to Downstream Tasks"，IW-FCV 2024，OS6-1，2024.2.20
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">インターンシップ参加 | Internship</h1>
                    <ul>
                        <li>
                            <h3>
                                <Link to="https://www.sbintuitions.co.jp/">SB Intuitions株式会社</Link>
                            </h3>
                            <b>期間</b>: 2024年8月1日～2024年9月30日<br></br>
                            <b>実施テーマ</b>: 「高解像度文書画像理解に向けたVLM(画像と言語を理解できるAIモデル)の構築・研究開発」<br></br>
                            <b>URL</b>:{" "}
                            <Link to="https://x.com/sbintuitions/status/1859869504240746794">
                                https://x.com/sbintuitions/status/1859869504240746794
                            </Link>
                            <br></br>
                            <b>実施内容</b>: 文書画像に関して認識応答できるAIモデルは需要があり、これは画像を認識し言語で応答できるVLM(Vision and
                            Language Model)で実現可能です。 そのため、文書画像理解に有用なVLMの構築方法を比較検討しました。
                            具体的には、VLMの画像エンコーダーとしてViTとCNNの異なるアーキテクチャを採用した場合の比較、
                            画像エンコーダーへの入力解像度を上げての比較、画像エンコーダーのパラメータ更新の有無の比較などを行いました。
                            研究成果は国内学会のViEW2024に投稿し発表予定です。<br></br>
                            <b>使用スキル</b>:
                            PythonとPyTorchを用いたVLMモデルのコーディング、Slurmを使用したVLMの分散並列学習、GiT・GitHubを使用した複数人でのコード開発・管理
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.features}>
                <div className="container">
                    <h1 className="row padding-bottom--md">制作物 | Products</h1>
                    <ul>
                        <li>
                            <h3>
                                <Link to="https://github.com/hyokonbanwa/ChatWith3DAgent">ChatWith3DAgent(3次元狐耳少女と会話できるアプリ)</Link>
                            </h3>
                            UnityでVRM形式の3Dエージェントと会話できるアプリを制作しました。こだわった点は表情変化です。<br></br>
                            エージェント(ChatGPT)が生成した文章をGoogleNaturalLanguage
                            APIで感情分析してそれに対応した表情を再生させます。また、VOICEVOXによる音声再生も実装しています。
                        </li>
                        <li>
                            <h3>
                                <Link to="https://hyokonbanwa.github.io/hiyori_live2d_voice.github.io/">二次元美少女を動かせるWebアプリ</Link>
                            </h3>
                            pixi-live2d-displayという描画ライブラリPixiJS上でLive2dキャラクターを動かせるライブラリを使用しました<br></br>
                            こだわった点はキャラクターが音声の音量に応じて口パクの大きさを変える(VOICEVOX利用時のみ)ところです。<br></br>
                            VOICEVOXを起動する場合は
                            <Link to="https://note.com/natukichan/n/n016bcd171da0">
                                なつきちゃん様の記事(https://note.com/natukichan/n/n016bcd171da0)
                            </Link>
                            を参考にしていただきCORS Policy Modeをallにする必要があります。<br></br> ソースコード：
                            <Link to="https://github.com/hyokonbanwa/PixiJsTest/blob/main/src/app/IndexLibrary.ts">TypeScritファイル</Link>、
                            <Link to="https://github.com/hyokonbanwa/PixiJsTest/blob/main/src/templates/index.html">HTMLファイル</Link>
                            <br></br>もともと<Link to="https://www.qualtrics.com/jp/">Qualtrics</Link>
                            というアンケートサイトで動かすアプリのひな形として作成したのですが、QusltricsのJavaScriptに対する
                            <Link to="https://community.qualtrics.com/custom-code-12/how-can-i-upload-custom-js-files-to-the-library-so-that-they-can-be-referred-to-the-survey-5527">
                                制限
                            </Link>
                            が多く、CDN経由でビルドしたJSファイルを
                            <Link to="https://github.com/hyokonbanwa/PixiJsTest/blob/main/src/app/quarltrics.js">Qualtrics上で読み込む方式</Link>
                            にしたためとても煩雑なコードとなりました。
                        </li>
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
