import React from 'react';

const divStyle = {
  color: 'red',
};

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="jumbotron center">
    <h1 style={divStyle} className="lead"> Welcome! </h1>
  </div>
);

export default HomePage;
