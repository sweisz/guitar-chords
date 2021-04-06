import React from "react";
import styles from "./Lessons.module.css";
import ListItems from "../ListItems/ListItem";
import LessonsHead from "../LessonsHead/LessonsHead";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import SearchInput from "../SearchInput/SearchInput";

function Lessons() {
  return (
    <div className={styles.container}>
      <div>
        <LessonsHead label={"Beginner"} link={"/beginner"} />
      </div>
      <div>
        <SearchInput onSearch={null} />
      </div>
      <div>
        <ListItems
          title={"Stairway To Heaven - Led Zeppelin"}
          checkBox={false}
        />
      </div>
      <div>
        <ButtonGroup />
      </div>
    </div>
  );
}

export default Lessons;
