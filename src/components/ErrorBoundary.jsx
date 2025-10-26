/**
 * @file ErrorBoundary.jsx
 * @description
 * A React class component that acts as an error boundary. It catches JavaScript errors
 * in its child component tree, logs the errors to the console, and renders a fallback UI
 * instead of crashing the whole application. Useful for isolating component errors and
 * maintaining app stability.
 *
 * @example
 * <ErrorBoundary>
 *   <PodcastGrid />
 * </ErrorBoundary>
 */
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong in this section.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
