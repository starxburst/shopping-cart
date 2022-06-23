import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../style/ItemDetail.css';

function ItemDetail(props) {

    const { addToCartList } = props;
    let { id } = useParams();
    const [item, setItem] = useState({});
    const [isBusy, setBusy] = useState(true);

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const item = await data.json();
        console.log(item);
        setItem(item);
        setBusy(false);
    }
    
    return (        


        isBusy ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isBusy}
        >
            <CircularProgress color="inherit" />
        </Backdrop>:

        <div className="item-detail-container">
            <div className="item-image-container">
                <img className="item-image" src={item.image} alt={item.title}/>
            </div>
            <div className="detail-container">
                <h1>{item.title}</h1>
                <h2 className="item-description">{item.description}</h2>
                <div className="purchase-container-all">
                    <div className="purchase-container">
                        <h3>{`${item.price} USD`}</h3>
                        <div className="quantity-controller">
                        <TextField
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            color="warning"
                            focused                            
                            sx={{ input: { color: "white" } }}
                            inputProps={{
                                id: 'quantity',
                            }}
                            />
                        </div>
                    </div>
                    <Button variant="contained"
                        onClick={() => {
                            const quantity = document.getElementById('quantity').value;
                            addToCartList(item, quantity);
                          }}>Add to Cart!</Button>
                    
                </div>                
            </div>
        </div>
        
    )
}

export default ItemDetail;