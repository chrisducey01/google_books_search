import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import SearchWrapper from './pages/SearchWrapper';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <div>
      <AppNavbar />
      <Container className="App">
        <SearchWrapper />
      </Container>
    </div>
  );
}

export default App;
