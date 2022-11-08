import React from "react";
import "./productpages.css";
import { MacBookPro } from "../../Images";

export const ProductItem = (props) => {

    return (
        <div>
            <div className="productGridItem">
                <img src={MacBookPro} alt="productphoto" />
                <div className="boldProduct"> {props.id} </div>
                <div> {props.price} € </div>
                <div className="greenCO2"> CO2: {props.footprint} Kg </div>
            </div>
        </div>
    );
}

export default ProductItem;