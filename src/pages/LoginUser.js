import React, {Component} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Title from '../components/Title';
import { FaRegUser} from 'react-icons/fa'
import Message from '../components/Message';
import {login} from '../functions/functions';
import Navbar from '../components/Navbar';
class LoginUser extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
            error:'',
            success:''
            
        }
        this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    
    handleSubmit =(e)=>{
        e.preventDefault();
        const user = {
            email: this.state.email,
            password:this.state.password
        }
      login(user)
        .then((result)=>{
            this.setState({
                success:"You have been successfully logged in",
                email:'',
                password:'',
                error:""
            })
             this.props.history.push('/rooms');
        })
        .catch(error=>{
            console.log(error);
            this.setState({
                success:'',
                error:'Incorrect login details'
            })
        })
        
    }

    render(){
        return(
           <div >
               <Navbar/>
               <Hero>
                   <Banner title="Login">
                       <Link to="/rooms" className="btn-primary">View our Rooms</Link>
                   </Banner>
               </Hero>
               <div className="user-container">
              <Title title="login"/>
              <form className="user-form" onSubmit={this.handleSubmit}>
                  <div className="form group form-icon">
                      <FaRegUser className="user-form-icon"/>
                  </div>
                  
                  {this.state.error? <Message status="error" message={this.state.error} />:''}
               {this.state.success? <Message status="success" message={this.state.success} />:''}
                  <div className="form-group">
                      <label htmlFor="email">Email: </label>
                      <input
                      name="email"
                      type="email"
                      required
                      className="form-control user-input"
                      value={this.state.email}
                      onChange={this.handleChange}/>
                 </div>
                 <div className="form-group">
                      <label htmlFor="password">Password: </label>
                      <input
                      name="password"
                      type="password"
                      required
                      className="form-control user-input"
                      value={this.state.password}
                      onChange={this.handleChange}/>
                 </div>
                  
                  <div className="form-group user-submit">
                    
                      <input type="submit" className =" btn-primary" value="Login"/>
                  </div>
              </form>
              <Link to="/register" className="bottom-link">Not registered yet? Register here</Link>
              </div>
           </div>
        )
    }
} 

export default LoginUser;