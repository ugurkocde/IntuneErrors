import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import GitHubStars from "@site/src/components/GitHubStars";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroActions}>
            <Link
              className={clsx("button", styles.primaryButton)}
              to="/docs/overview"
            >
              Browse Error Codes
              <span className={styles.buttonIcon}>🔍</span>
            </Link>
            <Link
              className={clsx("button", styles.secondaryButton)}
              to="https://github.com/ugurkocde/IntuneErrors"
            >
              View on GitHub
              <span className={styles.buttonIcon}>→</span>
              <GitHubStars />
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img
            src="img/Laptop.png"
            alt="Laptop showing Intune error interface"
            className={styles.heroImage}
          />
          <div className={styles.gradientOrb}></div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Find and fix Microsoft Intune error codes quickly with our comprehensive troubleshooting guide"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
