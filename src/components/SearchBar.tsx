import React from 'react';
import styles from '../styles/App.module.css';

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({ query, setQuery }) => (
  <input
    className={styles.search}
    placeholder="Search by tag, link, description or title.."
    value={query}
    onChange={e => setQuery(e.target.value)}
  />
);

export default SearchBar;