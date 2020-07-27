import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './rightbar';
import AboutUs from './../About/index';
import Portfolio from './../Portfolio/index';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/portfolio' component={Portfolio} />
    </Switch>
)

export default Main
