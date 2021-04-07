import styles from "./SearchInput.module.css";

export type SearchInputProps = {
  search: string;
  onSearch: (search: string) => void;
};

function SearchInput({ search, onSearch }: SearchInputProps) {
  return (
    <>
      <div className={styles.container}>
        <label>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search Tabs or Lessons"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
        </label>
        <img
          className={styles.magnifyingGlass}
          src="/assets/icon-magnifying-glass.svg"
          alt="magnifying glass"
        />
      </div>
    </>
  );
}

export default SearchInput;
