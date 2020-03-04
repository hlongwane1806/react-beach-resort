
import React from'react';
import Room from './Room';

const RoomsList = (props)=>{

    if(props.rooms.length ===0){
            return(<div className="empty-search">
                <h3>Unfortunately, no rooms matched your search</h3>
            </div>)
        }
        return(<section className="roomsList">
            <div className="roomslist-center">
             { props.rooms.map((room)=>{
        return <Room room={room} key={room._id}/>
             })}
             </div>
        </section>)

    
}

export  default RoomsList;