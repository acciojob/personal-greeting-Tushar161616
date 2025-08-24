
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name,setName] = useState("");
  const input = document.getElementById("intext");

  function change(e){
   
    if(input.innerText !== ""){
    setName(e.target.value);
    }
  }
 
 
  return (
    <div>
        <label for="intext">Enter your name:</label><br></br>
        <input type="text" id="intext" onChange={change}></input>
        <p>Hello,{name}!</p>
    </div>
  )
}

export default App
