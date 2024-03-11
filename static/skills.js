import { faEnvelope, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const skills = [
    {
        icon: faTwitter,
        name: "Pytorch",
        description: [<>Pytorchで研究しました</>, <>画像認識をしました</>],
    },
    {
        icon: faEnvelope,
        name: "Javascript",
        description: [<>Webアプリを作りました</>, <>Reactを使いました</>],
    },
    {
        icon: faTwitter,
        name: "Unity",
        description: [<>AIエージェントを作りました</>],
    },
    {
        icon: faTwitter,
        name: "Docker",
        description: [<>深層学習用の各PCの環境構築にはDockerを使用します</>],
    },
];

export default skills;
