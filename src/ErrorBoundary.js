import React from "react";

// implementing error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return <h3>Somthing went wrong</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
