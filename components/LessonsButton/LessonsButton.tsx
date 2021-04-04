import styles from "./LessonsButton.module.css";

export type LessonsButtonProps = {
  labelLeft: string;
  labelRight: string;
};

function LessonsButton({ labelLeft, labelRight }: LessonsButtonProps) {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>{labelLeft}</button>
      <button className={styles.btn}>{labelRight}</button>
    </div>
  );
}

export default LessonsButton;
