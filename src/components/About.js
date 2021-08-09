import React from 'react';
import Link from './Link';

class About extends React.Component {
  render() {
    return (
      <div>
        <div>About</div>
        <button>
          <Link href="/" textHover="Back Home">
            Back Home
          </Link>
        </button>
      </div>
    );
  }
}

export default About;
