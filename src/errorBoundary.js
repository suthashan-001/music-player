// displaying error page if app crashes using react's error boundary api
// https://reactjs.org/docs/error-boundaries.html

import { Component } from "react";
import Popup from "./components/popup";

/* A class component becomes an error boundary if it defines either (or both) 
of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). 
Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. 
Use componentDidCatch() to log error information. */

export class ErrorBoundary extends Component {
  constructor(props) {
    // we are getting methods from the Component class (parent class)
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    //This lifecycle is invoked after an error has been thrown by a descendant component.
    //It receives the error that was thrown as a parameter and should return a value to update state.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // create custom error page ui
      return <Popup></Popup>;
    }

    return this.props.children;
  }
}
