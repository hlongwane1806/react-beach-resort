import React,{Component} from'react';
import {getRooms} from './functions/functions';
const RoomContext = React.createContext();

class RoomProvider extends Component{
constructor(props){
    super(props);
    this.state ={
        rooms:[],
        featuredRooms:[],
        sortedRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false,
        
        

    }
    this.getRoom = this.getRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterRooms = this.filterRooms.bind(this);
   
    
}
componentDidMount = ()=>{
    // load all rooms
   getRooms()
    .then((response)=>{
        const rooms =[...response.data];
        let maxPrice = Math.max(...rooms.map(room=>room.price));  
        let maxSize = Math.max(...rooms.map(room=>room.size));      
               
        this.setState({
            rooms: rooms,
            featuredRooms: rooms.filter((room)=>room.featured ===true),
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice:maxPrice,
            maxSize:maxSize,
            
        })
    
    }).catch(error=>{
        console.log("Front-end error: "+error)
    })
    //end of loading rooms

    

};
getRoom =(roomId)=>{
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room._id === roomId);
    return room;

}




    

handleChange =(event)=>{
    const target = event.target;
    const value = target.type === 'checkbox'? target.checked :target.value;
   
    const name= target.name;    

    this.setState({
        [name]: value
       
    }, this.filterRooms)
}

filterRooms = ()=>{
    let {rooms, type, capacity,price,  minSize, maxSize, breakfast,pets} = this.state;
        // all the rooms
    let tempRooms =[...rooms];
        //transform values
        capacity = parseInt(capacity);
        price = parseInt(price);


    //filter by type
    if( type !== 'all'){
        tempRooms = tempRooms.filter((room)=> room.type === type);
        }

    //filter by capacity
    if(capacity !==1){
        tempRooms = tempRooms.filter((room)=> room.capacity >= capacity);
    }

    //filter by price 
    tempRooms = tempRooms.filter((room)=> room.price  <=price );
     
    //filter by size
    tempRooms = tempRooms.filter((room)=> room.size <=maxSize && room.size >= minSize);

    //filter by breakfast
    if(breakfast) {
        tempRooms = tempRooms.filter((room)=> room.breakfast === breakfast);
    }
    

    //filter by pets
    if(pets) {
        tempRooms = tempRooms.filter((room)=> room.pets === pets);
    }
    

    //change state
        this.setState({
            sortedRooms: tempRooms
        })
    
}
    render(){
    return(<RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange:this.handleChange}}>
            {this.props.children}
           
    </RoomContext.Provider>)
    }
}
const RoomConsumer = RoomContext.Consumer;

export function withConsumer(Component){
    return function ConsumerWrapper(props){
         return <RoomConsumer>
             {
                 value => <Component {...props} context={value}/>
             }
        </RoomConsumer>
    }
}
export { RoomProvider, RoomConsumer, RoomContext};