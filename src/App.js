import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import {myphoto  } from "./myphoto.jpg";

function App() {
  return (
    <div className="App"   style={{
      boxShadow: "5px 10px #888888",
      margin: "50px ",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    }} >
      
        <FullName/>
        <img src= {myphoto} alt="marwa"/>
        <Address/>


       
      
    </div>
  );
}

export default App;
