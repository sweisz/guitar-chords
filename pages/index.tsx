import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Logo from "../components/Logo/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guitar Chords</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.fullHeader}>
          <Header label="Guitar" size="big" />
          <SubHeader label="Chords" size="small" />
        </div>
        <div className={styles.logo}>
          <Link href="/skill">
            <a>
              <Logo size="small" />
            </a>
          </Link>
        </div>

        <p className={styles.introText}>
          Learn to play guitar
          <br /> with ease.
        </p>
      </main>
    </div>
  );
}
