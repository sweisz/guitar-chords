import React from "react";
import Head from "next/head";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import LessonsHead from "../components/LessonsHead/LessonsHead";
import Tabs from "../components/Tabs/Tabs";
import styles from "../styles/Tab.module.css";

export default function Tab() {
  return (
    <>
      <Head>
        <title>Guitar Chords - Tab</title>
      </Head>
      <section className={styles.container}>
        <LessonsHead label="Beginner" link="/tab" />
        <main>
          <Tabs
            tex={
              '\\title "Hello alphaTab"\n.\n:4 0.6 1.6 3.6 0.5 2.5 3.5 0.4 2.4 |\n   3.4 0.3 2.3 0.2 1.2 3.2 0.1 1.1 |\n   3.1.1'
            }
          />
        </main>
        <ButtonGroup />
      </section>
    </>
  );
}
