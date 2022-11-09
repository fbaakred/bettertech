import React from "react";
import "./productpages.css";
import { MacBookPro } from "../../Images";
import { useRecoilState } from "recoil";
import { itemsToCompare } from "../../Recoil/Atoms/itemsToCompare";

export const ProductItem = (props) => {

    const [selectedItems, setSelectedItems] = useRecoilState(itemsToCompare);

    const product = props.product;

    const removeItem = () => { 
        const items = selectedItems.filter(item => item !== product);
        setSelectedItems(items);
    }

    return (
        <div>
            <div className="productGridItem">
                <img src={MacBookPro} alt="productphoto" />
                <div> {product.name} </div>
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