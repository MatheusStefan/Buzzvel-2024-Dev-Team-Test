import React, { useContext, useRef } from "react";
import styles from "./Projects.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ThemeContext } from "../../context/ThemeContext";
import { cardData } from "../../data/cardData";
import Card from "./Card/Card";

gsap.registerPlugin(ScrollTrigger);

type ProjectsProps = unknown;

const Projects: React.FC<ProjectsProps> = () => {
  const skewElementsRef = useRef<HTMLImageElement[] | null>([]);
  const { theme } = useContext(ThemeContext);

  const addToRefs = (el: HTMLImageElement | null) => {
    if (el && !skewElementsRef.current?.includes(el)) {
      skewElementsRef.current?.push(el);
    }
  };

  useGSAP(() => {
    const proxy = { skew: 0 };

    const skewSetter = gsap.quickSetter(
      skewElementsRef.current,
      "skewY",
      "deg"
    );

    const clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -400);

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    if (skewElementsRef.current) {
      gsap.set(skewElementsRef.current, {
        transformOrigin: "right center",
        // force3D: true,
      });
    }
  }, []);

  return (
    <div className={styles.projects} id="projects">
      <div className={styles["projects__text"]}>
        <h2 className={styles.title}>Buzzvel projects</h2>
        <p className={styles["title-content"]}>
          A list of Buzzvel best projects built from scratch, related to
          Telecommunications, Healthcare, Entertainment, Education, Hospitality,
          Finance and Blockchain.
        </p>
      </div>
      <div className={styles["projects__container"]}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            href={card.href}
            imageSrc={card.imageSrc}
            alt={card.alt}
            name={card.name}
            description={card.description}
            theme={theme}
            ref={addToRefs}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
