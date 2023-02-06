import React, { useContext } from "react";
import { ShopContext } from "../../assests/context/shop-context";


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <h1>{productName}</h1>
        </p>
        <p><h1> ${price} </h1></p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};