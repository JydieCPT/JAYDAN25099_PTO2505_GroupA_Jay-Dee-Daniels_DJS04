/**
 * @file index.jsx
 * @description
 * Entry point of the React application. 
 * - Imports global CSS styles.
 * - Mounts the root React component (`App`) into the DOM.
 * - Wraps the app in React's `StrictMode` for highlighting potential problems.
 *
 * @example
 * // The app is rendered into a div with id "root" in index.html
 * createRoot(document.getElementById('root')).render(
 *   <StrictMode>
 *     <App />
 *   </StrictMode>
 * )
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
