import React, { useRef } from "react";
import styles from "./LandingPage.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

type LandingPageProps = unknown;

const LandingPage: React.FC<LandingPageProps> = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLParagraphElement | null>(null);
  const taglineRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.to(heroRef.current, {
      backgroundColor: "rgb(255, 255, 255, 0.8)",
      scrollTrigger: {
        trigger: ".hero-section__tagline",
        start: "top center",
        end: "center-=16% center",
        scrub: true,
      },
    });
    tl.to(contactRef.current, {
      color: "#fff",
    });
    gsap.to(taglineRef.current, {
      duration: 3,
      text: {
        value: "Changing the WORLD through CODE",
        type: "diff",
      },
      repeat: 2,
    });
  }, []);

  return (
    <section className={styles.landingPage} id="home">
      <div className={styles.introduction}>
        <h1 className={styles["introduction-title"]}>Matheus Stefan</h1>
        <p className={styles.description}>Frontend developer</p>
        <span className={styles["hero-section__tagline"]} ref={taglineRef}>
          Changing the world through code
        </span>
      </div>
      <div className={styles["hero-section"]} ref={heroRef}>
        <div className={styles["hero-section__title"]}>
          <img
            src="src/assets/user.png"
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
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
