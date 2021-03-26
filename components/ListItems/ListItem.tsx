import styles from "./ListItem.module.css";

export type ListItemProps = {
  title: string;
  description: string;
  checkBox: boolean;
};

function ListItem(props: ListItemProps) {
  return (
    <>
      <div className={styles.listItem}>
        <img
          className={styles.noteIcon}
          src="/assets/listItem-musical-notes.svg"
        />
        <span className={styles.listItemTitle}>{props.title}</span>
        <input type="checkbox" id="listItemCheckBox" />
      </div>
      <div className={styles.listItem}>
        <img
          className={styles.noteIcon}
          src="/assets/listItem-musical-notes.svg"
        />
        <span className={styles.listItemTitle}>{props.title}</span>
        <input type="checkbox" id="listItemCheckBox" />
      </div>
    </>
  );
}

export default ListItem;
