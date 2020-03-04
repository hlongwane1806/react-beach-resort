import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-3.jpeg'

class Booking extends Component{
    constructor(props){
    super(props);
        this.state ={

        }
    }

   
render(){
const {_id, room, arrivalDate, departureDate} = this.props.booking;
const {deleteBooking} = this.props;

    console.log("this is the room = "+room);
    
    return(
        <div className="booking-container">
            <div className="booking-details">
                <img className="booking-image"src={defaultImg} alt="room"/>   
            </div>
            <div className="booking-details">
                <h4>{`${room.name} room`}</h4>
                <div className="booked-dates">
                    <span className="booked-date">Check in: {arrivalDate.substring(0,10)}</span>  
                    
                    <span className="booked-date">Check out: {departureDate.substring(0,10)}</span>
                </div>
            
                <div className="booking-buttons">
                    <Link to={`/rooms/${room.id}`} className="btn-primary">View Room</Link>
                    <button className="btn-primary btn-delete" onClick={()=>deleteBooking(_id)}>Delete Booking </button>
                </div>
            </div>
         
         
            
           
               
                
        </div>
     )
}


}
export default Booking;