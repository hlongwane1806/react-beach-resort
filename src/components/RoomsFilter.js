import React,{useContext} from'react';
import {RoomContext} from '../context';
import Title from './Title'; 



const RoomsFilter = (props) =>{
  const context = useContext(RoomContext); 
        const {handleChange,rooms, type, capacity,price, minPrice,
             maxPrice, minSize, maxSize, breakfast,pets} = context;


        return(<section className="filter-container">
          <Title title="search rooms"/>
          <form className="filter-form">
            
              <SelectTypes handleChange={handleChange} type={type} rooms={rooms}/>
                <SelectGuests handleChange={handleChange} capacity={capacity} rooms={rooms}/>
                <Price minPrice={minPrice} maxPrice={maxPrice} price={price} handleChange={handleChange}/>
                <Size minSize={minSize} maxSize={maxSize} handleChange={handleChange}/>
                <Extras breakfast={breakfast} handleChange={handleChange} pets={pets}/>
          </form>
        </section>)
    
    
}

export  default RoomsFilter;

const getUnique = (items, value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
const SelectTypes = (props)=>{
    //get unique types
let types = getUnique(props.rooms,'type');
//add all type
types =['all', ...types];

types = types.map((item,index)=>{
return <option value ={item}key={index}>{item}</option>
})
    return(<div className="form-group">
    <label htmlFor="type">room type</label>
    <select name="type" id="type" value={props.type}
    className="form-control"
    onChange={props.handleChange}>
        {types}
    </select>
</div>)
}


const SelectGuests= (props)=>{
    //get unique types
let people= getUnique(props.rooms,'capacity');

people= people.map((item,index)=>{
return <option value ={item}key={index}>{item}</option>
})
    return(<div className="form-group">
    <label htmlFor="capacity">Guests</label>
    <select name="capacity" id="capacity" value={props.capacity}
    className="form-control"
    onChange={props.handleChange}>
        {people}
    </select>
</div>)
}

const Price =(props)=>{
    return(<div className="form-group">
    <label htmlFor="price">room price: R{props.price}</label>
    <input type="range" min={props.minPrice} max ={props.maxPrice}name="price" id="price" value={props.price}
    className="form-control"
    onChange={props.handleChange} />
    
</div>)

}

const Size =(props)=>{
    return(<div className="form-group">
    <label htmlFor="size">room size</label>
    <div className="size-inputs">
    <input type="number" name="minSize" id="minSize" value={props.minSize}
    className="size-input"
    onChange={props.handleChange} />
    <input type="number" name="maxSize" id="maxSize" value={props.maxSize}
    className="size-input"
    onChange={props.handleChange} />
    </div>
</div>)

}

const Extras =(props)=>{
    return(<div className="form-group">
        <div className="single-extra">
        <input type="checkbox" name="breakfast" id="breakfast"  checked={props.breakfast}
    onChange={props.handleChange} />
    <label htmlFor="breakfast">breakfast</label>
        </div>
    
        <div className="single-extra">
        <input type="checkbox" name="pets" id="pets"  checked={props.pets}
    onChange={props.handleChange} />
    <label htmlFor="pets">pets</label>
        </div>
    
</div>)

}