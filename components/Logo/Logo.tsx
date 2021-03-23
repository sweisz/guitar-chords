import styles from "./Logo.module.css";

export type LogoProps = {
  size: "big" | "small";
};

function Logo({ size }: LogoProps) {
  const imgSrc =
    size === "big" ? "/assets/711px-guitar.png" : "/assets/355px-guitar.png";
  return <img className={styles.logoImg} src={imgSrc} />;
}

export default Logo;
