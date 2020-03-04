import axios from 'axios';
import auth from './auth';



const database = "http://localhost:5000";
//start of user functions
export const register = newUser => {
  
  return axios
    .post(`${database}/users/register`, newUser)
    .then(res => {
      auth.login(() => {
        return res.data;
      });
      
    }).catch(  (err,res) => res.status(400).json(err));
}

export const login = user => {
  return axios
    .post(`${database}/users/login`, {
      email: user.email,
      password: user.password
    })
    .then(res => {
      auth.login(() => {
        return res.data;
      });
    })
    .catch((err,res) => res.status(400).json(err))
}
export const logout = (props)=>{
 
    
      auth.logout(() => {
      return  '';
     
      });
   
    
  
    
}



//end of user functions

// Start of Room Functions
export const getRooms =()=>{
 return  axios.get(`${database}/rooms`)
    .then (response => response)
    .catch(err=> console.log(err));

}

export const getRoom =(id)=>{
  return  axios.get(`${database}/rooms/${id}`)
     .then (res => res)
     .catch(err=> console.log(err));
 
 }
 

// End of Room Functions

// Start of Booking Functions
export const getBookings =()=>{
  const user = auth.getUser();
    return  axios.get(`${database}/bookings/${user._id}`)
       .then (response => response)
       .catch( (err,res) => res.status(400).json(err));
   
}


export const createBooking = (roomId, booking) =>{
  const user = auth.getUser();
  booking.user = user;
    return axios.post(`${database}/bookings/add/${roomId}`, booking)
    .then(res => res)
    .catch( (err,res) => res.status(400).json(err));
    
}


export const deleteBooking = (bookingId) =>{
    return axios.delete(`${database}/bookings/${bookingId}`)
    .then(res => res)
    .catch( (err,res) => res.status(400).json(err));
    
}
   
   // End of Booking Functions