import React, { useRef, useLayoutEffect } from "react";
import styles from "./LandingPage.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type LandingPageProps = unknown;

const LandingPage: React.FC<LandingPageProps> = () => {
  const contactRef = useRef<HTMLParagraphElement | null>(null);
  const comp = useRef<HTMLDivElement>(null);

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
      <div className={styles["relative__container"]} id="intro-slider">
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
                    >
                      <img
                        src="icons/github-icon.svg"
                        alt="github-icon"
                        className={styles["contact__link icon"]}
                      />
                      Check my github!
                    </a>
                  </li>
                  <li className={styles["contact__item"]}>
                    <a
                      href="https://www.linkedin.com/in/matheus-stefan-rocco/"
                      target="_blank"
                      className={styles["contact__link"]}
                    >
                      <img
                        src="icons/linkedin-icon.svg"
                        alt=""
                        className={styles["contact__link icon"]}
                      />
                      Let's connect!
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
