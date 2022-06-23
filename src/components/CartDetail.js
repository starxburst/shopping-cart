import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../style/CartDetail.css'
import IconButton from '@mui/material/IconButton';import DeleteIcon from '@mui/icons-material/Delete';

function CartDetail(props) {

    const { cartList, deleteItem } = props;

    useEffect(() => {
        console.log(cartList);
    },[])

    return (
        cartList.map(item => {
            return (
                <tr>
                    <td>
                        <img src={item.image} alt={item.title}/>
                    </td>
                    <td>
                        <Link to={`/shop/${item.id}`} className="link">
                            <div>{item.title}</div>
                        </Link>
                    </td>
                    <td>$ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>$ {item.price*item.quantity}</td>
                    <td id={item.id}>
                        <IconButton
                            aria-label="delete"
                            color="secondary"
                            id={item.id}
                            onClick={(e) => {
                                deleteItem(e);
                            }}>
                            <DeleteIcon />
                        </IconButton>
                    </td>
                </tr>
            )
        })
    )
}

export default CartDetail;