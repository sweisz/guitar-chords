import styles from "./LessonsButton.module.css";
import Link from "next/link";

export type LessonsButtonProps = {
  label: "Beginner" | "Advanced";
  href: "/beginner" | "/advanced";
};

function LessonsButton({ label, href }: LessonsButtonProps) {
  const btnLabel = label === "Beginner" ? "Beginner" : "Advanced";
  const btnHref = href === "/beginner" ? "/beginner" : "/advanced";
  console.log({ btnHref });
  return (
    <div className={styles.container}>
      <Link href={btnHref}>
        <div className={styles.btn}>
          <a>{btnLabel}</a>
        </div>
      </Link>
    </div>
  );
}

export default LessonsButton;
