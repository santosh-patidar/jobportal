import React from 'react';
//import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Component/Home';
import PsRoute from "./Component/route";


function App() {
  return (
    <div className="App">
      <Home/>
      <PsRoute />
     
    </div>
  );
}
export default App;
