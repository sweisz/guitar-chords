import styles from "./LessonsButton.module.css";
import Link from "next/link";

export type LessonsButtonProps = {
  label: "Beginner" | "Advanced";
  href: "/lessons/beginner" | "/lessons/advanced";
};

function LessonsButton({ label, href }: LessonsButtonProps) {
  const btnLabel = label === "Beginner" ? "Beginner" : "Advanced";
  const btnHref =
    href === "/lessons/beginner" ? "/lessons/beginner" : "/lessons/advanced";
  console.log({ btnHref });
  return (
    <Link href={btnHref}>
      <div className={styles.btn}>
        <a>{btnLabel}</a>
      </div>
    </Link>
  );
}

export default LessonsButton;
