import React from "react";
import { Invisible, Lenovo, MacBookPro } from "../../Images";
import CompareItem from "./CompareItem";
import "./comparepage.css";

const rowNames = {
  photo: Invisible,
  type: "Type",
  brand: "Brand",
  productName: "Product name",
  co2Footprint: "CO2 footprint"
}

const obj1 = {
  photo: MacBookPro,
  type: "Computer",
  brand: "Apple",
  productName: "Macbook Pro 16",
  co2Footprint: 500
}

const obj2 = {
  photo: Lenovo,
  type: "Computer",
  brand: "Dell",
  productName: "XPS 17",
  co2Footprint: 400
}

const Comparepage = () => {
  

  const products = [rowNames, obj1, obj2];
  
  return(
    <div>
      <div className="compareHeadline"> Compare </div>
      <div className="compareView">
        {products.map((obj, key) => (
          <CompareItem 
            key={key}
            photo={obj.photo}
            type={obj.type}
            brand={obj.brand}
            productName={obj.productName}
            co2Footprint={obj.co2Footprint}
          /> 
        ))}
      </div>
    </div>
  );
}

export default Comparepage;