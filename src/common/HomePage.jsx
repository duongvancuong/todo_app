import React from 'react';
import Tabs from '../components/Tabs';

const divStyle = {
  color: 'red',
};

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="jumbotron center">
    <h1 style={divStyle} className="lead"> Welcome! </h1>
    <Tabs>
        <div label="すべて">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="法人">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="個人">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
  </div>
);

export default HomePage;
