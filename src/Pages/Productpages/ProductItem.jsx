import { React, useState } from "react";
import "./productpages.css";
import { storage } from "../../firebase";
import { useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";

export const ProductItem = (props) => {

    const [imgURL, setImgUrl] = useState('');

    useEffect(() => {
        getDownloadURL(ref(storage, props.id + '.jpg')).then((url) => {
            setImgUrl(url);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="itemContainer">
            <div className="productGridItem">
                <img src={imgURL} alt="productphoto" />
                    <div className="boldProduct"> {props.id} </div>
                    <div> {props.price} € </div>
                    <div className="greenCO2"> CO2: {props.footprint} Kg </div>
            </div>
        </div>
    );
}

export default ProductItem;