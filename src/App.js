import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import CreateBooking from './pages/CreateBooking';
import Bookings from './pages/Bookings';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import Error from './pages/Error';
import {AuthRoute} from './functions/AuthRoute';
import {ProtectedRoute} from './functions/ProtectedRoutes';


//<Switch> is for handling the error page

function App() {
  return (
    <Router>
      
      <Switch>
       
        <Route path ="/" exact component={Home}/>
        <Route path ="/rooms" exact component={Rooms} />
        <Route path ="/rooms/:slug" component={SingleRoom} />
        <ProtectedRoute path ="/book/:slug"exact component={CreateBooking} />
        <ProtectedRoute path ="/bookings"exact component={Bookings} />
        <AuthRoute path ="/login" component={ LoginUser} />
        <AuthRoute path ="/register" component={RegisterUser} />
        <Route  component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
