import React from "react";
import styles from "./Footer.module.scss";

type FooterProps = unknown;

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles["footer__list"]}>
        <li className={styles["footer__item"]}>
          <a href="https://github.com/MatheusStefan" target="_blank" className={styles["footer__link"]}>
            <img
              src="icons/github-icon.svg"
              alt="github-icon"
              className={styles["footer__link icon"]}
            />
          </a>
          Check my github!
        </li>
        <li className={styles["footer__item"]}>
          <a href="https://www.linkedin.com/in/matheus-stefan-rocco/" target="_blank" className={styles["footer__link"]}>
            <img
              src="icons/linkedin-icon.svg"
              alt=""
              className={styles["footer__link icon"]}
            />
          </a>
          Let's connect!
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
