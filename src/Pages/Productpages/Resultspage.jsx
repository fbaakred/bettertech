import React from "react";
import "./productpages.css";
import { db } from "../../firebase";
import ProductItem from "./ProductItem";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const Resultspage = () => {

    const [state, setState] = useState([]);
    const [sortType, setSortType] = useState("default");
    const [sustFilter, setSustFilter] = useState("default");

    const { search } = window.location;
    const searchQuery = new URLSearchParams(search).get('s');
    const q1 = query(collection(db, "laptops"), where("name", "==", searchQuery));
    const q2 = query(collection(db, "smartphones"), where("name", "==", searchQuery));
    const queries = [q1, q2];

    useEffect(() => {
        const products = [];

        queries.forEach((q) => {
            getDocs(q).then((querySnapshot) => {
                console.log("Database Objects Found:")
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    products.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });
            })
        })
        setState(products);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

        const productCopy = state;

        if (sortType === "lowhigh") {
            const sorted = [...productCopy].sort((a, b) => (a.price1 - b.price1));
            setState(sorted);
        };

        if (sortType === "highlow") {
            const sorted = [...productCopy].sort((a, b) => (b.price1 - a.price1));
            setState(sorted);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortType]);

    useEffect(() => {

        const productCopy = state;
        const filtered = productCopy.filter(obj => {
            return obj.category === sustFilter;
        });
        setState(filtered);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sustFilter]);

    return (
        <div>
            <div className="sortFilterBar">
                <select className="selections" onChange={(e) => setSortType(e.target.value)}>
                    <option value="default">Sort By Price</option>
                    <option value="lowhigh">Price: Low-High</option>
                    <option value="highlow">Price: High-Low</option>
                </select>
                <select className="selections" onChange={(e) => setSustFilter(e.target.value)}>
                    <option value="default">Filter By Sustainability</option>
                    <option value="catA">Category A</option>
                    <option value="catB">Category B</option>
                    <option value="catC">Category C</option>
                    <option value="catD">Category D</option>
                    <option value="catE">Category E</option>
                </select>
            </div>
            <div className="productGridContainer">
                {state.map((obj) => (
                    <ProductItem
                        key={obj.id}
                        id={obj.id}
                        productName={obj.name}
                        price={obj.price1}
                        footprint={obj.co2footprint}
                    />
                ))}
            </div>
        </div>
    );
}


export default Resultspage;