import { React, useState } from "react";
import "./productpages.css";
import { storage } from "../../firebase";
import { useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import { itemsToCompare } from "../../Recoil/Atoms/itemsToCompare";

export const ProductItem = (props) => {

    const [imgURL, setImgUrl] = useState('');

    useEffect(() => {
        getDownloadURL(ref(storage, props.id + '.jpg')).then((url) => {
            setImgUrl(url);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [selectedItems, setSelectedItems] = useRecoilState(itemsToCompare);

    const product = props.product;

    const removeItem = () => { 
        const items = selectedItems.filter(item => item !== product);
        setSelectedItems(items);
    }

    return (
        <div className="itemContainer">
            <div className="productGridItem">
                <img src={imgURL} alt="productphoto" />
                    <div className="boldProduct"> {props.id} </div>
                    <div> {props.price} € </div>
                    <div className="greenCO2"> CO2: {props.footprint} Kg </div>
                    {selectedItems.find(item => item.name === product.name) ?
                <button className="removeFromCompareButton" onClick={removeItem}>
                    Remove
                </button>
                :
                <button className="addToCompareButton" onClick={() => setSelectedItems([...selectedItems, product])}>
                    Add
                </button>
                }
            </div>
        </div>
    );
}

export default ProductItem;