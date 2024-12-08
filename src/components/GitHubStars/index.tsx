import React, { useEffect, useState } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import styles from "./styles.module.css";

export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);
  const isBrowser = useIsBrowser();

  useEffect(() => {
    if (!isBrowser) return;
    fetch("https://api.github.com/repos/ugurkocde/IntuneErrors")
      .then((response) => response.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch((error) => console.error("Error fetching GitHub stars:", error));
  }, [isBrowser]);

  if (stars === null) return null;

  return <span className={styles.starCount}>★ {stars}</span>;
}
