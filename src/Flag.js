import React from "react";

import "./App.css";

export default function Flag(props) {
   return (
<div className="row countryflag">
                <img
                  src= {props.link}
                  alt= {props.alt}
                  title= {props.flag}
                  id="flag"
                />
              </div>
   );
}