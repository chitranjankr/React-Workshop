import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./assets/stylesheet/Product.css";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const getCart =  useSelector(state => state.cart.itemsList)
  const addToCart = () => {
    console.log(getCart)
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
