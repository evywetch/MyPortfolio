import '../css/Home.css';
import React from 'react';
import Link from './Link.js';

class Home extends React.Component {
  render() {
    const animation = true;
    return (
      <div className="home">
        <div className="links">
          <div>
            <Link href="/about" textHover="About" animation={animation}>
              Hello
            </Link>
          </div>
          <div>
            <Link href="/works" textHover="Works" animation={animation}>
              I am
            </Link>
          </div>
          <div>
            <Link href="/contact" textHover="Contact" animation={animation}>
              Evy
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
