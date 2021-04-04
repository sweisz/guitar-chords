import styles from "./LessonsButton.module.css";
import { useRouter } from "next/router";

export type LessonsButtonProps = {
  labelLeft: string;
  labelRight: string;
  route: string;
};

function LessonsButton({ labelLeft, labelRight, route }: LessonsButtonProps) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => router.push(route)}>
        {labelLeft}
      </button>
      <button className={styles.btn} onClick={() => router.push(route)}>
        {labelRight}
      </button>
    </div>
  );
}

export default LessonsButton;
