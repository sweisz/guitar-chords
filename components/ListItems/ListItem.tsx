import styles from "./ListItem.module.css";

export type ListItemProps = {
  artistName: string;
  title: string;
  description?: string;
  checkBox?: boolean;
};

function ListItem({ artistName, title }: ListItemProps) {
  return (
    <>
      <div className={styles.listItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.507"
          height="22.25"
          viewBox="0 0 22.507 29.25"
        >
          <path
            id="Icon_ionic-ios-musical-notes"
            data-name="Icon ionic-ios-musical-notes"
            d="M28.568,3.389c-.33.063-14.2,2.756-14.5,2.813a.623.623,0,0,0-.57.563V23.646a1.939,1.939,0,0,1-.169.823,1.874,1.874,0,0,1-1.132.893c-.232.077-.548.148-.921.232-1.695.38-4.528,1.027-4.528,3.642a3.219,3.219,0,0,0,2.932,3.34,3.428,3.428,0,0,0,.5.049h0a8.679,8.679,0,0,0,3.6-.928,3.788,3.788,0,0,0,1.695-3.361V13.395a.558.558,0,0,1,.45-.548l10.688-2.159a.562.562,0,0,1,.675.548v9.2a2.016,2.016,0,0,1-.176.942,1.869,1.869,0,0,1-1.139.893c-.232.077-.619.148-.991.232-1.695.38-4.528,1.02-4.528,3.635a3.225,3.225,0,0,0,2.939,3.4,5.811,5.811,0,0,0,1.364-.063,8.061,8.061,0,0,0,2.566-.914,3.706,3.706,0,0,0,1.934-3.389V3.93A.557.557,0,0,0,28.568,3.389Z"
            transform="translate(-6.75 -3.375)"
          />
        </svg>
        <span className={styles.listItemTitle}>
          {artistName}—{title}
        </span>
      </div>
    </>
  );
}

export default ListItem;
