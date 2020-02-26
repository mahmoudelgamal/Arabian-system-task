import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/navbar';
import Adventure from './components/adventure/Adventure';
import Featured from './components/feature/Featured';

function App() {
  return (
    <>
      <Navbar/>
      <Adventure/>
      <Featured/>
    </>

  );
}

export default App;
