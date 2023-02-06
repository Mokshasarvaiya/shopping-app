import React,{useContext} from 'react';
import { ShopContext } from "../../assests/context/shop-context";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext);

    return (
    <div className="carItem">
        <img src={productImage}/>
        <div className="descripton">
           <p><h2>{productName}</h2> </p> 
           <p>${price}</p>
           <div className="countHandler"></div>
             <button onClick={ () => addToCart(id)}> + </button>
             <input value={cartItems[id]} 
             onChange ={(e) => updateCartItemCount(Number(e.target.value),id)}
              
              />  
             <button onClick={ () => removeFromCart(id)}> - </button>
        </div>
    </div>
 )
 }

