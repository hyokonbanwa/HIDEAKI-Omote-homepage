import { faEnvelope, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.css";
import { useState } from "react";

const SkillList = () => {
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
    const [state, setState] = useState(0);

    const handleClick = (index) => {
        return () => setState(index);
    };
    return (
        <section className={styles.features}>
            <div className="container">
                <h1 className="row padding-bottom--md">スキル</h1>
                <ul className="pills row">
                    {skills.map((skill, index) => {
                        return (
                            <li className={`col pills__item ${index === state ? "pills__item--active" : ""}`} onClick={handleClick(index)}>
                                <FontAwesomeIcon icon={skill.icon} size="3x"></FontAwesomeIcon>
                            </li>
                        );
                    })}

                    {/* <li className="pills__item col">
                        <FontAwesomeIcon icon={faTwitter} size="3x"></FontAwesomeIcon>
                    </li>
                    <li className="pills__item col">
                        <FontAwesomeIcon icon={faTwitter} size="3x"></FontAwesomeIcon>
                    </li> */}
                </ul>
                <div className="row">
                    <div className={`${styles.featuresAlt} col`}>
                        <h2>{skills[state].name}</h2>
                        <ul>
                            {skills[state].description.map((desc, index) => {
                                return <li key={index}>{desc}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillList;
