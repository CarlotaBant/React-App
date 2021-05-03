import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div     style={{
        position: 'absolute', left: '60%', top: '40%',
        transform: 'translate(-60%, -40%)'
    }}
>
      <Weather defaultCity="Berlin" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
