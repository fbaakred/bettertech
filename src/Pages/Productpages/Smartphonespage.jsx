import React from "react";
import "./productpages.css";
import { db } from "../../firebase";
import { doc, getDocs, collection } from "firebase/firestore";
import ProductItem from "./ProductItem";

const Smartphonespage = () => {

    const products = [];

    getDocs(collection(db, "laptops")).then((querySnapshot) => {
        console.log("Database Objects Found!")
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            products.push({
                ...doc.data(),
                id: doc.id
            });
        });
    })

    return (
        <div>
            <div className="pageHeadline"> Products: </div>
            <div className="productGridContainer">
                { products.map((obj) => (
                    <ProductItem
                        productName={obj.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Smartphonespage;