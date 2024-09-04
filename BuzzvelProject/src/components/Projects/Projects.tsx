import React, { useRef } from "react";
import styles from "./Projects.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ProjectsProps = unknown;

const cardData = [
  {
    href: "https://buzzvel.com/portfolio/viplant",
    imageSrc:
      "https://buzzvel.com/storage/conversions/459/conversions/Frame-11990-min-normal.webp",
    alt: "Viplant Image",
    name: "Viplant",
    description:
      "A website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.",
  },
  {
    href: "https://buzzvel.com/portfolio/traquinices",
    imageSrc:
      "https://buzzvel.com/storage/conversions/297/conversions/Img1-(1)-normal.webp",
    alt: "Traquinices Image",
    name: "Traquinices",
    description:
      "Traquinices is a company that was born in Portugal in 1996. It specializes in the distribution of premium Childcare products to provide the best satisfaction to customers.",
  },
  {
    href: "https://buzzvel.com/portfolio/dbs",
    imageSrc:
      "https://buzzvel.com/storage/conversions/182/conversions/Img1-normal.webp",
    alt: "DBS Image",
    name: "DBS",
    description:
      "A platform and APP that allowed primary users to track medical tests.",
  },
  {
    href: "https://buzzvel.com/portfolio/miss-can",
    imageSrc:
      "https://buzzvel.com/storage/conversions/61/conversions/featured-misscan-normal.webp",
    alt: "Miss Image",
    name: "Miss Can",
    description:
      "A Portuguese and family project of the canning industry with 3 generations of history and tradition. Canned food produced in Portugal, with Portuguese fish and artisanal.",
  },
  {
    href: "https://buzzvel.com/portfolio/thinkferidas",
    imageSrc:
      "https://buzzvel.com/storage/conversions/52/conversions/featured-thinkferidas-normal.webp",
    alt: "ThinkFeridas Image",
    name: "ThinkFeridas",
    description:
      "ThinkFeridas is an application that responds to the need of many health professionals who work alone in the clinical decision regarding treating complex wounds.",
  },
  {
    href: "https://buzzvel.com/portfolio/vigias-da-arriba",
    imageSrc:
      "https://buzzvel.com/storage/conversions/45/conversions/featured-vigias-normal.webp",
    alt: "Vigias da Arriba Image",
    name: "Vigias da Arriba",
    description:
      "Vigias da Arriba is a luxury, unique and exclusive condominium with several villas with a superb sea view. It is located in Torres Vedras.",
  },
  {
    href: "https://buzzvel.com/portfolio/portugal-advanced-health",
    imageSrc:
      "https://buzzvel.com/storage/conversions/33/conversions/featured-pah-normal.webp",
    alt: "Portugal Advanced Health Image",
    name: "Portugal Advanced Health",
    description:
      "Portugal Advanced Health or PAH is an innovative and pioneering project in the area of health in Portugal, specializing in hyperbaric treatments at 1.4atm (atmosphere).",
  },
  {
    href: "https://buzzvel.com/portfolio/coma-ou-leve",
    imageSrc:
      "https://buzzvel.com/storage/conversions/28/conversions/featured-comaouleve-normal.webp",
    alt: "Coma ou Leve Image",
    name: "Coma ou Leve",
    description:
      "An original concept, on the market since 1976. Meals ready to eat, with a history that stay in the memory of those who visit them.",
  },
  {
    href: "https://buzzvel.com/portfolio/hotspotty",
    imageSrc:
      "https://buzzvel.com/storage/conversions/20/conversions/featured-hotspotty-normal.webp",
    alt: "Hotspotty Image",
    name: "Hotspotty",
    description:
      "An innovative 'All-in-One' platform to plan, manage and optimize decentralized networks such as the global Helium network for the Internet of Things.",
  },
];

const Projects: React.FC<ProjectsProps> = () => {
  const skewElementsRef = useRef<HTMLImageElement[]>([]);

  const addToRefs = (el: HTMLImageElement) => {
    if (el && !skewElementsRef.current.includes(el)) {
      skewElementsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const proxy = { skew: 0 };

    // Create a quick setter for skewY with degrees
    const skewSetter = gsap.quickSetter(
      skewElementsRef.current,
      "skewY",
      "deg"
    );

    // Clamp function to limit skew values between -20 and 20 degrees
    const clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      onUpdate: (self) => {
        // Calculate skew based on scroll velocity
        const skew = clamp(self.getVelocity() / -300);

        // Update skew only if the new value is more extreme
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

    // Set initial properties for the skew element
    if (skewElementsRef.current) {
      gsap.set(skewElementsRef.current, {
        transformOrigin: "right center",
        force3D: true,
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
          <div className={styles["project__card"]} ref={addToRefs} key={index}>
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["project__card-link"]}
            >
              <img
                src={card.imageSrc}
                alt={card.alt}
                className={styles["project__card-image"]}
              />
              <span className={styles["project__card-name"]}>{card.name}</span>
            </a>
            <p className={styles["project__card-description"]}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
