import { React, useState, useEffect } from "react";
import "./compareItem.css";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { getCo2ScoreIcon } from "../../Icons/Co2Scores";

const CompareItem = (props) => {

  const [imgURL, setImgUrl] = useState('');

  const product = props.product;

  useEffect(() => {
    getDownloadURL(ref(storage, product.id + '.jpg')).then((url) => {
        setImgUrl(url);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div className="compareItem">
      <img src={imgURL} alt="productphoto" />
      {getCo2ScoreIcon(product.co2score)}
      <div> {product.co2footprint} Kg </div> 
    </div>
  );
}

export default CompareItem;