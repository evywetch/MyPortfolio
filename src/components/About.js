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
           I am a front-end student. I code because it's fun. What I like about it is the interaction. 
           I like the feeling when things work or interact from the code I write. That makes me very excited. 
           The purpose of this portfolio is to practice my Javascript and React skill. 
         
          </p>
        </div>
      </div>
    );
  }
}

export default About;
