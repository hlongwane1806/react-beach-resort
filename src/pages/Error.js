import React from'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Error =()=>{
    return(<div><Navbar />
    <Hero>
        <Banner title ="404" subtitle="Page not found">
            <Link to="/" className="btn-primary">Return Home</Link>
        </Banner>
    </Hero></div>)
}

export default Error;