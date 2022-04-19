import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Map from '../Map/Map';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Genius Car Service</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Map></Map>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;