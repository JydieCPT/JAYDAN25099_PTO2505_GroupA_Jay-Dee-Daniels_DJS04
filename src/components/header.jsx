/**
 * @file Header.jsx
 * @description
 * The Header component for the PodcastApp. It displays the app title and includes a
 * SearchBar wrapped in an ErrorBoundary to safely handle any runtime errors in the search area.
 * 
 * Features:
 * - App title display.
 * - Search input with predictive suggestions, filtering, and sorting.
 * - Dynamic filter options generated from the imported `genres` data.
 *
 * @param {Object} props - React component props.
 * @param {Function} props.onSearch - Callback function triggered when the search query changes.
 * @param {Function} props.onFilterChange - Callback function triggered when the selected filter changes.
 * @param {Function} props.onSortChange - Callback function triggered when the selected sort option changes.
 *
 * @example
 * <Header
 *   onSearch={(query) => console.log(query)}
 *   onFilterChange={(filter) => console.log(filter)}
 *   onSortChange={(sort) => console.log(sort)}
 * />
 */
import SearchBar from "./SearchBar";
import ErrorBoundary from "./ErrorBoundary";
import { genres } from "../data.js";

export default function Header({ onSearch, onFilterChange, onSortChange }) {
  const sorts = ["A-Z", "Z-A", "Newest", "Oldest"];

  // Dynamically generate filter options from the data file
  const filters = ["All", ...genres.map((g) => g.title)];

  return (
    <header className="app-header">
      <div className="header-top">
        <h1>🎧 PodcastApp</h1>
        <ErrorBoundary>
          <SearchBar
            data={genres}
            filters={filters}
            sorts={sorts}
            onSearch={onSearch}
            onFilterChange={onFilterChange}
            onSortChange={onSortChange}
          />
        </ErrorBoundary>
      </div>
    </header>
  );
}
