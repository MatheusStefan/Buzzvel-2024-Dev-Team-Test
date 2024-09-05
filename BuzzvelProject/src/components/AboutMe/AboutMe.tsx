import React, { useRef } from "react";
import styles from "./AboutMe.module.scss";
import gsap from "gsap";
import { Draggable, ScrollTrigger, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable, TextPlugin, ScrollTrigger);

type AboutMeProps = unknown;

const cards = [
  { year: "2020", content: "Graduation in Bioanalysis" },
  {
    year: "2021",
    content: "Started to learn Java and Spring Boot by online courses.",
    tags: ["Java", "Spring Boot", "Ionic", "Microservices", "Hibernate"],
  },
  {
    year: "2022",
    content:
      "Participated in a VTEX program named Hiring Coders, plus DIO Bootcamps",
    tags: [
      "Javascript",
      "Typescript",
      "React",
      "GraphQL",
      "Node.js",
      "Next.js",
      "Gatsby.js",
      "Agile methodologies",
    ],
  },
  {
    year: "2023",
    content:
      "Started to self learn JavaScript, HTML and CSS through documentation and freeCodeCamp",
    tags: ["React", "Javascript", "HTML5", "CSS"],
  },
  {
    year: "2024",
    content:
      "Started a bootcamp at MateAcademy as part of the first cohort of Brazilian full-stack students.",
    tags: [
      "React",
      "Typescript",
      "Node.js",
      "Express.js",
      "Prisma",
      "Git/Github",
      "Redux",
      "PostgreSQL",
      "Scrum",
      "Click-up",
    ],
  },
];

const AboutMe: React.FC<AboutMeProps> = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const motivationRef = useRef<HTMLParagraphElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;

    if (slider && container) {
      gsap.set(slider, { x: -800 });

      Draggable.create(slider, {
        type: "x",
        bounds: {
          minX: -800,
          maxX: 670,
        },
        inertia: true,
        edgeResistance: 0,
        liveSnap: {
          x: (endValue: number) => Math.round(endValue / 300) * 300,
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
          "I am excited about the opportunity to join Buzzvel because I believe it is the perfect environment for individuals who are passionate about growth and continuous learning. The dedication and enthusiasm for coding that I see in the Buzzvel team truly inspire me. As a Portuguese speaker, I also appreciate that Buzzvel is based in Lisbon, which would facilitate clear and effective communication. I am eager to contribute to a team that values innovation and collaboration while enhancing my skills and advancing my career.",
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
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
