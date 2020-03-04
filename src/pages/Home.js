import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms';
import Navbar from '../components/Navbar';

const Home =()=>{
    return(
            <>
            <Navbar />
    <Hero hero="roomsHero" children="I am the child">
            <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at R299">
                    <Link to="/rooms" className="btn-primary">Our rooms</Link>
            </Banner>
    </Hero>
    <Services />
    <FeaturedRooms/>
  
    </>)
}

export default Home;