import '../css/About.css';
import React from 'react';
import Link from './Link';

class About extends React.Component {
  render() {
    const animation = true;
    return (
      <div>
        <div className="container">
          <div className="back-home">
            <Link href="/" textHover="Back Home" animation={animation}>
              Evy.Home
            </Link>
          </div>
          About
        </div>
      </div>
    );
  }
}

export default About;
