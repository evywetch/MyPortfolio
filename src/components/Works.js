import '../css/Works.css';
import React from 'react';
import Link from './Link';

class Works extends React.Component {
  render() {
    const animation = true;
    return (
      <div className='sub-container'>
        <div className='home-link'>
          <Link href="/" textHover="Evy.home" animation={animation}>
            Evy
          </Link>
        </div>
        <div className='content'>
        works
        </div>
      </div>
    );
  }
}

export default Works;
