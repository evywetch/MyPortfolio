import '../css/About.css';
import React from 'react';
import Link from './Link';

class About extends React.Component {
  render() {
    const animation = true;
    return (
      <div className="container-about">
        <div className="home-link">
          <Link href="/" textHover="Evy.home" animation={animation}>
            Evy
          </Link>
        </div>
        <div className="content">
          <h1>I build and make applications work.</h1>
          <p>
            My name is Evy. I’m a studying front-end developer coming from the
            backend like Java and other back-end technologies. Now I am learning
            React to increase my front-end skills after I have just completed a
            full Javascript course. My goal is to get further training in a
            place with a teamwork environment. I am enthusiastic, friendly and a
            real team player.{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default About;
