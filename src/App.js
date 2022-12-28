 import logo from './logo.svg';
import './App.css';
import React from "react";
// import {FaBed} from "react-icons/fa";

function App() {
  return (

   <div className="hostelCard">
    <div className="hostelImage">
      <img src={logo} alt="hostel image"/>
    </div>
  <div className="hostelName">
      Bucker Hostel

  </div>
  <div className="owner">
   Owner: mustafa
  </div>
 <div className="bed">
  <div className="Bed1">
      Number of one Bed : 2
    </div>
    <div className="Bed2">
      Number of two Bed : 2
    </div>
    <div className="Bed3">
      Number of three Bed : 2
    </div>
 </div>


  </div>  
  );
}

export default App;
