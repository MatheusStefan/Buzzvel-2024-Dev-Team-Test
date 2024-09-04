import React, { useRef, useState } from "react";
import styles from "./Dropdown.module.scss";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type DropdownProps = {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  currentValue: string | number;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  currentValue,
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState(currentValue.toString());
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleOptionClick(value: string) {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  }

  function toggleDropdown() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  useGSAP(() => {
    const md = gsap.matchMedia();
    const tl = gsap.timeline();

    md.add('(max-width: 768px)', () => {
      if (isOpen) {
        tl.fromTo(
          dropdownRef.current,
          {
            height: 0,
            ease: "power4",
          },
          {
            height: 64,
           },
          0.01
        );
      }
    })

    md.add('(min-width: 768px)', () => {
      if (isOpen) {
        tl.fromTo(
          dropdownRef.current,
          {
            height: 0,
            ease: "power4",
          },
          {
            height: 70,
           },
          0.01
        );
      }
    })

  }, [isOpen]);

  return (
    <div className={styles["dropdown"]}>
      <button
        className={styles["dropdown__btn"]}
        onClick={toggleDropdown}
        tabIndex={0}
        type="button"
        aria-label="dropdown select device"
      >
        <span className={styles["dropdown__title"]}>
          {t(
            options.find((option) => option.value === selectedValue)?.label ||
              ""
          )}
        </span>
      </button>
      {isOpen && (
        <div
          className={`${styles.dropdown__options} ${isOpen ? "open" : ""}`}
          ref={dropdownRef}
        >
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
              aria-label={option.label}
              className={styles["dropdown__select-option"]}
              onClick={() => handleOptionClick(option.value)}
            >
              {t(option.label)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
