import React, { useState } from 'react';
export function SearchableList({ strings }: Record<string, string[]>) {
  const [query, setQuery] = useState('');
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <SearchResults query={query} strings={strings} />
    </>
  );
}

type SearchProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ setQuery }: SearchProps) {
  return (
    <div className="search-bar-container">
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
        type="text"
      />
    </div>
  );
}

type ResultsProps = {
  query: string;
  strings: string[];
};

function SearchResults({ query, strings }: ResultsProps) {
  function handleQuery() {
    const results = [];
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].toLowerCase().includes(query.toLowerCase())) {
        results.push(<li>{strings[i]}</li>);
      }
    }
    return results.length ? (
      <ul>{results}</ul>
    ) : (
      <p>No items match the filter</p>
    );
  }
  return (
    <div className="search-results-container">
      {query ? (
        handleQuery()
      ) : (
        <ul>
          {strings.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
