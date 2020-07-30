import React, {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
    
    useEffect(()=> {
        fetchItems();
    },[])

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/shop/get')
        const items = await data.json();
        console.log(items.items);

        setItems(items.items);
    }
    
    return(
        <div>
            <h1>Items from Fortnite Store</h1>
            <p>Retrieved using Fortnite API.</p>
            {items.map(item=>(
                <h1 key={item.itemid}>
                <Link to={`shop/${item.itemid}`}>{item.name}</Link>
                </h1>
            ))}
        </div>
    )
}

export default Shop;