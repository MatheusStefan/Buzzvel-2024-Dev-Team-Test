import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  href: string;
  imageSrc: string;
  alt: string;
  name: string;
  description: string;
  theme: string;
}

const Card = React.forwardRef<HTMLImageElement, CardProps>(
  ({ href, imageSrc, alt, name, description, theme }, ref) => {
    return (
      <div className={styles["project__card"]}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["project__card-link"]}
          style={{ color: theme === "dark" ? "#fffff0" : "#000" }}
        >
          <img
            src={imageSrc}
            alt={alt}
            className={styles["project__card-image"]}
            ref={ref}
          />
          <span className={styles["project__card-name"]}>{name}</span>
        </a>
        <p className={styles["project__card-description"]}>
          {description}
        </p>
      </div>
    );
  }
);

export default Card;
