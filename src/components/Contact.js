import '../css/Contact.css';
import React from 'react';
import Link from './Link';

class Contact extends React.Component {
 onClick = (event)=>{
   if(event.metaKey || event.ctrlKey){
     return;
   }

  }
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
          <h1>Let's get to know each other!</h1>
          Drop me some message at <a href="mailto:evywetch@gmail.com?subject=Hi there!&body=Hi there!" target="_blank" rel="noopener noreferrer">evywetch@gmail.com</a> or visit my <a href="https://www.linkedin.com/in/evy-wetcharam" onClick={this.onClick}>Linkedin</a></div>
      </div>
    );
  }
}

export default Contact;
