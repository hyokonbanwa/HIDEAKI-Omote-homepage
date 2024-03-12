// export default function Profile() {
//     return (
//         <div>
//             <h1>Profile</h1>
//             <p>表　英輝のホームページです</p>
//         </div>
//     );
// }
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/ProfileFeatures";

import Heading from "@theme/Heading";
import styles from "../index.module.css";
import metadata from "@site/static/metadata";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const mailEnter = (e) => {
        //hoverアイコンに変更
        e.target.style.cursor = "pointer";
    };
    const mailLeave = (e) => {
        e.target.style.cursor = "default";
    };
    const mailClick = (e) => {
        window.location.href = "mailto:omote@cv.info.gifu-u.ac.jp";
    };
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {metadata.title}
                </Heading>
                <p className="hero__subtitle">{metadata.subtitle}</p>

                <p onClick={mailClick} onMouseEnter={mailEnter} onMouseLeave={mailLeave}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    &nbsp;メール ：omote@cv.info.gifu-u.ac.jp
                </p>

                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg margin-right--xs col--2" to="/">
                        　ホーム　
                    </Link>
                    <Link className="button button--secondary button--lg margin-left--xs col--2" to="/blog">
                        　ブログ　
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`${siteConfig.title}`} description="表　英輝のホームページです">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
