import Head from "next/head";
import styles from "../styles/Skill.module.css";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Logo from "../components/Logo/Logo";
import Button from "../components/button/Button";
import Link from "next/link";

export default function Skill() {
  return (
    <>
      <Head>
        <title>Guitar Chords – Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Header label="Skill" size="big" />
          <SubHeader label="Choose your level" size="small" />
        </div>
        <div className={styles.logo}>
          <Link href="/skill">
            <a>
              <Logo size="small" />
            </a>
          </Link>
        </div>
        <div>
          <Button label="Beginner" route="/lessons/beginner" />
          <Button label="Advanced" route="/lessons/advanced" />
        </div>
      </main>
    </>
  );
}
