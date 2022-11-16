import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import CompareItem from "../Comparepage/CompareItem";
import { useEffect } from "react";

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
      <CompareItem product={product} tab={["general", "psustainability", "bsustainability", "technical"]}/>
    </div>
  );
}

export default DetailedProductPage;