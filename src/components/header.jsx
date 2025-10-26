import SearchBar from "./SearchBar";
import ErrorBoundary from "./ErrorBoundary";
import {genres} from "../data.js"
import { useState, useEffect } from "react";

export default function Header() {

  const sorts = ["A-Z", "Z-A", "Newest", "Oldest"];
  const filters = ["All", "Technology", "Education", "Entertainment"];
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(filters[0]);
  const [sort, setSort] = useState(sorts[0]);
  // useEffect(() => {
  //   fetch("/data.json") // 👈 fetch from public folder
  //     .then(res => res.json())
  //     .then(data => setPodcastData(data))
  //     .catch(err => console.error("Error loading data:", err));
  // }, []);

  return (
    <header className="app-header">
      <h1>🎙️ Podcast App</h1>
      <div style={{ padding: "20px" }}>
        <ErrorBoundary>
          <h1>Podcast Search</h1>
            <SearchBar
              data={genres}
              filters={filters}
              sorts={sorts}
              onSearch={setSearchQuery}
              onFilterChange={setFilter}
              onSortChange={setSort}
            />
          </ErrorBoundary>
    </div>

    </header>
  );
}
