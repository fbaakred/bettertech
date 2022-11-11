import { React, useState, useEffect } from "react";
import "./productpages.css";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import itemsToCompare from "../../Recoil/Atoms/itemsToCompare";

export const ProductItem = (props) => {

    const [imgURL, setImgUrl] = useState('');
    const [selectedItems, setSelectedItems] = useRecoilState(itemsToCompare);

    const product = props.product;

    const removeItem = () => { 
        const items = selectedItems.filter(item => item.name !== product.name);
        setSelectedItems(items);
    }

    useEffect(() => {
        getDownloadURL(ref(storage, product.id + '.jpg')).then((url) => {
            setImgUrl(url);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="itemContainer">
            <div className="productGridItem">
                <img src={imgURL} alt="productphoto" />
                <div className="boldProduct"> {product.name} </div>
                <div> {product.price1} € </div>
                <div className="greenCO2"> CO2: {product.co2footprint} Kg </div>
                {selectedItems.find(item => item.id === product.id) ?
                <button className="removeFromCompareButton" onClick={() => removeItem()}>
                    Remove
                </button>
                :
                <button className="addToCompareButton" onClick={() => setSelectedItems([...selectedItems, product])}>
                    Compare
                </button>
                }
            </div>
        </div>
    );
}

export default ProductItem;