import { React, useState, useEffect } from "react";
import "./productpages.css";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import itemsToCompare from "../../Recoil/Atoms/itemsToCompare";
import { Additem } from "iconsax-react";
import { getBackgroundColor } from "../../utils";
import { getCo2ScoreIcon } from "../../Icons/Co2Scores";
import { Link } from "react-router-dom";

export const ProductItem = (props) => {

    const [imgURL, setImgUrl] = useState('');
    const [selectedItems, setSelectedItems] = useRecoilState(itemsToCompare);

    const product = props.product;

    const removeItem = () => { 
        const items = selectedItems.filter(item => item.name !== product.name);
        setSelectedItems(items);
    }

    useEffect(() => {
        getDownloadURL(ref(storage, product.id + '.png')).then((url) => {
            setImgUrl(url);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="itemContainer">
            <div className="productGridItem" style={{backgroundColor: getBackgroundColor(product.co2score)}}>
                <Link to={product.name.replace(/ /g, "_")}>
                    <div className="productInfo">
                        <div className="co2ScoreIcon">{getCo2ScoreIcon(product.co2score, "80", "80")}</div>
                        <img src={imgURL} alt="productphoto" />
                        <div className="boldProduct"> {product.name} </div>
                        <div className="productText">
                            {product.name} ({product.displaycm}cm / {product.displayinch}"), {product.cpu}, {product.ram}GB RAM, {product.ssd}GB SSD
                        </div>
                        <div style={{ paddingBottom: "0.5em", fontWeight: "bold" }}> {product.price1} € </div>
                    </div>
                </Link>
                <div>
                    {selectedItems.find(item => item.id === product.id) ?
                    <button className="removeFromCompareButton" onClick={() => removeItem()}>
                        Remove
                    </button>
                    :
                    <button className="addToCompareButton" onClick={() => setSelectedItems([...selectedItems, product])}>
                        <Additem></Additem>
                        <div> Compare Product </div>
                    </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductItem;