import { useEffect, useState } from "react";
import styles from "./SearchInput.module.css";

export type SearchInputProps = {
  onSearch(search: string): void;
};

export type Tab = {
  _id: string;
  category: string;
  tex: string;
};

// eslint-disable-next-line no-empty-pattern
function SearchInput({}: SearchInputProps) {
  const [search, setSearch] = useState<string>("");
  const [tabs, setTabs] = useState<Tab[]>(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    const url = `/api/tabs/?search=${search}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((tabs) => setTabs(tabs));
  }, [search]);

  return (
    <>
      <div className={styles.container}>
        <label>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search Tabs or Lessons"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
        <img
          className={styles.magnifyingGlass}
          src="/assets/icon-magnifying-glass.svg"
          alt="magnifying glass"
        />
      </div>
      <ul>
        {tabs?.map((tabs) => (
          <li key={tabs._id}>
            {tabs.category} {tabs.tex}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchInput;
