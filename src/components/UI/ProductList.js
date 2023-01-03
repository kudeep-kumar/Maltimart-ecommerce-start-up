import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({data}) => {
  return (
    <>
    {data.map(items=> (
      <ProductCard item = {items}/>

    ))}
     
    </>
  );
};

export default ProductList;
