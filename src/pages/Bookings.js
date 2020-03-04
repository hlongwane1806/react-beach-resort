import React,{Component} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {getBookings, deleteBooking } from '../functions/functions';
import Navbar from '../components/Navbar';

import Loading from '../components/Loading';
import Title from '../components/Title';
import Booking from '../components/Booking';

class Bookings extends Component{

   constructor(props){
      super(props);

      this.state={
         bookings:'',
         loading:true
      }
      this.bookingsList = this.bookingsList.bind(this);
      this.deleteBooking = this.deleteBooking.bind(this);
   }
 componentDidMount(){
  
      getBookings()
      .then((res)=>{
         let bookings=[];
         
          if(res.data.length>0){
              bookings =[...res.data]
          }
          this.setState({
            bookings:bookings,
            loading:false
         })
      }).catch(error=>{
          console.log("Front-end error: "+error)
      })
   
  
 }
 deleteBooking =(id)=>{
   deleteBooking(id)
   .then(res =>{
      this.setState({
         bookings: this.state.bookings.filter((booking)=> booking._id !==id)
      })
   })
}

 bookingsList =()=>{

return this.state.bookings.map((booking)=>{
      return <Booking key={booking._id} booking={booking} deleteBooking={this.deleteBooking}/>           
     })
         
 }

   
render(){
   return(
      <div>
         <Navbar />
         <Hero>
               <Banner title="Your Bookings" subtitle="">
                       <Link to="/rooms" className="btn-primary">View Our rooms</Link>
               </Banner>
       </Hero>
     
       {this.state.loading? <Loading />
       :
       this.state.bookings.length === 0?
       <div className="empty-search">
                <h3>You have no bookings</h3>
       </div>  
            : 
      <section className="bookingsList">
             <Title title=" Current Bookings"/>
            <div className="bookingsList-center">
            {this.bookingsList()}
           </div>
      </section>
    } 
      </div>)

   }
}
export default Bookings;