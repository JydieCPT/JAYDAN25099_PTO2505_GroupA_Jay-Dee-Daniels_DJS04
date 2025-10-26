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
