import React, { useState } from "react";

function SearchBar({ setSearchTerm }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "600px",
        margin: "auto",
        padding: "4px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search beers..."
          value={query}
          onChange={handleChange}
          style={{
            width: "450px",
            padding: "2px",
            fontSize: "24px",
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
