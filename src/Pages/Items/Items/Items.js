import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

const Items = () => {
    const [items, setItems] = useState([]);
    console.log(items)

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <div>
                <h1>Choose where you want to travel</h1>
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

export default Items;