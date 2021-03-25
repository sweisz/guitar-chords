import styles from "./ListItem.module.css";

export type ListItemProps = {
  title: string;
  description: string;
  checkBox: boolean;
};

function ListItem(props: ListItemProps) {
  //   const isChecked =
  //     checkBox === true ? `${styles.STYLE} ${styles.STYLE}` : `${styles.STYLE}`;

  return (
    <>
      <div className={styles.listItem}>
        <img
          className={styles.noteIcon}
          src="/assets/listItem-musical-notes.svg"
        />

        <div>{props.title}</div>
        <div>{props.checkBox}</div>
      </div>
    </>
  );
}

export default ListItem;
