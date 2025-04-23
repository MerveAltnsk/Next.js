import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/merve-alt%C4%B1n%C4%B1%C5%9F%C4%B1k" target="_blank">
        Merve Altınışık
      </Link>
    </footer>
  );
}

export { Footer };
