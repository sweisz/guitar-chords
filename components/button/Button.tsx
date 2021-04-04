import styles from "./Button.module.css";
import { useRouter } from "next/router";

export type ButtonProps = {
  label: "Beginner" | "Advanced";
  route: string;
};

function Button({ label, route }: ButtonProps) {
  const router = useRouter();
  const buttonLabel = label === "Beginner" ? "Beginner" : "Advanced";
  return (
    <div className={styles.container}>
      <button className={styles.btnSkills} onClick={() => router.push(route)}>
        {buttonLabel}
      </button>
    </div>
  );
}

export default Button;
