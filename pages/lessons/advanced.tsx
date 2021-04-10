import React from "react";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import styles from "../../styles/Advanced.module.css";
import LessonsHead from "../../components/LessonsHead/LessonsHead";
import Lessons from "../../components/Lessons/Lessons";
import Head from "next/head";

export default function Advanced() {
  return (
    <>
      <Head>
        <title>Guitar Chords - Advanced</title>
      </Head>
      <section className={styles.container}>
        <LessonsHead label="Advanced" link="/lessons/advanced" />
        <main>
          <Lessons />
        </main>
        <ButtonGroup />
      </section>
    </>
  );
}
