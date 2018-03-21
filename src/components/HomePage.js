import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
  color: 'red',
};

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="jumbotron center">
    <h1 style={divStyle} className="lead"> Welcome to </h1>
    <div>
      <Link to="todo">
        <button className="btn btn-lg btn-primary"> Visit Todo </button>
      </Link>
    </div>
  </div>
);

export default HomePage;
