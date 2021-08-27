import '../css/Contact.css';
import React from 'react';
import Link from './Link';

class Contact extends React.Component {
  render() {
    const animation = true;
    return (
      <div className='sub-container'>
       
        <div className="home-link">
          <Link href="/" textHover="Evy.home" animation={animation}>
            Evy
          </Link>
        </div>

        <div className="content">
          Drop me some message at evywetch@gmail.com</div>
      </div>
    );
  }
}

export default Contact;
