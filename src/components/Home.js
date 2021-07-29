import './Home.css';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <a className="item">Hello!</a>
        </div>

        <div>
          <a className="item">I am</a>
        </div>

        <div>
          {' '}
          <a className="item">Evy</a>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
