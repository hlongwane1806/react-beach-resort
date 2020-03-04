import React,{Component}from'react';
import {Link} from 'react-router-dom';
import {createBooking} from '../functions/functions';
import Message from '../components/Message';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import defaultBcg from '../images/defaultBcg.jpeg'
import Loading from '../components/Loading'
import {getRoom} from '../functions/functions';
import Title from '../components/Title';
import { FaBed } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../components/Navbar';
class CreateBooking extends Component{
    constructor(props){
        super(props);
     
        this.state ={
            
            slug: this.props.match.params.slug,
            room: '',
            arrivalDate: new Date(),
            departureDate: new Date(),
            notes:'',
            booking: '',
            success:'',
            error:''
            
        }
       
        this.onChangeNotes= this.onChangeNotes.bind(this);
        this.onChangeArrivalDate = this.onChangeArrivalDate.bind(this);
        this.onChangeDepartureDate = this.onChangeDepartureDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

   componentDidMount =()=>{
        
        getRoom(this.state.slug)
        .then(res=>{
            this.setState({
                room:res.data
            })
        }).catch(err => console.log(err))

   }
 
    onChangeNotes = (event)=>{
        const notes = event.target.value;
        
        this.setState({
           notes:notes
        })
    }

    onChangeArrivalDate = (date)=>{
       this.setState({
           arrivalDate:date
       })
    }
    onChangeDepartureDate = (date)=>{
        this.setState({
            departureDate:date
        })
     }

      handleSubmit =(room) => {

        const booking = {
            name: room.name,
            arrivalDate:this.state.arrivalDate,
            notes:this.state.notes,
            departureDate:this.state.departureDate

        }
        console.log("found room = "+room);
        
        
        createBooking(room._id, booking)
        .then((response)=>{
            console.log(response.data)
            const delay = 10000;
            setTimeout(function(){
               ;
               },delay);
        
           
            this.setState({
                success:'Your booking has  been made successfully!',
                error:'',
                booking:response.data,


            })
            this.props.history.push("/rooms");
        }
            )
        .catch(error=>{
            
            this.setState({
                success:'',
                error:'There has been an error processing your booking'
         })
        });
        
     
      
    } 
     
    
 render(){
    const {room} = this.state;
   
   
   
  
      if(!room){
          return(<><Navbar /><Bcg name={''} images={""} /><Loading /></>)
      } else {
return(
        <div>
            <Navbar />
            <Bcg  name={room.name} images={room.images} />
            <div className="user-container">
                    <Title title={`Book ${room.name} Room`}/>
                    <form className="user-form" onSubmit={()=>this.handleSubmit(room)}>
                        <div className="form group form-icon">
                            <FaBed className="user-form-icon"/>
                        </div>
                        {this.state.error? <Message status="error" message={this.state.error} />:''}
               {this.state.success? <><Message status="success" message={this.state.success} />
              </>:''}
                        <div className="form-group">
                            <div className="dates">
                                    <div className="date">
                                    <label htmlFor="arrivalDate">Arrival Date: </label>
                                       <DatePicker className="date-picker"id = "arrivalDate" name="arrivalDate" selected={this.state.arrivalDate} onChange={this.onChangeArrivalDate}/> 
                                    </div>
                                    <div className="date">
                                    <label htmlFor="departureDate">Departure Date: </label> 
                                        <DatePicker className="date-picker" id="departureDate" name="departureDate" selected={this.state.departureDate} onChange={this.onChangeDepartureDate}/>
                                    </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="notes">Extra notes:</label>
                            <textarea className="form-control" id="notes" value ={this.state.notes}name="notes" rows='10' onChange ={this.onChangeNotes}/>

                        </div>
                        
                        <div className="form-group user-submit">
                            
                            <input type="submit" className =" btn-primary" value="Book room"/>
                        </div>
                    </form>
                    </div>
        </div>
      
        )}
 }

}
export default CreateBooking;


const Bcg = (props)=>{

    return(
    <StyledHero hero="roomsHero" img={props.images[0] || defaultBcg}>
            <Banner title={`${props.name} room`}>
           <Link to="/rooms" className='btn-primary'>Back to rooms</Link>
            </Banner>
            
        </StyledHero>)

}

