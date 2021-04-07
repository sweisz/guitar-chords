import Head from "next/head";
import styles from "../styles/Lessons.module.css";
import Lessons from "../components/Lessons/Lessons";

export default function LessonsPage() {
  return (
    <>
      <Head>
        <title>Guitar Chords – Lessons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Lessons />
      </main>
    </>
  );
}
