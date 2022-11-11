import { React, useState, useEffect } from "react";
import "./compareItem.css";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { getCo2ScoreIcon } from "../../Icons/Co2Scores";
import showTechSpecs from "../../Recoil/Atoms/showTechSpecs";
import { useRecoilValue } from "recoil";
import { getBackgroundColor } from "../../utils";


const CompareItem = (props) => {

  const [imgURL, setImgUrl] = useState('');

  const showSpecs = useRecoilValue(showTechSpecs);

  const product = props.product;

  useEffect(() => {
    getDownloadURL(ref(storage, product.id + '.jpg')).then((url) => {
        setImgUrl(url);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div className="compareItem" style={{backgroundColor: getBackgroundColor(product.co2score)}}>
      <img src={imgURL} alt="productphoto" />
      <div> {product.name} </div> 
      {getCo2ScoreIcon(product.co2score)}
      <div> {product.co2footprint} Kg </div> 
      <div>
        1 of these products has a footprint approx. equivalent to driving {product.co2equi1} miles in a passenger car.
      </div>
      <div>
        10 of these products have a footprint approx. equal to what {product.co2equi2} acres of US forests can absorb in a year.
      </div>
      <div>
        100 of these products have a footprint about the same as the annual average carbon footprint of {product.co2equi3} people
      </div>
      {showSpecs ?
      <>
        <div> {product.producttype} </div> 
        <div> {product.cpu} </div> 
        <div> {product.displayres} </div> 
        <div> {product.displayinch} </div> 
        <div> {product.os} </div> 
        <div> {product.price1} </div> 
        <div> {product.ram} </div> 
        <div> {product.ssd} </div> 
      </>
      :
      <></>
      }
    </div>
  );
}

export default CompareItem;