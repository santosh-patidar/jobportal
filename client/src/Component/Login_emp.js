import React, { Component } from 'react';

const axios = require('axios');

class Login extends Component {
  constructor(props){
    super(props);
    this.state={fields:{} }
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
    //console.log(this.state.fields);
    axios.post(`http://localhost:5000/api/login`,userData)
    .then((res)=> {
     console.log(res);
      const Ssuccess ={
    SsuccessTokan: res.data.token,
     Ssuccessemail: res.data.ss.email,
     Ssuccessname:res.data.ss.name
      }
     console.log(Ssuccess);

     localStorage.setItem('success_Token',res.data.token);  
     localStorage.setItem('Name',res.data.ss.id); 
     localStorage.setItem('Name',res.data.ss.name); 
     localStorage.setItem('Email_Token',res.data.ss.email);  
      // localStorage.setTokan('refresh_tokan',JSON.stringify(snum));
      
    })
    .catch((err)=>{
       console.log(err);  
       alert("Error")
  })
}

    render() {
    return (
      <div className="Log_emp.css">
        <form className="px-4 py-3" encType="multipart/form-data" onSubmit= {this.onSubmit}> 
        <h4 className="modal-header text-center">LOGIN</h4>

          <div className="form-group">
           <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" placeholder="email@example.com" value={this.state.fields.email || ''} onChange={this.onChange}/>
          </div>
          <div className="form-group">
           <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.fields.password || ''} onChange={this.onChange} autoComplete="off"/>
          </div>          
            <button type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect">Login</button>
            <p>Not a member?<a href="SignUP">SignUP</a></p>
        </form>
        </div>
    );
  }
}

export default Login;
