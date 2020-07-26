import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './rightbar';
import AboutUs from './../About/index';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutus' component={AboutUs} />
    </Switch>
)

export default Main
