import React from 'react';
import Navbar from '../components/header/navBar';
import Carousel from '../components/landingsection/carousel';
import Categories from '../components/landingsection/categories';
import Homeshop from '../components/landingsection/homeshop';
import Gastric from '../components/landingsection/gastric';
import Recentlyviewed from '../components/landingsection/Recentlyviewed';
import Lowersection from '../components/landingsection/lowersection';
import Footer from '../components/footer/footer';

 function Homepage() {
    

    return (
        <div>
            <Navbar />
            <Carousel />
            <Categories />
            <Homeshop />
            <Gastric />
            <Recentlyviewed />
            <Lowersection />
            <Footer />
            
        </div>
    )
}

export default Homepage;