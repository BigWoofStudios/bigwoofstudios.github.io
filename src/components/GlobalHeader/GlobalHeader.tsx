import { Component } from "solid-js";
import styles from "./GlobalHeader.module.css";
import { Link } from "..";
import BigWoofStudiosLogo from "#assets/big-woof-studios-logo.webp";

export const GlobalHeader: Component = () => {
  return (
    <header class={styles.globalHeader}>
      <div class={styles.homeLogo}>
        <Link href="/">
          <img src={BigWoofStudiosLogo} alt="Big Woof Studios" />
        </Link>
      </div>
      <div class={styles.linksWrapper}>
        <Link href="/endless-dawn">Endless Dawn</Link>
        <Link href="/about">About</Link>
        <Link href="mailto:bigwoofstudios@gmail.com">Contact</Link>
      </div>
    </header>
  );
};
