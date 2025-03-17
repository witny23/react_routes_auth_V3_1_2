import React from 'react';
import { useState } from "react";
// The React useState Hook allows us to track state in a function component.


// the following is a functional component that returns jsx
export default Link = () => {
    const [pet, setPet] = useState("cat");  // color is set to red, setColor is used to update color
    return (
      <>
        <h1>Link Functional Component!</h1>  
        <p>The state of pet is {pet}!</p>  
        <button onClick={() => setPet("dog")}> change to dog</button>  
      </>
    )
  
  }