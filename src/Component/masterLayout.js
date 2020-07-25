import React, { Component, Fragment } from 'react';
import Home from './Home/index';
import './../css/_reset.less';

class MasterLayout extends Component {

    render() {
        return (
            <Fragment>
                <Home />
            </Fragment>
        )
    }
}

export default MasterLayout;