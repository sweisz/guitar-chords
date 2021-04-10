import styles from "./TabsHead.module.css";
import Header from "../Headers/Header";

export type TabsHeadProps = {
  label: "Beginner" | "Advanced";
  link: string;
};

function TabsHead({ label, link }: TabsHeadProps) {
  const theColor =
    label === "Beginner"
      ? `${styles.bottomLink} ${styles.colorBeginner}`
      : `${styles.bottomLink} ${styles.colorAdvanced}`;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header size="small" label="Tab" />
        </div>

        <div className={styles.notes}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
          >
            <path
              id="Icon_ionic-md-musical-notes"
              data-name="Icon ionic-md-musical-notes"
              d="M11.25,4.5V22.612a5.989,5.989,0,0,0-1.87-.288,4.6,4.6,0,1,0,0,9.176,4.763,4.763,0,0,0,4.894-4.859V14.063h14.2v8.55a5.989,5.989,0,0,0-1.87-.288,4.6,4.6,0,1,0,0,9.176A4.763,4.763,0,0,0,31.5,26.641V4.5Zm17.227,6.75h-14.2V7.523h14.2Z"
              transform="translate(-4.5 -4.5)"
              fill={
                label === "Beginner"
                  ? "var(--accent-color-green)"
                  : "var(--accent-color-blue)"
              }
            />
          </svg>
        </div>

        <p className={theColor}>
          <a href={link}>{label}</a>
        </p>
      </div>
    </>
  );
}

export default TabsHead;
