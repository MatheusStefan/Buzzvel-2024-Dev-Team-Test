import React, { useRef } from "react";
import styles from "./Timeline.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type TimelineProps = unknown;

const Timeline: React.FC<TimelineProps> = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (timelineRef.current && itemsRef.current.length && circleRef.current) {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center+=100",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.to(circleRef.current, {
        display: "flex",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center-=200",
          end: "bottom bottom",
          scrub: 20,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.round(progress * (itemsRef.current.length - 1));
            const targetItem = itemsRef.current[index];
            if (targetItem) {
              const targetPosition =
                targetItem.getBoundingClientRect().top -
                timelineRef.current!.getBoundingClientRect().top;
              gsap.to(circleRef.current, {
                y: targetPosition,
                duration: 1,
                ease: "power2.out",
              });
            }
          },
        },
      });
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <>
      <div className={styles.timeline} ref={timelineRef} id="timeline">
        <h2 className={styles["timeline__title"]} ref={addToRefs}>
          My 3-5 Year Career Progression at Buzzvel: A Visual Timeline
        </h2>
        <div className={styles["timeline__circle"]} ref={circleRef}></div>
        <div className={styles["timeline__item"]} ref={addToRefs}>
          <div className={styles["timeline__item container"]}>
            <div className={styles["timeline__item-container"]}>
              <h3 className={styles["timeline__container--title"]}>Year 1</h3>
              <h4 className={styles["timeline__container--subtitle"]}>
                Foundation and Integration
              </h4>
              <p className={styles["timeline__container--description"]}>
                In the first year, my focus will be on building a strong
                foundation and integrating seamlessly into the Buzzvel team.
              </p>
            </div>
            <ul className={styles["timeline__list"]}>
              <li className={styles["timeline__list-item"]}>
                <b>Onboarding:</b> I’ll immerse myself in Buzzvel's processes,
                tools, and team dynamics, ensuring a smooth transition into the
                company culture.
              </li>
              <li className={styles["timeline__list-item"]}>
                <b>Mentorship:</b> By working closely with a senior developer, I
                will gain valuable insights and hands-on experience to
                understand Buzzvel's coding standards and best practices.
              </li>
              <li className={styles["timeline__list-item"]}>
                <b>Initial Contributions:</b> I will take on small tasks and
                projects, contributing to the team's efforts while solidifying
                my understanding of Buzzvel’s technical landscape.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["timeline__item"]} ref={addToRefs}>
          <div className={styles["timeline__item container"]}>
            <div className={styles["timeline__item container"]}>
              <h3 className={styles["timeline__container--title"]}>Year 2-3</h3>
              <h4 className={styles["timeline__container--subtitle"]}>
                Growth and Increased Responsability
              </h4>
              <p className={styles["timeline__container--description"]}>
                As I move into years two and three, my role at Buzzvel will
                expand, reflecting my growth and readiness for more significant
                challenges.
              </p>
            </div>
            <ul className={styles["timeline__list"]}>
              <li className={styles["timeline__list-item"]}>
                <b>Project Ownership:</b> I’ll lead small to medium-sized
                projects, taking full responsibility for their successful
                execution and delivery.
              </li>
              <li className={styles["timeline__list-item"]}>
                <b>Skill Development:</b> I aim to master advanced concepts
                within Buzzvel's tech stack and explore new technologies that
                can enhance our development capabilities.
              </li>
              <li className={styles["timeline__list-item"]}>
                <b>Mentorship</b> With the knowledge and experience gained, I
                will begin mentoring junior developers, fostering a culture of
                learning and growth within the team.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["timeline__item"]} ref={addToRefs}>
          <div className={styles["timeline__item container"]}>
            <div className={styles["timeline__item container"]}>
              <h3 className={styles["timeline__container--title"]}>Year 4-5</h3>
              <h4 className={styles["timeline__container--subtitle"]}>
                Leadership and Innovation
              </h4>
              <p className={styles["timeline__container--description"]}>
                In years four and five, I envision stepping into a leadership
                role and driving innovation within Buzzvel.
              </p>
            </div>
            <ul className={styles["timeline__list"]}>
              <li className={styles["timeline__list-item"]}>
                <b>Leadership Role:</b> I aspire to advance to a team lead or
                senior developer position, where I can guide a team of talented
                developers and shape the future of our projects.
              </li>
              <li className={styles["timeline__list-item"]}>
                <b>Innovation:</b> I will actively contribute to the strategic
                direction of front-end development at Buzzvel, bringing fresh
                ideas and innovative approaches to the table.
              </li>
              <li className={styles["timeline__list-item"]}>
                <b>Continuous Learning:</b> I will stay abreast of the latest
                industry trends and integrate them into our development
                practices, ensuring Buzzvel remains at the forefront of
                technological advancements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
