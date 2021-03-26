import styles from "./ListItem.module.css";

export type ListItemProps = {
  title: string;
  description?: string;
  checkBox: boolean;
};

function ListItem({ title, checkBox }: ListItemProps) {
  return (
    <>
      <div className={styles.listItem}>
        <img
          className={styles.noteIcon}
          src="/assets/listItem-musical-notes.svg"
        />
        <span className={styles.listItemTitle}>{title}</span>
        <input type="checkbox" id="listItemCheckBox" checked={checkBox} />
      </div>
      <div className={styles.listItem}>
        <img
          className={styles.noteIcon}
          src="/assets/listItem-musical-notes.svg"
        />
        <span className={styles.listItemTitle}>{title}</span>
        <input type="checkbox" id="listItemCheckBox" checked={checkBox} />
      </div>
    </>
  );
}

export default ListItem;
