import { useState, useEffect } from "react";

/**
 * SearchBar Component
 *
 * A reusable search bar component that includes:
 * - A text input with predictive search suggestions.
 * - Dropdown filters and sorting options.
 * - Callback handlers for search, filter, and sort actions.
 *
 * @component
 * @param {Object[]} data - The dataset to search within.
 * @param {string[]} filters - List of available filter options.
 * @param {string[]} sorts - List of available sort options.
 * @param {Function} onSearch - Callback fired on search input change or suggestion selection.
 * @param {Function} onFilterChange - Callback fired when the selected filter changes.
 * @param {Function} onSortChange - Callback fired when the selected sort option changes.
 *
 * @example
 * <SearchBar
 *   data={podcasts}
 *   filters={["All", "Technology", "Business"]}
 *   sorts={["Newest", "A–Z"]}
 *   onSearch={(query) => console.log(query)}
 *   onFilterChange={(filter) => console.log(filter)}
 *   onSortChange={(sort) => console.log(sort)}
 * />
 */

const SearchBar = ({
  data = [],
  filters = [],
  sorts = [],
  onSearch,
  onFilterChange,
  onSortChange,
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(filters[0] || "");
  const [selectedSort, setSelectedSort] = useState(sorts[0] || "");

  // Predictive suggestions
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const lower = query.toLowerCase();
    const matches = data
      .filter((item) => item.title.toLowerCase().includes(lower))
      .slice(0, 5);

    setSuggestions(matches);
  }, [query, data]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title);
    setSuggestions([]);
    onSearch(suggestion.title);
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
      <span style={styles.label}>Filter by:</span>

      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        style={styles.select}
      >
        {filters.map((f, i) => (
          <option key={i} value={f}>
            {f}
          </option>
        ))}
      </select>

      <select
        value={selectedSort}
        onChange={handleSortChange}
        style={styles.select}
      >
        {sorts.map((s, i) => (
          <option key={i} value={s}>
            {s}
          </option>
        ))}
      </select>

      <div style={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search podcasts..."
          value={query}
          onChange={handleInputChange}
          style={styles.input}
        />
        {suggestions.length > 0 && (
          <ul style={styles.suggestions}>
            {suggestions.map((s, i) => (
              <li
                key={i}
                style={styles.suggestionItem}
                onClick={() => handleSuggestionClick(s)}
              >
                {s.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

/**
 * Inline style definitions for the SearchBar component.
 * Used for layout and consistent UI styling.
 * @type {Object<string, React.CSSProperties>}
 */
const styles = {
  container: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "1rem 0",
    borderBottom: "1px solid #e5e7eb",
    background: "#fafafa",
    flexWrap: "wrap",
  },
  label: {
    fontWeight: 500,
    color: "#555",
  },
  inputWrapper: {
    position: "relative",
    flex: 1,
    maxWidth: "300px",
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  select: {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "white",
  },
  suggestions: {
    position: "absolute",
    top: "38px",
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
};

export default SearchBar;
