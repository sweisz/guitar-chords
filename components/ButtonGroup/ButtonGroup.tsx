import React from "react";
import LessonsButton from "../LessonsButton/LessonsButton";
import styles from "./ButtonGroup.module.css";

function ButtonGroup() {
  return (
    <div className={styles.container}>
      <LessonsButton label={"Beginner"} href={"/beginner"} />
      <LessonsButton label={"Advanced"} href={"/advanced"} />
    </div>
  );
}

export default ButtonGroup;
