import React, { useContext, useRef } from "react";
import styles from "./Header.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ThemeContext } from "../../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

type HeaderProps = unknown;

const Header: React.FC<HeaderProps> = () => {
  const navRef = useRef<HTMLUListElement | null>(null);
  const { theme, setTheme } = useContext(ThemeContext);

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
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={styles["navigation__theme-color"]}
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56 56"
                  className={styles["navigation__icon"]}
                >
                  <path
                    style={{ fill: "#fffff0" }}
                    d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
               s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles["navigation__icon"]}
                >
                  <path
                    d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12 2V4"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12 20V22"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 12L2 12"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M22 12L20 12"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19.7778 4.22266L17.5558 6.25424"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.22217 4.22266L6.44418 6.25424"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6.44434 17.5557L4.22211 19.7779"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19.7778 19.7773L17.5558 17.5551"
                    stroke="#fffff0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </button>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#" className={styles["navigation__link"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill={"#fffff0"}
                className={styles["navigation__icon"]}
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#about-me" className={styles["navigation__link"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                 fill={"#fffff0"}
                className={styles["navigation__icon"]}
              >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
              </svg>
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#projects" className={styles["navigation__link"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                 fill={"#fffff0"}
                className={styles["navigation__icon"]}
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z" />
              </svg>
            </a>
          </li>
          <li className={styles["navigation__item"]}>
            <a href="#timeline" className={styles["navigation__link"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                 fill={"#fffff0"}
                className={styles["navigation__icon"]}
              >
                <path d="M240-280h240v-80H240v80Zm120-160h240v-80H360v80Zm120-160h240v-80H480v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
