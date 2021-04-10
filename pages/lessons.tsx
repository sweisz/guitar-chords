import React from "react";
import styles from "../styles/Lessons.module.css";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import LessonsHead from "../components/LessonsHead/LessonsHead";
import Lessons from "../components/Lessons/Lessons";

export default function LessonsPage() {
  return (
    <section className={styles.container}>
      <LessonsHead label={"Beginner"} link={"lessons/beginner"} />
      <main>
        <Lessons />
      </main>
      <ButtonGroup />
    </section>
  );
}
