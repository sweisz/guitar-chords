import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Logo from "../components/Logo/Logo";
import Button from "../components/button/Button";
import Link from "next/link";

export default function Skill() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guitar Chords – Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.fullHeader}>
          <Header label="Skill" size="big" />
          <SubHeader label="Choose your level" size="small" />
        </div>
        <div className={styles.logoSmall}>
          <Link href="/skill">
            <a>
              <Logo size="small" />
            </a>
          </Link>
        </div>
        <div className={styles.skillButtonsWrapper}>
          <Button label="Beginner" route="beginner" />
          <Button label="Advanced" route="advanced" />
        </div>
      </main>
    </div>
  );
}
