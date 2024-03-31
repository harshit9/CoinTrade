import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import NavBar1 from './components/NavBar1'
import NavBar2 from './components/NavBar2'


function App() {
  return (
    <div>
      <NavBar1 />
      <NavBar2 />
      <Router>
        <Route exact path="/" element={Home} />
        <Route path="/crypto/:id" element={CoinPage} />
      </Router>
    </div>
  )
}

export default App
