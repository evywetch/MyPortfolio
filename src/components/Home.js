import '../css/Home.css';
import React from 'react';
import Link from './Link.js';

class Home extends React.Component {
  animation = true;
  render() {
    return (
      <div className="home">
        <div className="links">
          <Link href="/about" textHover="About" animation={this.animation}>
            Hello
          </Link>
          <Link href="/works" textHover="Works" animation={this.animation}>
            I am
          </Link>
          <Link href="/contact" textHover="Contact" animation={this.animation}>
            Evy
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
