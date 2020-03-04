import React from'react';
import {withConsumer} from '../context';
import Loading from '../components/Loading';
import RoomsFilter from '../components/RoomsFilter';
import RoomsList from '../components/RoomsList';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';


function RoomContainer ({context}){
   
    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return (<> <Navbar/><Hero hero="roomsHero">
        <Banner title="Our rooms">
           <Link to="/" className="btn-primary"> return home</Link>
           </Banner>
   </Hero><Loading /></>)
    }
    return(<div>
        <Navbar />
         <Hero hero="roomsHero">
         <Banner title="Our rooms">
            <Link to="/" className="btn-primary"> return home</Link>
            </Banner>
    </Hero>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
        </div>
        );
}
 export default withConsumer(RoomContainer)

// import Room from '../components/Room';

// class Rooms extends Component{
//     static contextType = RoomContext;
//     render(){
//         const {rooms} = this.context;
        
//     return(
//     <RoomConsumer>
//         {value =>{
//                 const {loading, sortedRooms, rooms} = value;

//                 if(loading){
//                     return <Loading />
//                 }
//              return(<div>
//                     <RoomsFilter rooms={rooms} />
//                     <RoomsList rooms={sortedRooms} />
//                     </div>);
//    }} 
//    </RoomConsumer>

        
//         )
//     }
// }


// export default Rooms;