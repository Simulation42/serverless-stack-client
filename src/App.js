import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <div className="AppContainer">
      <div className="navbar">
        <Link to="/" className="navBrand">Poke'Gram</Link>
        <Link to='/signup' className="signUp">Signup</Link>
        <Link to='/login' className="login">Login</Link>
      </div>
      <Routes />
    </div>
  );
}

export default App;
