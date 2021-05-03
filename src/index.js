import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div     style={{
        position: 'absolute', left: '50%', top: '35%',
        transform: 'translate(-50%, -35%)'
    }}
>
      <Weather defaultCity="Berlin" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
