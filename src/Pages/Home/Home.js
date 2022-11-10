import React from 'react';
import { Link } from 'react-router-dom';
import AllItems from '../Items/AllItems/AllItems';
import Items from '../Items/Items/Items';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllItems></AllItems>
            <Link to='/services'>
                <button className='btn'>Visit More Places</button>
                </Link>
        </div>
    );
};

export default Home;