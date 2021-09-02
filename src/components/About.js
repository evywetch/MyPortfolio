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
           I am a front-end student. I just code as a hobby. What I like about it is the interaction. 
           I like the feeling when things work or interact from the code I write. That makes me very excited. 
           The purpose of this portfolio is just to practice my front-end skills. 
           I think I like coding but I don't like to work as a developer. I like to be in a talkative and fun environment.
           So I am not suitable in a developer environment. 


          </p>
        </div>
      </div>
    );
  }
}

export default About;
