import React from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items/Items';
import Banner from './Banner/Banner';
import SliderImage from './SliderImage/SliderImage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Link to='/services'>
                <button className='btn'>Visit More Places</button>
                </Link>
        </div>
    );
};

export default Home;