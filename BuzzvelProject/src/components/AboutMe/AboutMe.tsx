import React, { useContext, useRef } from "react";
import styles from "./AboutMe.module.scss";
import gsap from "gsap";
import { Draggable, ScrollTrigger, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ThemeContext } from "../../context/ThemeContext";
import { cards } from "../../data/cards";

gsap.registerPlugin(Draggable, TextPlugin, ScrollTrigger);

type AboutMeProps = unknown;

const AboutMe: React.FC<AboutMeProps> = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const motivationRef = useRef<HTMLParagraphElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);

  useGSAP(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;

    if (slider && container) {
      const cardWidth = 250;
      const containerWidth = container.offsetWidth;
      gsap.set(slider, { x: -100 });

      Draggable.create(slider, {
        type: "x",
        bounds: {
          minX: 1400,
          maxX: -200,
        },
        inertia: true,
        edgeResistance: 1,
        liveSnap: {
          x: (endValue: number) => {
            // Calculate the card that is closest to the center of the container
            const closestCardIndex = Math.round(-endValue / cardWidth);
            // Calculate the new x position to center that card
            const centeredPosition =
              -closestCardIndex * cardWidth + containerWidth / cardWidth;
            return centeredPosition;
          },
        },
      });
    }
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: motivationRef.current,
        start: "top bottom",
        end: "center center-=200",
        toggleActions: "restart pause resume reset",
        onEnter: () => {
          tl.to(motivationRef.current, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
          });
        },
      },
    });

    tl.to(motivationRef.current, {
      duration: 30,
      text: {
        value:
          "I'm excited about the opportunity to join Buzzvel because I believe it's the perfect environment for individuals who are passionate about growth and continuous learning. The dedication and enthusiasm for coding that I see in the Buzzvel team truly inspire me. As a Portuguese speaker, I also appreciate that Buzzvel is based in Lisbon, which would facilitate clear and effective communication. I'm eager to contribute to a team that values innovation and collaboration while enhancing my skills and advancing my career.",
        speed: 1,
        type: "diff",
      },
      ease: "none",
      repeat: 0,
    });
  }, []);

  return (
    <div className={styles.aboutMe} id="about-me">
      <h2 className={styles["aboutMe__title"]}>
        My <br />
        Experience
      </h2>
      <div className={styles["aboutMe__container"]}>
        <div className={styles["slider__container"]} ref={containerRef}>
          <div className={styles.slider} ref={sliderRef}>
            <div className={styles.motivation} ref={lastCardRef}>
              <h3 className={styles["motivation__title"]}>Why Buzzvel?</h3>
              <p
                className={styles["motivation__content"]}
                ref={motivationRef}
              ></p>
            </div>
            {cards
              .slice()
              .reverse()
              .map((card, index) => (
                <div className={styles.card} key={index}>
                  <h2 className={styles["card__year"]}>{card.year}</h2>
                  <p className={styles["card__content"]}>{card.content}</p>
                  <br />
                  {card.tags && (
                    <div className={styles["card__tagsContainer"]}>
                      {card.tags.map((tag, i) => (
                        <span key={i} className={styles["card__tag"]}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div className={styles.arrow}>
            <span
              style={{
                borderBottom:
                  theme === "dark" ? "5px solid #fffff0" : "5px solid #000",
                borderRight:
                  theme === "dark" ? "5px solid #fffff0" : "5px solid #000",
              }}
            ></span>
            <span
              style={{
                borderBottom:
                  theme === "dark" ? "5px solid #fffff0" : "5px solid #000",
                borderRight:
                  theme === "dark" ? "5px solid #fffff0" : "5px solid #000",
              }}
            ></span>
            <span
              style={{
                borderBottom:
                  theme === "dark" ? "5px solid #fffff0" : "5px solid #000",
                borderRight:
                  theme === "dark" ? "5px solid #fffff0" : "5px solid #000",
              }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
