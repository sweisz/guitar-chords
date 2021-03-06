import React, { useEffect, useState } from "react";
import styles from "./Lessons.module.css";
import ListItems from "../ListItems/ListItem";
import SearchInput from "../SearchInput/SearchInput";

function Lessons() {
  const [searchValue, setSearchValue] = useState("");
  const [tabs, setTabs] = useState(null);

  useEffect(() => {
    fetch(`/api/tabs${searchValue ? `?search=${searchValue}` : ""}`)
      .then((result) => result.json())
      .then(setTabs);
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <SearchInput search={searchValue} onSearch={setSearchValue} />
      <div>
        {tabs &&
          tabs.map((tab) => {
            return (
              <ListItems
                key={tab._id}
                artistName={tab.artist}
                title={tab.title}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Lessons;
