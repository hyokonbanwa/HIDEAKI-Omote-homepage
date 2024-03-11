import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.css";
import { useState } from "react";
import skills from "@site/static/skills";
const SkillList = () => {
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
