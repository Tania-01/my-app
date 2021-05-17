import React from 'react';

import Intro from "./components/Intro";
import Description from "./components/Description";
import Footer from "./components/Footer";

import NAV from "./components/Nav/NAV"
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <NAV />
      <Intro />
      <Description />
      <Footer />
    </div>
  );

}

export default App;
