import React from 'react';
import './App.css';
import CalcApp from './calculator'
import Footer from './footer';
import Head from './navbar';


function App() {
  return (
    <div className="App">
      <h1>Simple React Calculator</h1>
      <Head />
      <CalcApp />
      < Footer/>
    </div>
  );
}

export default App;
