import React from "react";
import { useLocation } from "react-router";

//TODO
// display, wait 3 seconds (show coundown clock)
//  and then automatically go to homepage

const Whoops404 = () => {
    // get current router location
    let location = useLocation();
    return (
      <div>
        <h1>Resource not found at "{location.pathname}"!</h1>
      </div>
    );
  }

  export default Whoops404;