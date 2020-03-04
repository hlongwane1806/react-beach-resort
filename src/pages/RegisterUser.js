import React, {Component} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Title from '../components/Title';
import { FaRegUser} from 'react-icons/fa';
import Message from '../components/Message';
import {register} from '../functions/functions';
import Navbar from '../components/Navbar';
class CreateUser extends Component{
    constructor(props){
        super(props);
        this.state ={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            success:'',
            error:'',
           
            
        }
        this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange =(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
           [name]:value
        })
    }
    
    handleSubmit =(e)=>{
        e.preventDefault();
        const user = {
           ...this.state
        }

        register(user).then( ()=>{
        
            this.setState({
                success:'You have been successfully registered!',
                error:''
            })
            const delay = 3000;
            setTimeout(function(){
                
               },delay);
               this.props.history.push('/rooms');
           
    })
        .catch(error=>{
            this.setState({
                error: 'A user with the given email is already registered',
                success:'',
                password:'',
                email:''
            })
        })
        
        // window.location ='/';
    }

    render(){
        return(
           <div >
               <Navbar />
               <Hero>
                   <Banner title="registration">
                       <Link to="/rooms" className="btn-primary">View Our rooms</Link>
                   </Banner>
               </Hero>
               

              
               <div className="user-container">
              <Title title="register"/>
              <form className="user-form" onSubmit={this.handleSubmit}>
                  <div className="form group form-icon">
                      <FaRegUser className="user-form-icon"/>
                  </div>
                  {this.state.error? <Message status="error" message={this.state.error} />:''}
               {this.state.success? <Message status="success" message={this.state.success} />:''}
                  <div className="form-group">
                  <div className="form-group">
                            <div className="names">
                                    <div className="name">
                                    <label htmlFor="First Name">First Name: </label>
                                       <input name="firstName" 
                                       type="text"
                                       required
                                       className="form-control user-input"
                                        value={this.state.firstName} 
                                        onChange={this.handleChange}/> 
                                    </div>
                                    <div className="name">
                                    <label htmlFor="Last Name">Last Name: </label> 
                                        <input name="lastName"  
                                        type="text"
                                        required
                                        className="form-control user-input"
                                        value={this.state.lastName} onChange={this.handleChange}/> 
                                    </div>
                            </div>
                        </div>
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
                    
                      <input type="submit" className =" btn-primary" value="Register"/>
                  </div>
              </form>
              <Link to="/login" className="bottom-link">Already registered? Login here</Link>
              </div>
           </div>
        )
    }
} 

export default CreateUser;
