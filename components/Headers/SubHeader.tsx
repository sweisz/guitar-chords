import styles from "./SubHeader.module.css";

export type SubHeaderProps = {
  size: "big" | "small";
  label: string;
};

function SubHeader({ label, size }: SubHeaderProps) {
  const theSize =
    size === "big"
      ? `${styles.subHeader} ${styles.big}`
      : `${styles.subHeader}`;

  return (
    <>
      <div className={theSize}>{label}</div>
    </>
  );
}

export default SubHeader;
