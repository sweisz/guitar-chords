import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return (
    <div className={styles.container}>
      <button className={styles.btnSkills}>{label}</button>
    </div>
  );
}

export default Button;
