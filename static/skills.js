import { faEnvelope, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPython, faJs, faGithub, faUnity, faDocker } from "@fortawesome/free-brands-svg-icons";
const skills = [
    {
        icon: faPython,
        name: "Python | Pytorch",
        description: [<>Pytorchで研究しました。</>, <>画像認識をしました。</>],
    },
    {
        icon: faJs,
        name: "JavaScript | TypeScript",
        description: [
            <>このホームページはDocusaurusというReactフレームワークで構築しました。</>,
            <>Javascript(TypeScript)でLive2dを使ったWebアプリを作りました。</>,
        ],
    },
    {
        icon: faGithub,
        name: "Github",
        description: [<>Git & Githubは基本的な操作は使えます。</>, <>このサイトはGithub actionsによって自動的に最新のビルド内容が反映されます。</>],
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
