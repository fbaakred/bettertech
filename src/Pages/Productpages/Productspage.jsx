import React from "react";
import "./productpages.css";
import { db } from "../../firebase";
import ProductItem from "./ProductItem";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import CompareItemsDrawer from "./CompareItemsDrawer";

const Productspage = (props) => {

    const [state, setState] = useState([]);
    const [sortType, setSortType] = useState("default");
    const [sustFilter, setSustFilter] = useState("default");
    const [isReset, setReset] = useState(false);
    const products = useRef([]);
    const productsStatic = useRef([]);
    const productsDynamic = useRef([]);
    const prevFiltered = useRef(false);
    const prevFilteredAndSorted = useRef(false);
    const didMountRef = useRef(false);
    const selectSortingRef = useRef(null);
    const selectFilterRef = useRef(null);

    useEffect(() => {
        // empty array 
        // reset required since Laptops, Smartphones and Computers use the same Component
        products.current = [ ];

        // fetch data
        getDocs(collection(db, props.type)).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                products.current.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setState(products.current);
            productsStatic.current = products.current;
            productsDynamic.current = products.current;
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);

    useEffect(() => {

        if (sortType !== "default") {
            const productCopy = state;
            const productCopyFiltered = productsStatic.current;

            if (sortType === "lowhigh") {
                const sorted = [...productCopy].sort((a, b) => (a.price1 - b.price1));
                setState(sorted);
                if (prevFiltered.current === true) {
                    const sortedForFiltered = [...productCopyFiltered].sort((a, b) => (a.price1 - b.price1));
                    productsDynamic.current = sortedForFiltered;
                    prevFilteredAndSorted.current = true;
                } else {
                    productsStatic.current = sorted;
                }
            };

            if (sortType === "highlow") {
                const sorted = [...productCopy].sort((a, b) => (b.price1 - a.price1));
                setState(sorted);
                if (prevFiltered.current === true) {
                    const sortedForFiltered = [...productCopyFiltered].sort((a, b) => (b.price1 - a.price1));
                    productsDynamic.current = sortedForFiltered;
                    prevFilteredAndSorted.current = true;
                } else {
                    productsStatic.current = sorted;
                }
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortType]);

    useEffect(() => {

        if (sustFilter !== "default") {
            let productCopy = [];
            if (prevFilteredAndSorted.current === true) {
                productCopy = productsDynamic.current;
                prevFilteredAndSorted.current = false;

            } else {
                productCopy = productsStatic.current;
            }
            const filtered = productCopy.filter(obj => {
                return obj.co2score === sustFilter;
            });
            setState(filtered);
            prevFiltered.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sustFilter]);

    useEffect(() => {

        if (didMountRef.current) {
            setState(products.current);
            setSortType("default");
            setSustFilter("default");
            selectSortingRef.current.selectedIndex = 0;
            selectFilterRef.current.selectedIndex = 0;

        } else {
            didMountRef.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReset]);

    return (
        <div className="productsPage">
            <div className="sortFilterBar">
                <select ref={selectSortingRef} className="selections" onChange={(e) => setSortType(e.target.value)}>
                    <option value="default">Sort By Price</option>
                    <option value="lowhigh">Price: Low-High</option>
                    <option value="highlow">Price: High-Low</option>
                </select>
                <select ref={selectFilterRef} className="selections" onChange={(e) => setSustFilter(e.target.value)}>
                    <option value="default">Filter By CO2-Score</option>
                    <option value="A" style={{ backgroundColor: "#63BE7B" }}>Category A</option>
                    <option value="B" style={{ backgroundColor: "#8BC97D" }}>Category B</option>
                    <option value="C" style={{ backgroundColor: "#F9E983" }}>Category C</option>
                    <option value="D" style={{ backgroundColor: "#FB9F76" }}>Category D</option>
                    <option value="E" style={{ backgroundColor: "#F8696B" }}>Category E</option>
                </select>
                <button className="resetButton" onClick={() => setReset(!isReset)}>Reset All Filters</button>
            </div>
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