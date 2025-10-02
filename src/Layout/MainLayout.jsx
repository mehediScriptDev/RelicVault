import React from 'react';
import Hero from '../Pages/Hero';
import Nav from '../Components/Nav/Nav';
import Home from '../Router/Pages/Home';

const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Hero></Hero>
            <Home/>
        </div>
    );
};

export default MainLayout;