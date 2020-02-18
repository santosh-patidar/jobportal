import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login_emp';
// import Dashboard from './Emp_sign';

import Dashboard from './Jobhomepage';
import Emp_sign from './Emp_sign';
// import Dashboard from './company';



class route extends React.Component {
  render() {
   return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component= {Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Jobhomepage" component={Dashboard} />
        <Route path="/Emp_sign" component={Emp_sign} />

        {/* <Route path="/company" component={Dashboard} /> */}
        
      </Switch>
    </BrowserRouter>
    );
  }
};

export default route;
  