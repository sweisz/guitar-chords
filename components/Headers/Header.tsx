import styles from "./Header.module.css";

export type HeaderProps = {
  size: "big" | "small";
  label: string;
};

function Header({ label, size }: HeaderProps) {
  const theSize =
    size === "big" ? `${styles.welcome} ${styles.big}` : `${styles.welcome}`;

  return (
    <>
      <div className={theSize}>{label}</div>
    </>
  );
}

export default Header;
