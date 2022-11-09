import React from "react";
import "./productpages.css";
import { db } from "../../firebase";
import ProductItem from "./ProductItem";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import CompareItemsDrawer from "./CompareItemsDrawer";

const Productspage = (props) => {

    const [state, setState] = useState([]);

    useEffect(() => {
        const products = [];
        getDocs(collection(db, props.type)).then((querySnapshot) => {
            console.log("Database Objects Found:")
            querySnapshot.forEach((doc) => {
                const unordered = {
                    ...doc.data(),
                    id: doc.id
                }
                const ordered = Object.keys(unordered).sort().reduce(
                    (obj, key) => { 
                      obj[key] = unordered[key]; 
                      return obj;
                    }, 
                    {}
                );
                console.log(ordered)
                products.push(ordered);
            });
            setState(products);
        })
    }, [props.type]);

    return (
        <div>
            <div className="pageHeadline"> Results </div>
            <div className="productGridContainer">
                {state.map((obj) => (
                    <ProductItem
                        key={obj.id}
                        product={obj}
                    />
                ))}
            </div>
            <CompareItemsDrawer />
        </div>
    );
}


export default Productspage;