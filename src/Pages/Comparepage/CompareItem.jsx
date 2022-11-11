import React from "react";
import "./compareItem.css";
import { MacBookPro } from "../../Images";

const CompareItem = (props) => {

  const product = Object.keys(props.product).filter(key =>
    key !== 'nameArray').reduce((obj, key) =>
    {
        obj[key] = props.product[key];
        return obj;
    }, {}
  );

  return(
    <div className="compareItem">
      <img src={MacBookPro} alt="productphoto" />
      {Object.values(product).map((value, key) => (
        <div key={key}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default CompareItem;