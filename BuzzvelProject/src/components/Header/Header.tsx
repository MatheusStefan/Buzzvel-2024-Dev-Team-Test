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
    gsap.fromTo(
      navRef.current,
      {
        scrollTrigger: {
          trigger: ".aboutMe",
          start: "top center",
          end: "center top",
          scrub: true,
        },
        width: "100vw",
      },
      {
        scrollTrigger: {
          trigger: ".aboutMe",
          start: "top center",
          end: "center top",
          scrub: true,
        },
        width: "50vw",
      }
    );
  });

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles["navigation__list"]} ref={navRef}>
          <li className={styles["navigation__item"]}>
            <a href="#" className={styles["navigation__link"]}>
             <img src="icons/home.svg" alt="" />
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#about-me" className={styles["navigation__link"]}>
              <img src="icons/user-icon.svg" alt="" />
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#projects" className={styles["navigation__link"]}>
              <img src="icons/projects-section.svg" alt="projects-section" />
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#timeline" className={styles["navigation__link"]}>
              <img src="icons/timeline-section.svg" alt="timeline-section" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
