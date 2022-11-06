import React from "react";
import "./productpages.css";
import { MacBookPro } from "../../Images";

export const ProductItem = (props) => {

    return (
        <div>
            <div className="productGridItem">
                <img src={MacBookPro} alt="productphoto" />
                <div> {props.productName} </div>
            </div>
        </div>
    );
}

export default ProductItem;