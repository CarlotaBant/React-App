import React from "react";

import "./App.css";

export default function City(props) {
   return (
<div className="row city">
 <div className="Header">
      <h3 className="col" id="city-name">
        {props.city}
      </h3>
    </div>
</div>
   );
}