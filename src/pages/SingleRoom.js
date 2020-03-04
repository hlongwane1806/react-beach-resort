import React,{Component} from'react';

import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import defaultImg from '../images/room-3.jpeg'
import defaultBcg from '../images/defaultBcg.jpeg'
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import Navbar from '../components/Navbar';
// import axios from 'axios';
class SingleRoom extends Component{
    constructor(props){
        super(props);
     
        this.state ={
            slug: this.props.match.params.slug
        }
    }
    
   static contextType = RoomContext;
    render(){
        
        let {getRoom} = this.context;
        const room = getRoom(this.state.slug);
       
       if(!room){
           return <div><Navbar /><ShowError /></div> 
       }
       return<div><Navbar/> <ShowRoom room ={room}/></div>
    }
}

const ShowRoom =(props)=>{
    const {_id, name,description,capacity,size,price,extras, breakfast, pets,images} = props.room;
    return(<>
    <Navbar/>
        <StyledHero hero="roomsHero" img={images[0]}>
            <Banner title={`${name} room`}>
            <Link to={`/book/${_id}`} className="btn-primary"> Book room</Link>
            </Banner>
            
        </StyledHero>
        <section className="single-room">
        <div className="single-room-images">
            
            {images.map((img,index)=><img src key={index} src={img||defaultImg} alt={name}/>)}
        </div>
        
        <div className="single-room-info">
            <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
            </article>
            <article className="info">
                <h3>info</h3>
                <h6>price: R{price}</h6>
    <h6>size: {size} SQFT</h6>
    <h6>Max Capacity: {capacity > 1? `${capacity}people`: `${capacity} person`}</h6>
    <h6>{pets? 'Pets allowed':'No pets allowed'}</h6>
    <h6>{breakfast?'Free breakfast included':''}</h6>
            </article>

        </div>
    </section>
    <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
           {extras.map((extra,index)=>{
               return <li key={index}>- {extra}</li>
           })}
        </ul>

        <div className="bottom-link">
            <div className="back-link">
            <Link to ="/rooms" className=" btn-primary" >Back to rooms</Link>
            </div>
           <div>
           <Link to={`/book/${_id}/`} className="btn-primary"> Book room</Link>
           </div>
            
        </div>
    </section>
    </>
    )
}
const ShowError =()=>{
    
    return( 
    <div className="error"><h3>No such room found...</h3>
        <Link to="/rooms" className="btn-primary"> back to rooms</Link></div>
        
    )
}
export default SingleRoom;