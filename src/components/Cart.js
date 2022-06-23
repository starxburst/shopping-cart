import React from "react";
import '../style/Cart.css'
import CartDetail from "./CartDetail";

function Cart(props) {

    const { cartList, deleteItem, totalCost } = props;
    
    return (
        cartList[0]?
        <div>
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
            <div className="total-cost-container">Total Cost: $ {totalCost}</div>
        </div>:

        <div className="cart-empty-container">
            <h1>Your cart is empty!</h1>
            <h2>Go and buy something</h2>

        </div>
    )
}

export default Cart;