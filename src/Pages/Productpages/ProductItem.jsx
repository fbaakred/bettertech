import React from "react";
import "./productpages.css";
import { MacBookPro } from "../../Images";
import { useRecoilState } from "recoil";
import { itemsToCompare } from "../../Recoil/Atoms/itemsToCompare";

export const ProductItem = (props) => {

    const [selectedItems, setSelectedItems] = useRecoilState(itemsToCompare);

    const removeItem = () => { 
        const items = selectedItems.filter(item => item !== props.productKey);
        setSelectedItems(items);
    }

    return (
        <div>
            <div className="productGridItem">
                <img src={MacBookPro} alt="productphoto" />
                <div> {props.productName} </div>
                {selectedItems.includes(props.productKey) ?
                <button className="removeFromCompareButton" onClick={removeItem}>
                    Remove
                </button>
                :
                <button className="addToCompareButton" onClick={() => setSelectedItems([...selectedItems, props.productKey])}>
                    Add
                </button>
                }
            </div>
        </div>
    );
}

export default ProductItem;