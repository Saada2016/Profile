import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Event from './components/Event';
import Contact from './components/Contact';


const CustomRoutes = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Event" component={Event}/>
                <Route path="/Contact" component={Contact}/>
            </div>
        </Router>
    )}

export default CustomRoutes;