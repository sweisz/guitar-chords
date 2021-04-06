import Head from "next/head";
import styles from "../styles/Home.module.css";
import Lessons from "../components/Lessons/Lessons";

export default function LessonsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guitar Chords – Lessons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Lessons />
      </main>
    </div>
  );
}
