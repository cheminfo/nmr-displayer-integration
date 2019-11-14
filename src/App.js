import React from "react";
import NMRDisplayer from "nmr-displayer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 1200, height: 800 }}>
          {/* TODO: remove data once it's optional */}
          <NMRDisplayer data={{}} />
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
