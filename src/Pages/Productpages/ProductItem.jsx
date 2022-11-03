import React from "react";
import "./productpages.css";

export const ProductItem = (props) => {

  return(
    <div className="productGridItem">
      <img src={props.photo} alt="productphoto"/>
      <div> {props.productName} </div>
    </div>
  );
}

export default ProductItem;