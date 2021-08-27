import '../css/About.css';
import React from 'react';
import Link from './Link';

class About extends React.Component {
  render() {
    const animation = true;
    return (
      <div className="sub-container">
        <div className="home-link">
          <Link href="/" textHover="Evy.home" animation={animation}>
            Evy
          </Link>
        </div>
        <div className="content">
          <h1>Hey! I am Evy.</h1>
          <p>
           I am just a frontend student. I can code but but i don't know if i have passion about it. 
          </p>
        </div>
      </div>
    );
  }
}

export default About;
