import React from "react";
import styles from "./Calckeys.module.css";

export default function Calckeys({ value, handler }) {
  return (
    <div
      className={
        value === "AC" || value === "="
          ? `${styles.calcBtns} ${styles.res}`
          : `${styles.calcBtns}`
      }
      onClick={() => handler(value)}
    >
      {value}
    </div>
  );
}
