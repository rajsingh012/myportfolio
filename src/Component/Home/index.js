import React from 'react';
import ThemeMode from './../themeMode';
import LeftBar from './leftBar';
import RightBar from './rightbar';

const Home = () => {
    return (
        <div className="homepage_container">
            <LeftBar />
            <RightBar />
            <ThemeMode />
        </div>
    )
}

export default Home;