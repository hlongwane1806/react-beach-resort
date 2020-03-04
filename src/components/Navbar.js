import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import {FaAlignRight, FaRegUser} from 'react-icons/fa';
import {logout} from '../functions/functions';
import auth from '../functions/auth';
class Navbar extends Component{
    constructor(props){
        super()
        this.state ={
            isOpen: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle =()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return(
            <div className="navbar">
                <div className="nav-center">
                    <div className="nav-header"> 
                    <Link to='/' className='navbar-brand'><img src ={logo} alt="Waves Resort"/></Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                    <FaAlignRight className="nav-icon"/>
                    </button>
                   
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/bookings">Bookings</Link></li>
                       <Auth isOpen ={this.state.isOpen} />
                        
                    </ul>
                </div>
            </div>
        )
    }
} 

export default Navbar;

const Auth = (props)=>{

    if(!props.isOpen){
        if(!auth.isAuthenticated()){
            return(<>   <li><Link to="/register"><FaRegUser className="auth-icon" />&nbsp;Register</Link></li>
                <li><Link to="/login"><FaRegUser className="auth-icon" />&nbsp;Login</Link></li></>)
            
        } 

    } else {
        if(!auth.isAuthenticated()){
            return ( <li><Link to="/register"><FaRegUser/>&nbsp;Register / Login</Link></li>)
        }
       
    }
   
        return(<li onClick={logout}><Link to ="#" ><FaRegUser className="auth-icon" />&nbsp;Logout</Link></li>);
    
   

}
