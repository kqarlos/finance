import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';

function App() {


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Homepage /> */}
      {/* {state.portfolio.name} */}

      <Router>

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route path="/***" component={***} /> */}
          <Route path="/:nomatch" element={<Homepage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
