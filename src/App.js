import './App.css';
import React from "react";
import Header from './components/Header';
import Directory from './pages/Directory';
import { Container } from "reactstrap";

function App() {
  return (
    <Container>
      <Header title="Employee Directory"/>
      <Directory />
    </Container>
  );
}

export default App;