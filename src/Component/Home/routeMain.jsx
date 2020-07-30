import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './rightbar';
import AboutUs from './../About/index';
import Portfolio from './../Portfolio/index';
import ContactUs from './../Contact/index';
import Skills from './../Tech/index';
import Blog from './../Blog/index';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/skills' component={Skills} />
        <Route path='/blog' component={Blog} />
    </Switch>
)

export default Main
