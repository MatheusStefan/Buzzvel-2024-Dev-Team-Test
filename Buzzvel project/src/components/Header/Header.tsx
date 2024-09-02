import React, { useRef } from "react";
import styles from "./Header.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

type HeaderProps = unknown;

const Header: React.FC<HeaderProps> = () => {
  const navRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: ".hero-section__contact",
          start: "top center",
          end: "center center",
          scrub: true,
        },
        gap: "1em",
        backgroundColor: "rgb(0, 0, 0, 0.1)",
        padding: "5px",
        borderRadius: "1em",
      });
    });

    mm.add("(min-width: 769px)", () => {
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: ".hero-section__contact",
          start: "top center",
          end: "center center",
          scrub: true,
        },
        position: "fixed",
        top: "10",
        gap: "1em",
        backgroundColor: "rgb(0, 0, 0, 0.2)",
        padding: "10px",
        borderRadius: "2em",
      });
    });
  });

  return (
    <header className={styles.header}>
      <div className={styles["header__logo"]}>
        <img
          src="src/assets/favicon.ico"
          alt="buzzvel-logo"
          className={styles["header__logo-content"]}
        />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles["navigation__list"]} ref={navRef}>
          <li className={styles["navigation__item"]}>
            <a href="#" className={styles["navigation__link"]}>
              <img
                src="src/assets/home.svg"
                alt="home-icon"
                className={styles["navigation__icon"]}
              />
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#about-me" className={styles["navigation__link"]}>
              <img
                src="src/assets/user-icon.svg"
                alt="about_me-icon"
                className={styles["navigation__icon"]}
              />
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#projects" className={styles["navigation__link"]}>
              <img
                src="src/assets/projects-section.svg"
                alt="projects-icon"
                className={styles["navigation__icon"]}
              />
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#timeline" className={styles["navigation__link"]}>
              <img
                src="src/assets/timeline-section.svg"
                alt="timeline-icon"
                className={styles["navigation__icon"]}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
