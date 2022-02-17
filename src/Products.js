import React, { useState } from "react";
import logo from "./logo.svg";
import "./style.css";

//create product obj

const Product = ({ itemName, price }) => {
  return (
    <>
      <h3>{itemName}</h3>
      <p>${price}</p>
      <button className="cartButton">Add to Beach Bag</button>
    </>
  );
};

//add to lab
const ProductLab = () => {
  //add item
  //add Price

  // const createProduct = (event) => {
  //   event.preventDefault()
  //   const product = {item, price}
  //
  // }
  return (
    <form>
      <label> Product Name </label>
      <input type="text" />

      <label> Product Price </label>
      <input type="number" />

      <button>Add to my Lab</button>
    </form>
  );
};

//build out products list
const ProductsList = () => {
  const [products, setProducts] = useState([
    { id: 1, item: "bikini 1", price: 0 },
    { id: 2, item: "bikini 2", price: 0 },
    { id: 3, item: "bikini 3", price: 0 },
  ]);

  return (
    <>
      {products.map((p) => (
        <Product key={p.id} itemName={p.item} price={p.price} />
      ))}
    </>
  );
};
export default ProductsList;
