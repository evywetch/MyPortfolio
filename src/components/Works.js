import React from 'react';
import Link from './Link';

class Works extends React.Component {
  render() {
    return (
      <div>
        <div>Works</div>
        <button>
          <Link href="/" textHover="Evy.home">
            Evy
          </Link>
        </button>
      </div>
    );
  }
}

export default Works;
