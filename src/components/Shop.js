import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import '../style/Shop.css'

function Shop() {

    const [items, setItems] = useState([]);
    const [isBusy, setBusy] = useState(true);

    useEffect(() => {
        fetchItems();
    }, []);


    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        console.log(items);
        setItems(items);
        setBusy(false);
    }

    return (
        isBusy ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isBusy}
        >
            <CircularProgress color="inherit" />
        </Backdrop>:
        
        <div className="shop-container">
            <ProductCard items={items}/>
        </div>
    )
}

export default Shop;