import { useState, useEffect } from "react";

const SearchBar = ({ data = [], filters = [], sorts = [], onSearch, onFilterChange, onSortChange }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(filters[0] || "");
  const [selectedSort, setSelectedSort] = useState(sorts[0] || "");

  // Predictive suggestions (based on data)
  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
   const matches = data
    .filter(item => {
      if (typeof item === "string") {
        return item.toLowerCase().includes(lowerQuery);
      } else if (item.title) {
        return item.title.toLowerCase().includes(lowerQuery);
      }
      return false;
    })
    .slice(0, 5);
    setSuggestions(matches);
  }, [query, data]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="search-bar-container" style={styles.container}>
      {/* Search Input */}
      <div style={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          style={styles.input}
        />

        {/* Predictive Text Suggestions */}
        {suggestions.length > 0 && (
          <ul style={styles.suggestions}>
            {suggestions.map((s, i) => (
              <li key={i} style={styles.suggestionItem} onClick={() => handleSuggestionClick(s)}>
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Filter Dropdown */}
      <select value={selectedFilter} onChange={handleFilterChange} style={styles.select}>
        {filters.map((f, i) => (
          <option key={i} value={f}>{f}</option>
        ))}
      </select>

      {/* Sort Dropdown */}
      <select value={selectedSort} onChange={handleSortChange} style={styles.select}>
        {sorts.map((s, i) => (
          <option key={i} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
};

// Basic inline styling
const styles = {
  container: {
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },
  inputWrapper: {
    position: "relative",
    flex: 1,
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  suggestions: {
    position: "absolute",
    top: "40px",
    left: 0,
    right: 0,
    background: "white",
    border: "1px solid #ccc",
    borderTop: "none",
    borderRadius: "0 0 6px 6px",
    listStyle: "none",
    padding: 0,
    margin: 0,
    zIndex: 5,
  },
  suggestionItem: {
    padding: "8px 10px",
    cursor: "pointer",
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "white",
  },
};

export default SearchBar;
