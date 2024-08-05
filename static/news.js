import Link from "@docusaurus/Link";
const news = [
    {
        date: "2024-08-06",
        title: (
            <>
                <Link to="https://www.sbintuitions.co.jp/">SB Intuitions株式会社のインターンシップに参加 (2024年8月1日~2024年9月30日)</Link>
            </>
        ),
        description: (
            <>
                8/1から<Link to="https://www.sbintuitions.co.jp/">SB Intuitions株式会社</Link>
                のインターンシップに参加させていただいております。<br></br>
                9/30までの約2ヶ月間、マルチモーダル基盤モデル、特にビジョン＆ランゲージモデル（VLM）に関して研究開発を行う予定です。
            </>
        ),
    },
    {
        date: "2024-07-12",
        title: (
            <>
                <Link to="https://x.com/hideaki_o">X(旧Twitter)の運用を開始しました。</Link>
            </>
        ),
        description: (
            <>
                X(旧Twitter)アカウント作成以来運用していませんでしたが、夏季インターンシップに合わせて運用開始したいと思います。
                <br></br>アカウント：<Link to="https://x.com/hideaki_o">@hideaki_o</Link>
            </>
        ),
    },
    {
        date: "2024-05-16",
        title: (
            <>
                <Link to="https://confit.atlas.jp/guide/event/ssii2024/subject/SO2-06/category?cryptoId=">
                    投稿した論文がSSII2024に採択 & 【スポットライト発表】に選定されました。
                </Link>
            </>
        ),
        description: (
            <>
                卒業研究の研究成果を投稿したSSII2024に採択&
                <Link to="https://confit.atlas.jp/guide/event/ssii2024/subject/SO2-06/category?cryptoId=">【スポットライト発表】</Link>
                （口頭発表）に選定されました。また、
                <Link to="https://confit.atlas.jp/guide/event/ssii2024/subject/IS2-06/category?cryptoId=">【インタラクティブセッション】</Link>
                では対面でポスターを交えで研究紹介を行う予定です。(SSII20242日目 6月13日　SO2-06・IS2-06)
                <br></br>※<Link to="https://confit.atlas.jp/guide/event/ssii2024/top">第30回画像センシングシンポジウム(SSII2024) </Link>
            </>
        ),
    },
    {
        date: "2024-03-25",
        title: (
            <>
                <Link to="https://www.eng.gifu-u.ac.jp/topics/2024/04/02.html">学業成績優秀者として表彰されました。</Link>
            </>
        ),
        description: (
            <>
                <Link to="https://www.eng.gifu-u.ac.jp/topics/2024/04/02.html">【表彰】学業成績優秀者表彰式を挙行（令和6年3月25日）</Link>
                <br></br>卒業研究を含む学部4年生時代の学業成績を評価され表彰されました。
            </>
        ),
    },
    {
        date: "2024-03-01",
        title: (
            <>
                <Link to="https://confit.atlas.jp/guide/event/ssii2024/top?lang=ja">第30回画像センシングシンポジウム(SSII2024)に投稿しました。</Link>
            </>
        ),
        description: (
            <>
                <Link to="https://confit.atlas.jp/guide/event/ssii2024/top?lang=ja">第30回画像センシングシンポジウム(SSII2024)</Link>に投稿しました。
                <br></br>
                投稿内容は卒業研究の{" "}
                <Link to={"/blog/2024/03/11/2"}>「物体領域を用いたChain of Thoughtによるマルチモーダルモデルへの説明性の付与</Link>です。
            </>
        ),
    },
    {
        date: "2024-02-21",
        title: (
            <>
                <Link to="https://www.kyodo.co.jp/pr/2024-02-21_3840459/">
                    共同通信社で「低価格コンピュータで学習＆推論可能なAI基盤モデルを開発」が紹介されました。
                </Link>
            </>
        ),
        description: (
            <>
                共著論文"Constructing Lightweight Large Vision-Language Model: A Target Approach to Downstream Tasks"が
                <Link to="https://www.kyodo.co.jp/pr/2024-02-21_3840459/">「低価格コンピュータで学習＆推論可能なAI基盤モデルを開発」</Link>
                として共同通信社様に紹介されました。 <br></br>
                私は主に複数GPUでの高効率なマルチタスク学習(複数タスク・データセットでモデルを訓練する)方法の構築を担当しました。
            </>
        ),
    },
    {
        date: "2024-02-21",
        title: (
            <>
                <Link to="https://www.gifu-u.ac.jp/news/research/2024/02/entry21-13029.html">
                    岐阜大学の「低価格コンピュータで学習＆推論可能なAI基盤モデルを開発」で紹介されました。
                </Link>
            </>
        ),
        description: (
            <>
                共著論文"Constructing Lightweight Large Vision-Language Model: A Target Approach to Downstream Tasks"が
                <Link to="https://www.gifu-u.ac.jp/news/research/2024/02/entry21-13029.html">
                    「低価格コンピュータで学習＆推論可能なAI基盤モデルを開発」
                </Link>
                として岐阜大学公式サイトで紹介されました。 <br></br>
                私は主に複数GPUでの高効率なマルチタスク学習(複数タスク・データセットでモデルを訓練する)方法の構築を担当しました。
            </>
        ),
    },
];

export default news;
