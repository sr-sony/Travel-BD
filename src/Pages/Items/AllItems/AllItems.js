import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

const AllItems = () => {
    const [items, setItems] = useState([]);
    console.log(items)

    useEffect(()=>{
        fetch('http://localhost:5000/allitems')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text text-center my-8 '>Travel With me and explore the world.</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-6'>
                {
                     items.map(item=><ItemCard
                     key={item._id}
                     item={item}
                     ></ItemCard>)
                }
            </div>
        </div>
    );
};

export default AllItems;