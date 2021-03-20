import './App.css';
import React from "react";
import Header from './components/Header';
import Directory from './pages/Directory';

function App() {
  return (
    <div className="App">
      <Header title="Employee Directory"/>
      <Directory />
    </div>
  );
}

export default App;
