import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import { useState } from "react";
import styles from "./styles.module.css";

type ErrorCategory = {
  title: string;
  icon: string; // You can use emoji or replace with Svg if you prefer custom icons
  description: JSX.Element;
  link: string;
};

const ErrorCategories: ErrorCategory[] = [
  {
    title: "Device Enrollment Errors",
    icon: "🖥️",
    description: (
      <>
        Common error codes encountered during device enrollment process in
        Microsoft Intune, including AutoPilot and Device Management.
      </>
    ),
    link: "/docs/Overview",
  },
  {
    title: "Application Errors",
    icon: "⚙️",
    description: (
      <>
        Troubleshoot application installation, deployment, and configuration
        errors in Microsoft Intune managed devices.
      </>
    ),
    link: "/docs/Applications/Overview",
  },
  {
    title: "Policy & Compliance Errors",
    icon: "🔒",
    description: (
      <>
        Error codes related to policy assignments, compliance issues, and
        configuration profiles in Intune.
      </>
    ),
    link: "/docs/Overview",
  },
];

function ErrorCategoryCard({ title, icon, description, link }: ErrorCategory) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link} className={styles.cardContainer}>
        <div className={styles.errorCard}>
          <div className={styles.errorIcon}>
            <span className={styles.iconWrapper}>{icon}</span>
          </div>
          <div className={styles.cardContent}>
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search error codes (e.g., 0x80004005)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          <span>Search</span>
          <span className={styles.searchIcon}>🔍</span>
        </button>
      </form>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2">Intune Error Code Reference</Heading>
          <p>
            Find solutions for common Microsoft Intune error codes and
            troubleshooting guides
          </p>
          <SearchBox />
        </div>
        <div className="row">
          {ErrorCategories.map((props, idx) => (
            <ErrorCategoryCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
