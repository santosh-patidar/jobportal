import React, { Component } from 'react';
import "bootstrap/js/src/dropdown"
import './Dash.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


class Dash extends Component {
    render(){
        return(
           
           <div>
                <h1 style={{fontSize:"100px",color:"gray"}}>WELLCOME TO THE jobPorTaL</h1>
               <div className="div1">
               
                
              <div >
             
                <input type="text" className="form-control" name="search" placeholder="FEILD"  />
                <button type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-1 ">Search</button>

              </div>
           

              
              </div>
              {/* <li className="class=nav-item dropdown">
                        
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Student</a>
                         <div className="dropdown-menu">
                  /  <a href="#" className="dropdown-item"  href="/SignUp">Student</a>
                    <a href="#" className="dropdown-item">Employee</a>
                                  
                </div>
                </li> */}
                <div className="nm1">               
               <div>
             
                <input type="text" className="form-control" name="job" placeholder="JoB" />
              </div>          
                <button type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-0 waves-effect">Search</button>
  
              </div>
            
            </div> 

        );
    }

}
export default Dash;