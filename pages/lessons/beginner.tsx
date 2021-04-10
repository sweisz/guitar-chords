import React from "react";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import styles from "../../styles/Beginner.module.css";
import LessonsHead from "../../components/LessonsHead/LessonsHead";
import Lessons from "../../components/Lessons/Lessons";
import Head from "next/head";

export default function Beginner() {
  return (
    <>
      <Head>
        <title>Guitar Chords - Beginner</title>
      </Head>
      <section className={styles.container}>
        <LessonsHead label="Beginner" link="/lessons/beginner" />
        <main>
          <Lessons />
        </main>
        <ButtonGroup />
      </section>
    </>
  );
}
