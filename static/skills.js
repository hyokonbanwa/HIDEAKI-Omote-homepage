// import { faEnvelope, faT } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@docusaurus/Link";

import { faPython, faJs, faGithub, faUnity, faDocker } from "@fortawesome/free-brands-svg-icons";
const skills = [
    {
        icon: faPython,
        name: "Python | PyTorch",
        description: [<>PythonとPyTorchを用いて深層学習の研究を行っています。</>],
    },
    {
        icon: faJs,
        name: "JavaScript | TypeScript",
        description: [
            <>このホームページはDocusaurusというReactフレームワークで構築しました。</>,
            <>
                Javascript(TypeScript)でLive2dを使った
                <Link to="https://hyokonbanwa.github.io/hiyori_live2d_voice.github.io/">二次元美少女を動かせるWebアプリ</Link>
                を作りました。 こだわった点はキャラクターが音声に応じて口パクする(VOICEVOX利用時のみ)ところです。<br></br>VOICEVOXを起動する場合は
                <Link to="https://note.com/natukichan/n/n016bcd171da0">なつきちゃん様の記事(https://note.com/natukichan/n/n016bcd171da0)</Link>を参考にしていただきCORS Policy
                Modeをallにする必要があります
            </>,
        ],
    },
    {
        icon: faGithub,
        name: "Github",
        description: [
            <>Git & Githubは基本的な操作は使えます。</>,
            <>
                このサイトはGithub actionsによって自動的に最新のビルド内容が反映されます。設定ファイルは
                <Link to="https://github.com/hyokonbanwa/HIDEAKI-Omote-homepage/blob/main/.github/workflows/deploy.yml">Gitub</Link>にあります。
            </>,
        ],
    },
    {
        icon: faUnity,
        name: "Unity",
        description: [<>Live2Dで動いてChatGPTで答えてくれるAIエージェントを作りました。</>, <>大学の授業でVRでできる滝行体験アプリを作りました。</>],
    },
    {
        icon: faDocker,
        name: "Docker",
        description: [<>深層学習用の各PCの環境構築にはDockerを使用します</>],
    },
];

export default skills;
