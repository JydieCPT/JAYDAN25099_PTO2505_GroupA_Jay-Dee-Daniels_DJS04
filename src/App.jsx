import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
 * React state and effect for managing podcasts search, filter, and sort.
 *
 * State:
 * @type {[string, Function]} searchQuery - Current search input for podcast titles.
 * @type {[string, Function]} filter - Currently selected genre filter, default is "All".
 * @type {[string, Function]} sort - Currently selected sort option, default is "A-Z".
 *
 * Effect:
 * useEffect(() => { ... }, [])
 * - Fetches the list of podcasts on component mount.
 * - Updates state via setPodcasts, and handles loading and error states.
 *
 * Dependencies: empty array [], so this runs only once when the component mounts.
 */

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A-Z");

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  /**
 * Filters and sorts the list of podcasts based on search query, selected filter, and sort option.
 *
 * @param {Object[]} podcasts - Array of podcast objects to be filtered and sorted.
 * @param {string} searchQuery - The current search input used to match podcast titles (case-insensitive).
 * @param {string} filter - The currently selected genre filter ("All" matches everything).
 * @param {string} sort - The currently selected sort option ("A-Z", "Z-A", "Newest", "Oldest").
 * @param {Object[]} genres - Array of genre objects ({ id, title }) used to match podcast genres.
 * @returns {Object[]} Filtered and sorted array of podcasts.
 *
 * @example
 * const result = podcasts
 *   .filter(p => ...)
 *   .sort((a, b) => ...);
 */
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
