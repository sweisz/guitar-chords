import React, { useEffect, useState } from "react";
import styles from "./Lessons.module.css";
import ListItems from "../ListItems/ListItem";
import LessonsHead from "../LessonsHead/LessonsHead";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
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
      <LessonsHead label={"Beginner"} link={"/beginner"} />

      <SearchInput search={searchValue} onSearch={setSearchValue} />

      <div>
        {tabs &&
          tabs.map((tab) => {
            return (
              <ListItems key={tab._id} artist={tab.artist} title={tab.title} />
            );
          })}
      </div>
      <ButtonGroup />
    </div>
  );
}

export default Lessons;
