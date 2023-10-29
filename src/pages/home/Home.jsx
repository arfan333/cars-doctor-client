/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './services/Services';

const Home = () => {
    return (
        <div className='space-y-32'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;