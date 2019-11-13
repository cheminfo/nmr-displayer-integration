import React from "react";
import NMRDisplayer from "nmr-displayer";
import { Analysis } from "nmr-displayer/lib/data/Analysis";

import "./App.css";

const analysis = new Analysis();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 1200, height: 800 }}>
          <NMRDisplayer data={analysis} />
        </div>
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
      </header>
    </div>
  );
}

export default App;
