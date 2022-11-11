import React from "react";
import "./compareItem.css";

const CompareItem = (props) => {

  //product type, brand, product name, price, co2 footprint, display size, display reoslution, processor, ram, ssd, os

  return(
    <div className="compareItem">
      <img src={props.photo} alt="productphoto"/>
      <div> {props.type} </div>
      <div> {props.brand} </div>
      <div> {props.productName} </div>
      <div> {props.co2Footprint} </div>
      {/*
      <div> {props.price} </div>
      <div> {props.displaySize} </div>
      <div> {props.displayResolution} </div>
      <div> {props.processor} </div>
      <div> {props.ram} </div>
      <div> {props.ssd} </div>
      <div> {props.os} </div>
      */}
    </div>
  );
}

export default CompareItem;