import React, { useRef, useLayoutEffect, useContext } from "react";
import styles from "./LandingPage.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ThemeContext } from "../../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

type LandingPageProps = unknown;

const LandingPage: React.FC<LandingPageProps> = () => {
  const contactRef = useRef<HTMLParagraphElement | null>(null);
  const comp = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-180",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from(["#welcome", "#hero-section", "#mouse", "#spotify"], {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.relative} ref={comp}>
      <div
        className={styles["relative__container"]}
        id="intro-slider"
        style={{ backgroundColor: theme === "dark" ? "#fffff0" : "#000" }}
      >
        <h1 className={styles["relative__title-1"]} id="title-1">
          Matheus Stefan
        </h1>
        <h2 className={styles["relative__title-2"]} id="title-2">
          Software Developer
        </h2>
      </div>
      <section className={styles.landingPage} id="home">
        <h1 className={styles.welcome} id="welcome">
          Welcome.
        </h1>
        <div className={styles["about-me"]}>
          <div className={styles["hero-section"]} id="hero-section">
            <div className={styles["hero-section__title"]}>
              <img
                src="icons/user.png"
                alt="use-picture"
                className={styles.user}
              />
              <p className={styles["hero-section__contact"]} ref={contactRef}>
                <a
                  href="mailto:roccomatheus0@gmail.com"
                  className={styles["hero-section__contact-info"]}
                >
                  Send me a message!
                </a>
              </p>
              <div className={styles.contact}>
                <ul className={styles["contact__list"]}>
                  <li className={styles["contact__item"]}>
                    <a
                      href="https://github.com/MatheusStefan"
                      target="_blank"
                      className={styles["contact__link"]}
                      style={{ color: theme === "dark" ? "#fffff0" : "#000" }}
                    >
                      <svg
                        viewBox="0 -3.5 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles["contact__icon"]}
                      >
                        <g fill={theme === "dark" ? "#fffff0" : "#000"}>
                          <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />

                          <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                        </g>
                      </svg>
                      <p className={styles["contact__link-text"]}>
                        Check my github!
                      </p>
                    </a>
                  </li>
                  <li className={styles["contact__item"]}>
                    <a
                      href="https://www.linkedin.com/in/matheus-stefan-rocco/"
                      target="_blank"
                      className={styles["contact__link"]}
                      style={{ color: theme === "dark" ? "#fffff0" : "#000" }}
                    >
                      <svg
                        fill={theme === "dark" ? "#fffff0" : "#000"}
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 310 310"
                        className={styles["contact__icon"]}
                      >
                        <g id="XMLID_801_">
                          <path
                            id="XMLID_802_"
                            d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                          />
                          <path
                            id="XMLID_803_"
                            d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                          />
                          <path
                            id="XMLID_804_"
                            d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                          />
                        </g>
                      </svg>
                      <p className={styles["contact__link-text"]}>
                        Let's connect!
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles["spotify-label"]} id="spotify">
            <iframe
              className={styles["spotify-label__link"]}
              src="https://open.spotify.com/embed/artist/01nhiJDD1jA4Bu3VDTlPVN?utm_source=generator&theme=0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={styles["container"]} id="mouse">
          <div className={styles["field"]}>
            <div className={styles["mouse"]}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
