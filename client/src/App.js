import React from 'react';

import './App.css';
import SocialBar from './components/SocialBar';
// import NavigationContainer from './components/NavigationContainer';

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1>Hi! I'm <span className="name">Drew Weaver</span></h1>
        <h5>Front-End Developer in Central PA</h5>
        <SocialBar />
        <h4>I'm working on some projects at the moment...</h4>
        {/* <NavigationContainer /> */}
      </div>
    </div>
  );
}

export default App;
