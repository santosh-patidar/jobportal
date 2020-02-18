import React from 'react';
import "../../node_modules/bootstrap/js/src/dropdown.js"

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
const Home = () => {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
           <div className="container">
               <a className="navbar-brand" href="/Jobhomepage"><h1>JobPorTaL</h1></a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                        </li>      */}
                             <li className="class=nav-item dropdown">
                        
                        <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Login</a>
                        <div className="dropdown-menu">
                    <a  className="dropdown-item"  href="/"> STuDenT </a>
                    <a  className="dropdown-item" href="/">Employee</a>
                                     
                </div>
                </li>  
                        {/* <li className="nav-item">
                        <a className="nav-link" href="/SignUp">SignUp</a>
                        </li> */}
                        <li className="class=nav-item dropdown">
                        
                        <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">SignUp</a>
                        <div className="dropdown-menu">
                    <a  className="dropdown-item"  href="/SignUp">STuDenT</a>
                    <a  className="dropdown-item" href="/Emp_sign">Employee</a>
                                     
                </div>
                </li>  
                        
                    </ul>
               </div>
            </div>
  
         </nav>

     );    
};
export default Home;


