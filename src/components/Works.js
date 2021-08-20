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
        <h1>Here are my works...</h1>

        <div className='work'>
          <p>A Budgety app, built with Javascript, CSS, HTML and module methodology</p>
        <img src="/images/Budgety.png" alt='Map app'/>
        <a class='work-link' href='#'><i class="far fa-hand-point-right"></i> Click here to try it</a>
        </div>

        <div className='work'>
          <p>A Mapty app, built with JS(ES6), HTML, CSS, DOM, Geolocation API, Leaflet library and Local Storage.</p>
        <img src="/images/Mapty.png" alt='Map app'/>
        <a class='work-link' href='#'><i class="far fa-hand-point-right"></i> Click here to try it</a>
        </div>

        </div>
      </div>
    );
  }
}

export default Works;

/*
NOTE:🌟🌟🌟
=> To be able to access fotos with React app, have to add images folder in public folder coz public folder is accessible
 */
