import '../css/Home.css';
import React from 'react';
/*
NOTE: Duty of this Link class:
    => Display a link DOM
    => Build a Navigation Event when user clicks a link that is going to communicate to the rest of our application that the URL has just changed. The navigation event will then be sent off to all of the different Route components inside the app. When these Route components recieve the navigation event, they r going to know that the URL has just changed. They will then take a look at the updated URL and decide whether or not they should show their respective child components.
 */

class Link extends React.Component {
  linkRef = React.createRef();
  animation = false;

  onClick = (event) => {
    event.preventDefault();
    // Update the URL on the URL bar everytime we click the link
    window.history.pushState({}, '', this.props.href);

    const navEvent = new PopStateEvent('popstate');
    // Communicate over to the Route component that the URL has just changed and the Route can listen to it.
    window.dispatchEvent(navEvent);
  };

  onMouseOver = (e) => {
    e.target.innerHTML = this.props.textHover;
    this.animation = true;
  };
  onMouseLeave = () => {
    this.linkRef.current.innerHTML = this.props.children;
    this.animation = false;
  };

  render() {
    const active = this.animation ? 'active' : '';
    return (
      <div className={active}>
        <a
          className="item"
          href={this.props.href}
          onClick={this.onclick}
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
          ref={this.linkRef}
        >
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default Link;
