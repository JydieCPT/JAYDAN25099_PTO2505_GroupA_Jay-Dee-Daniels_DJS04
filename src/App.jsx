import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // New state for filters/search
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A-Z");

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  // Filter + sort logic
  const filtered = podcasts
    .filter((p) => {
      const titleMatch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
      const genreMatch =
        filter === "All" ||
        p.genres.some((id) => {
          const g = genres.find((genre) => genre.id === id);
          return g && g.title === filter;
        });
      return titleMatch && genreMatch;
    })
    .sort((a, b) => {
      if (sort === "A-Z") return a.title.localeCompare(b.title);
      if (sort === "Z-A") return b.title.localeCompare(a.title);
      if (sort === "Newest") return new Date(b.updated) - new Date(a.updated);
      if (sort === "Oldest") return new Date(a.updated) - new Date(b.updated);
      return 0;
    });

  return (
    <>
      <Header
        onSearch={setSearchQuery}
        onFilterChange={setFilter}
        onSortChange={setSort}
      />
      <main>
        {loading && (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}

        {error && (
          <div className="message-container">
            <div className="error">
              Error occurred while fetching podcasts: {error}
            </div>
          </div>
        )}

        {!loading && !error && (
          <PodcastGrid podcasts={filtered} genres={genres} />
        )}
      </main>
    </>
  );
}
