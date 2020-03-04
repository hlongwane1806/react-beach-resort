import React,{Component} from'react';
import {RoomContext} from '../context';
import Loading from './Loading'
import Room from './Room';
import Title from './Title'; 
class FeaturedRooms extends Component{
constructor(props){
    super(props);
    this.state ={
   
    }
   
}
static contextType = RoomContext;

    render(){
    let { loading, featuredRooms:rooms} = this.context;
     let roomsList =()=>{
        return rooms.map((room)=>{
            return <Room room={room} key={room._id}/>
        });
        }
        console.log(rooms);        
    return(<section className="featured-rooms">
        <Title title ="Featured Rooms"/>
        <div className="featured-rooms-center">
            {loading? <Loading />: roomsList()}
        </div> 
    
    </section>);
    }
}

export  default FeaturedRooms