import React from "react";
import styles from "./Lessons.module.css";
import ListItems from "../ListItems/ListItem";
import LessonsButton from "../LessonsButton/LessonsButton";
import LessonsHead from "../LessonsHead/LessonsHead";

function Lessons() {
  return (
    <div className={styles.background}>
      <LessonsHead label={"Beginner"} link={"/beginner"} />
      <ListItems title={"Stairway To Heaven - Led Zeppelin"} checkBox={false} />
      <LessonsButton label={"Beginner"} href={"/lessons/beginner"} />
    </div>
  );
}

export default Lessons;
