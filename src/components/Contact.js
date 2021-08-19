import React from 'react';
import Link from './Link';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div>Contact</div>
        <button>
          <Link href="/" textHover="Evy.home">
            Evy
          </Link>
        </button>
      </div>
    );
  }
}

export default Contact;
