import React,{useContext} from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../assests/context/shop-context";
import {CartItem} from "./cart-item";
import "./cart.css"
import {useNavigate} from "react-router-dom";

export const Cart = () => {
const { cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
const totalAmount = getTotalCartAmount();

 const navigate = useNavigate();


    return (
  <div className="cart">
    <div>
        <h1>
            Your Cart Items
        </h1>
    </div>
    <div className="cart">
        {PRODUCTS.map((Product) => {
            if (cartItems[Product.id ] !== 0 ){
                return <CartItem  data ={Product}/>;
            }

        })}
    </div>
     {totalAmount > 0 ? (
        <div className="checkout">
             
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
           <button>checkout</button>
    </div>
     ) : (
        <h1>Your Cart is Empty </h1>
     )}
</div>
    );
      };

  