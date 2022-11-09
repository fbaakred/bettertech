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
                console.log(doc.id, " => ", doc.data());
                products.push({
                    ...doc.data(),
                    id: doc.id
                });
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
                        productName={obj.name}
                        productKey={obj.id}
                    />
                ))}
            </div>
            <CompareItemsDrawer />
        </div>
    );
}


export default Productspage;