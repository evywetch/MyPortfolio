import '../css/Home.css';
import React from 'react';
import Link from './Link.js';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="links">
          <Link href="/about" textHover="About">
            Hello
          </Link>
          <Link href="/works" textHover="Works">
            I am
          </Link>
          <Link href="/contact" textHover="Contact">
            Evy
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
