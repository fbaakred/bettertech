import React from "react";
//import { Invisible, Lenovo, MacBookPro } from "../../Images";
import { useRecoilState } from "recoil";
import CompareItem from "./CompareItem";
import "./comparepage.css";
import { itemsToCompare } from "../../Recoil/Atoms/itemsToCompare";

/*
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
*/

const Comparepage = () => {  

  //const products = [rowNames, obj1, obj2];

  const [selectedItems] = useRecoilState(itemsToCompare);
  
  return(
    <div>
      <div className="compareHeadline"> Compare </div>
      <div className="compareView">
        <div className="statsToCompare">
          {Object.keys(selectedItems[0]).map((value, key) => (
            value === "nameArray" ? <></> :
            <div key={key} className="statDiv">
              {value}
            </div>
          ))}
        </div>
        {selectedItems.map((obj, key) => (
          <CompareItem 
            key={key}
            product={obj}
          /> 
        ))}
      </div>
    </div>
  );
}

export default Comparepage;