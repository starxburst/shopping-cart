import React from "react";
import '../style/Cart.css'
import CartDetail from "./CartDetail";

function Cart(props) {

    const { cartList, deleteItem } = props;
    
    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th className="table-product-image"></th>
                    <th className="table-product-title">Product</th>
                    <th className="table-product-price">Price</th>
                    <th className="table-product-quantity">Quantity</th>
                    <th className="table-product-subtotal">Subtotal</th>
                    <th className="table-product-delete"></th>
                </tr>
                <CartDetail cartList={cartList} deleteItem={deleteItem}/>
            </thead>
        </table>
    )
}

export default Cart;