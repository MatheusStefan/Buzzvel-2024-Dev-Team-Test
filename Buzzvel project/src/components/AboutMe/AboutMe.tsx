import React, { useRef } from "react";
import styles from "./AboutMe.module.scss";
import gsap from "gsap";
import { Draggable, ScrollTrigger, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable, TextPlugin, ScrollTrigger);

type AboutMeProps = unknown;

const AboutMe: React.FC<AboutMeProps> = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const motivationRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (sliderRef.current && containerRef.current) {
      const slider = sliderRef.current;
      const container = containerRef.current;

      const sliderWidth = slider.scrollWidth;
      const containerWidth = container.clientWidth;

      gsap.set(slider, { x: 520 });

      Draggable.create(slider, {
        type: "x",
        bounds: {
          minX: sliderWidth - containerWidth - 450,
          maxX: -(sliderWidth - containerWidth) + 450,
        },
        inertia: true,
        edgeResistance: 1,
        snap: {
          x: (endValue: number) => Math.round(endValue / 300) * 300,
        },
      });
    }
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider-container",
        start: "center center",
        end: "bottom center",
        toggleActions: "restart pause resume reset",
      },
    });
  
    tl.to(motivationRef.current, {
      duration: 3,
      text: {
        value: "I am excited about the opportunity to join Buzzvel because I believe it is the perfect environment for individuals who are passionate about growth and continuous learning. The dedication and enthusiasm for coding that I see in the Buzzvel team truly inspire me. As a Portuguese speaker, I also appreciate that Buzzvel is based in Lisbon, which would facilitate clear and effective communication. I am eager to contribute to a team that values innovation and collaboration while enhancing my skills and advancing my career.",
        speed: 2,
        type: "diff",
      },
      ease: "none",
      repeat: 0,
    });
  });
  

  return (
    <div className={styles.aboutMe} id="about-me">
      <h2 className={styles["aboutMe__title"]}>My experience</h2>
      <div className={styles["slider-container"]} ref={containerRef}>
        <div className={styles.slider} ref={sliderRef}>
          <div className={styles.card}>
            <h2 className={styles["card__year"]}>2020</h2>
            <p className={styles["card__content"]}>Graduated in Bioanalysis</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles["card__year"]}>2021</h2>
            <p className={styles["card__content"]}>
              Started to learn Java and Spring Boot by online courses.
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles["card__year"]}>2022</h2>
            <p className={styles["card__content"]}>
              Participated in a VTEX program named Hiring Coders, plus{" "}
              <a
                href="https://www.dio.me/en"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["card__link"]}
              >
                DIO{" "}
              </a>
              Bootcamps
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles["card__year"]}>2023</h2>
            <p className={styles["card__content"]}>
              Started to self learn JavaScript, HTML and CSS through
              documentation and{" "}
              <a
                href="https://www.freecodecamp.org/Matheus_Stefan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["card__link"]}
              >
                freeCodeCamp.
              </a>
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles["card__year"]}>2024</h2>
            <p className={styles["card__content"]}>
              Started a fullstack bootcamp on{" "}
              <a
                href="https://shorturl.at/Mwhat"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["card__link"]}
              >
                MateAcademy
              </a>
              , been part of the first brazilian fullstack students.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.motivation}>
        <h2 className={styles["motivation__title"]}>Why Buzzvel?</h2>
        <p className={styles["motivation__content"]} ref={motivationRef}></p>
      </div>
    </div>
  );
};

export default AboutMe;
