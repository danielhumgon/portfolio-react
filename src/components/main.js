import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const baseUrl = process.env.PUBLIC_URL;

const Main = () => (
    <Switch>
        <Route exact path={baseUrl + "/"} component={LandingPage} />
        <Route path={baseUrl + "/about"} component={About} />
        <Route path={baseUrl + "/portfolio"} component={Portfolio} />
        <Route path={baseUrl + "/contact"} component={Contact} />
    </Switch>
    
);



export default Main;