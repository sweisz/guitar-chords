import React from "react";
import Head from "next/head";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import TabsHead from "../components/TabsHead/TabsHead";
import Tabs from "../components/Tabs/Tabs";
import styles from "../styles/Tab.module.css";

export default function Tab() {
  return (
    <>
      <Head>
        <title>Guitar Chords - Tab</title>
      </Head>
      <section className={styles.container}>
        <TabsHead label="Beginner" link="/tab" />
        <main>
          <Tabs
            tex={
              '\\title "Canon Rock"\n  \\subtitle "JerryC"\n  \\tempo 90\n  .\n  :2 19.2{v f} 17.2{v f} | \n 15.2{v f} 14.2{v f}| \n  12.2{v f} 10.2{v f}| \n  12.2{v f} 14.2{v f}.4 :8 15.2 17.2 |\n  14.1.2 :8 17.2 15.1 14.1{h} 17.2 | \n  15.2{v d}.4 :16 17.2{h} 15.2 :8 14.2 14.1 17.1{b(0 4 4 0)}.4 |\n  15.1.8 :16 14.1{tu 3} 15.1{tu 3} 14.1{tu 3} :8 17.2 15.1 14.1 :16 12.1{tu 3} 14.1{tu 3} 12.1{tu 3} :8 15.2 14.2 | \n  12.2 14.3 12.3 15.2 :32 14.2{h} 15.2{h} 14.2{h} 15.2{h}14.2{h} 15.2{h}14.2{h} 15.2{h}14.2{h} 15.2{h}14.2{h} 15.2{h}14.2{h} 15.2{h}14.2{h} 15.2{h}'
            }
          />
        </main>
        <ButtonGroup />
      </section>
    </>
  );
}
