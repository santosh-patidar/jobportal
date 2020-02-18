import React, { Component } from 'react';

import './My.css';



const axios = require('axios');

class Emp_sign extends Component {
  constructor(props){
    super();
   
    this.state={fields:{},
    nameError:"",
    emailError:"",
    passwordError:"",
    websiteError:""
   }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    let fields = this.state.fields;
       //console.log(fields[e.target.name]);
        fields[e.target.name] = e.target.value;
        this.setState({fields});
  }
  onSubmit=(e)=>{
    e.preventDefault(); 
    const userData = this.state.fields;
    // console.log(this.state.fields);
    axios.post(`http://localhost:5000/api/Employee`,userData)
    .then((res) =>
     {       
       console.log(res);
       console.log(res.data);
      if(res.data.hasOwnProperty("_id")){
      alert("Registered succesfylly")
    }else{
    if(res.data.hasOwnProperty("Company_name"))
    {
      alert(res.data.Company_name)
    // this.setState({clicked:true});
    this.setState({ers1:res.data.Company_name});
     }
      if(res.data.hasOwnProperty("email"))
      { 
      alert(res.data.email)
    this.setState({ers2:res.data.email});
    }
    if(res.data.hasOwnProperty("website"))
    { 
    alert(res.data.website)
  this.setState({ers3:res.data.website});
  }
     if(res.data.hasOwnProperty("password"))
     {
    alert(res.data.password)
  this.setState({ers4:res.data.password});
    }
    if(res.data.hasOwnProperty("password2"))
    {
      alert(res.data.password2)
    this.setState({ers5:res.data.password2});
}
    }
})
  .catch((err)=> {console.log(err); alert("EROOR") })
    
}

    render() {
        return (
        <div className="My">
             <form  className="px-4 py-3"  encType="multipart/form-data" onSubmit= {this.onSubmit} id="sign">
  
            <h4 className="modal-header text-center">SIGNUP</h4>
           
              <div className="form-group"  >
              
                <label>Company_Name</label>
                <input type="text" className="form-control" name="Company_name" placeholder="Enter UserName" value={this.state.fields.Company_name || ''} onChange={this.onChange} />
              </div>     
              <div className="form-groupt">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" placeholder="email@example.com" value={this.state.fields.email || ''} onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Website</label>
                <input type="text" className="form-control" name="website" placeholder="Enter website name" value={this.state.fields.website || ''} onChange={this.onChange} />
              </div> 
              <div className="form-group">
            <label htmlFor="password2"> Password</label>
            <input type="password" className="form-control" name="password" placeholder="ReEnter Password" value={this.state.fields.password || ''} onChange={this.onChange} autoComplete="off"/>
          </div>  
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" className="form-control" name="password2" placeholder="ReEnter Password" value={this.state.fields.password2 || ''} onChange={this.onChange} autoComplete="off"/>
          </div>
    <button type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect">Sign in</button>
              <p>Already a member?<a href="/">LogIn</a></p>
            </form>
            </div>
        );
      }
}
    
    export default Emp_sign;
    
