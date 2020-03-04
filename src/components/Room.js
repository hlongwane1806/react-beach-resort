
import defaultImg from '../images/room-1.jpeg'

import React from 'react';
import {Link} from 'react-router-dom';


const Room =(props)=>{
  const {_id, name,price,images} =props.room;

return(
  
  <article className="room"> 
    <div className="img-container">
      <img src={ images[0]||defaultImg } alt={name}/>
      <div className="price-top">
          <h6>{price}</h6>
          <p>per night</p>
      </div>
      <Link to={`rooms/${_id}`} className="btn-primary room-link">Features</Link>
    </div>
      <p className="room-info">{name}</p>
    </article>
)

} 
export default Room;