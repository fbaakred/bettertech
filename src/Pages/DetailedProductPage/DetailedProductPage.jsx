import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import CompareItem from "../Comparepage/CompareItem";
import { useEffect } from "react";
import "../Comparepage/comparepage.css";
import "./detailedProductPage.css";
import Car from "../../Icons/Car.jsx";
import Forest from "../../Icons/Forest.jsx";
import People from "../../Icons/People.jsx";
import LightBulb from "../../Components/LightBulb";

const DetailedProductPage = (props) => {

  const { productId } = useParams();

  const [product, setProduct] = useState();

  useEffect(()=> {
    const docRef = doc(db, "laptops", productId.replace(/_/g, " ").substr(productId.indexOf("_") + 1));
    getDoc(docRef).then((doc) => {
      console.log(doc.data())
      setProduct({...doc.data(), id: doc.id});
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    product &&
    <div>
      <div className="infoView">
        <div className="rowNames">
          <div style={{ paddingTop: "1.1em", paddingBottom: "0.5em" }}>Brand</div>
          <div style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>Product Type</div>
          <div style={{ paddingTop: "3.8em", paddingBottom: "3.8em" }}>CO2 Score</div>
          <div style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>CO2 Footprint</div>
          <div style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>Price</div>
        </div>
        <CompareItem product={product} tab="general" />
      </div>
      <div className="subHeader"> Product Sustainability </div>
      <div className="infoView">
        <div className="rowNames" style={{paddingTop: "1em"}}>
          <div style={{ paddingBottom: "0.5em" }}>Average Lifetime</div>
          <div style={{ paddingTop: "0.3em", paddingBottom: "0.5em" }}>Energy Efficiency (TEC)</div>
          <div style={{ paddingTop: "0.6em", paddingBottom: "0.5em" }}>To Put It In A Nutshell</div>
          <div style={{ paddingTop: "2.5em" }} >
          <Car width="auto" height="40"/>
          </div>
          <div style={{ paddingTop: "4.2em" }}>
          <Forest width="auto" height="60"/>
          </div>
          <div style={{ paddingTop: "4em" }}>
          <People width="auto" height="60"/>
          </div>
          <div style={{ paddingTop: "10em"}}>CO2 Breakdown Diagram</div>
        </div>
        <CompareItem product={product} tab="psustainability" hidePhoto={true}/>
      </div>
      <div className="subHeader"> Technical Details </div>
      <div className="infoView">
        <div className="rowNames"  style={{paddingTop: "2px"}}>
            <div style={{ paddingTop: "2.4em" }}>Display Resolution</div>
            <div style={{ paddingTop: "2.1em" }}>Display Size</div>
            <div style={{ paddingTop: "2em" }}>CPU</div>
            <div style={{ paddingTop: "2em" }}>RAM</div>
            <div style={{ paddingTop: "2em" }}>SSD</div>
            <div style={{ paddingTop: "2em" }}>Operating System</div>
        </div>
        <CompareItem product={product} tab="technical" hidePhoto={true}/>
      </div>
      <div className="subHeader"> Brand Sustainability </div>
      <div className="brandInfo">
        <LightBulb width={319} height={476}/>
        <div className="brandTextContainer">
          <div>
            {product.sustproducts}
          </div>
          <div>
            {product.packaging}
          </div>
          <div>
            {product.energy}
          </div>
          <div>
            {product.co2offset}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedProductPage;
