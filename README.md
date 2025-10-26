🎧 PodcastApp

A modern web application for browsing, filtering, and searching podcasts — built with React and Vite.
Users can explore podcasts by genre, sort them alphabetically or by date, and search for specific shows using a responsive, interactive interface.

📖 Table of Contents

Overview

Purpose

Features

Technologies Used

Project Structure

Setup Instructions

How It Works

Future Improvements

Author

🧩 Overview

PodcastApp is a React-based podcast discovery app.
It allows users to:

View podcast previews

Filter by genre

Sort by title or date

Search for podcasts interactively

The app uses a structured dataset (data.js) and simulates API-driven behavior, focusing on reusable components, UI composition, and dynamic filtering.

🎯 Purpose

The main goal of this project is to:

Demonstrate understanding of React component structure

Practice state management, props, and event handling

Apply responsive design principles

Build a professional, modular front-end web interface

It was designed as part of a learning exercise or coursework project, showcasing clean coding practices and functional user experience.

⚙️ Features

✅ Dynamic filtering by genre (all genres from data.js)
✅ Sorting options (A–Z, Z–A, Newest, Oldest)
✅ Search bar with toggleable search icon
✅ Error handling with ErrorBoundary
✅ Clean card-based layout for podcast previews
✅ Fully responsive for desktop and tablet screens
✅ Built with modern React (Hooks, components) and Vite for fast development

💻 Technologies Used
Category	Technology
Frontend Framework	React (Vite)
Language	JavaScript (ES6)
UI Styling	CSS / Tailwind (optional)
Icon Library	lucide-react
Error Handling	Custom ErrorBoundary component
Package Manager	npm
📁 Project Structure
src/
 ├── App.jsx                 # Main app container
 ├── main.jsx                # Entry point (ReactDOM)
 ├── data.js                 # Podcast & genre data
 ├── components/
 │   ├── Header.jsx          # Header with filters, sort, search icon
 │   ├── SearchBar.jsx       # Interactive search input
 │   ├── PodcastGrid.jsx     # Displays podcast cards
 │   ├── PodcastCard.jsx     # Single podcast preview
 │   ├── ErrorBoundary.jsx   # Handles component-level errors
 │   └── styles/             # (Optional) Component-specific styles
 ├── assets/                 # Images, icons, etc.
 ├── index.css               # Global styling
 └── ...

🧠 How It Works

Header — Displays filters (genres), sorting options, and a search icon.

Clicking the icon toggles the search bar.

SearchBar — Lets users search podcasts by title dynamically.

App.jsx — Handles the state for selected filters, sorting, and search input, and updates the displayed podcasts accordingly.

PodcastGrid & PodcastCard — Render a grid of podcast previews from the data source.

ErrorBoundary — Catches UI rendering errors and prevents full app crashes.

🪄 Setup Instructions
1️⃣ Clone or download the repository
cd podcastapp

2️⃣ Install dependencies

Make sure Node.js and npm are installed. Then run:

npm install

3️⃣ Run the development server
npm run dev


Then open the link (usually http://localhost:5173
) in your browser.

4️⃣ Build for production (optional)
npm run build

🧰 Troubleshooting

If you get a 500 error or “Failed to load resource” in your console:

Make sure your file names match exactly (e.g. Header.jsx, not header.jsx)


Run:

npm install lucide-react


Then restart:

npm run dev


🚀 Future Improvements

🔹 Add live API integration for real podcast data
🔹 Improve responsive mobile design
🔹 Add “Favorites” or “Save for Later” feature
🔹 Add animations (Framer Motion) for smoother transitions

👤 Author

Jay-Dee Daniels
📍 South Africa, Cape Town
💻 Frontend Developer | Student | Web Enthusiast

![alt text](<Screenshot (5).png>)