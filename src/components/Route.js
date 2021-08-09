import React from 'react';

class Route extends React.Component {
  state = { currentPath: window.location.pathname };
  // Set new URL path to state when the URL is changed
  onLocationChange = () => {
    this.setState({ currentPath: window.location.pathname });
  };

  // Set up an event listener to listen to the changing of URL
  componentDidMount() {
    // listen to the changing of URL
    window.addEventListener('popstate', this.onLocationChange);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.onLocationChange);
  }

  render() {
    return this.state.currentPath === this.props.path
      ? this.props.children
      : null;
  }
}

export default Route;
