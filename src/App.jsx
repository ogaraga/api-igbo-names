import "./App.css";
import { useState } from "react";
import { yourNames } from "../../backend/allNames/igboNames";

function App() {
  const [userName, setUserName] = useState("");
  const foundName = yourNames.find(
    (item) =>
      item.name.toLowerCase() === userName ||
      item.name.toUpperCase() === userName ||
      item.name === userName
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userName === foundName.name ||
      userName === foundName.name.toUpperCase() ||
      userName === foundName.name.toLowerCase() || userName.length !== 0
    ) {
      document.getElementById("span").innerHTML = JSON.stringify({
        Message: 'Name found!' + '<br/>',
        NameInfo: foundName
      });
    } else if(userName.length === 0 || userName !== foundName.name){
      document.getElementById("spanky").innerText = {Error:"No name found!"};
      document.getElementById("spanky").style.color = "red";
      
    }
    else{
      document.getElementById("spanky").innerText = {Error:"Something went wrong!"};
      document.getElementById("spanky").style.color = "red";
    }
    setUserName("");
  };
  const handleClear = ()=>{
    document.getElementById("span").innerHTML='';
  }
  return (
    <div className="app">
       <span id="span"/>
      <form onSubmit={handleSubmit} action="" method="get">
        
      <button type="button" id="btn" onClick={handleClear}>ClearName</button>
        <input
          type="text"
          name="name"
         placeholder="Enter  your name..."
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <button type="submit">Getname</button>
      </form>
      <span id="spanky"/>
    </div>
  );
}

export default App;
