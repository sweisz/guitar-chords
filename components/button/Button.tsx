import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
};

function Button({ label, ...props }: ButtonProps) {
  return (
    // <button className={`btn ${primary ? "primary" : ""}`} {...props}>
    <div className={styles.container}>
      <button className={styles.btnSkills} {...props}>
        {label}
      </button>
    </div>
  );
}

export default Button;
