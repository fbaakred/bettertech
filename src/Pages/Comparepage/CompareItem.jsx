import { React, useState, useEffect } from "react";
import "./compareItem.css";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { getCo2ScoreIcon } from "../../Icons/Co2Scores";
import { getBackgroundColor } from "../../utils";


const CompareItem = (props) => {

  const [imgURL, setImgUrl] = useState('');
  const [diagramURL, setDiagramUrl] = useState('');
  const product = props.product;

  useEffect(() => {
    getDownloadURL(ref(storage, product.id + '.jpg')).then((url) => {
      setImgUrl(url);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getDownloadURL(ref(storage, product.id + '_Diagram.png')).then((url) => {
      setDiagramUrl(url);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="compareItem" style={{ backgroundColor: getBackgroundColor(product.co2score) }}>
      <img src={imgURL} alt="productphoto" />
      <div style={{ fontWeight: "bold" }}> {product.name} </div>

      {props.tab === "general" &&
        <div>
          <div style={{ padding: "0.5em" }}> {product.brand} </div>
          <div style={{ padding: "0.5em" }}> {product.producttype} </div>
          {getCo2ScoreIcon(product.co2score)}
          <div style={{ padding: "0.5em" }}> {product.co2footprint} Kg </div>
          <div style={{ padding: "0.5em" }}> {product.price1} € </div>
        </div>
      }

      {props.tab === "psustainability" &&
        <div style={{ marginBottom: "0" }}>
          <div style={{ padding: "0.4em" }}> {product.lifetime} </div>
          <div style={{ padding: "0.5em" }}> {product.tec} kWh </div>
          <div style={{ paddingBottom: "3em" }}>
            <p >This product has a CO2 footprint approx. equivalent to driving</p>
            <h4 style={{ margin: "-0.5em" }}>{product.co2equi1} miles</h4>
            <p style={{ paddingBottom: "1em" }}>in a passenger car.</p>

            <p>10 of these products have a CO2 footprint approx. equal to what</p>
            <h4 style={{ margin: "-0.5em" }}>{product.co2equi2} acres</h4>
            <p style={{ paddingBottom: "1em" }}>of US forests can absorb in a year.</p>

            <p>100 of these products have a CO2 footprint about the same as the annual average carbon footprint of</p>
            <h4 style={{ margin: "-0.5em" }}>{product.co2equi3} people.</h4>
          </div>
          <img src={diagramURL} alt="productphoto" className="diagramIMG" />
        </div>
      }

      {props.tab === "bsustainability" &&
        <div className="brandTextContainer">
          <div style={{ paddingTop: "2em", height: "350px" }}>
            {product.sustproducts}
          </div>
          <div style={{ paddingTop: "2em", height: "270px" }}>
            {product.packaging}
          </div>
          <div style={{ paddingTop: "2em", height: "320px" }}>
            {product.energy}
          </div>
          <div style={{ paddingTop: "2em", height: "240px" }}>
            {product.co2offset}
          </div>
        </div>
      }

      {props.tab === "technical" &&
        <div>
          <div style={{ paddingTop: "2em" }}> {product.displayres} px </div>
          <div style={{ paddingTop: "2em" }}> {product.displayinch} inch </div>
          <div style={{ paddingTop: "2em" }}> {product.cpu} </div>
          <div style={{ paddingTop: "2em" }}> {product.ram} GB </div>
          <div style={{ paddingTop: "2em" }}> {product.ssd} GB </div>
          <div style={{ paddingTop: "2em" }}> {product.os} </div>
        </div>
      }
    </div>
  );
}

export default CompareItem;