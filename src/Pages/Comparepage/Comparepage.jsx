import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import CompareItem from "./CompareItem";
import "./comparepage.css";
import itemsToCompare from "../../Recoil/Atoms/itemsToCompare";
import showTechSpecs from "../../Recoil/Atoms/showTechSpecs";

const Comparepage = () => {  

  const selectedItems = useRecoilValue(itemsToCompare);
  const [showSpecs, setShowSpecs] = useRecoilState(showTechSpecs);
  
  return(
    <div>
      <div className="compareHeadline"> Compare </div>
      <div className="compareView">
        <div className="statsToCompare">
          <div> CO2 Footprint</div>
        </div>
        {selectedItems.map((obj, key) => (
          <CompareItem 
            key={key}
            product={obj}
          /> 
        ))}
      </div>
      <button className="techButton" onClick={() => setShowSpecs(!showSpecs)}> 
        {showSpecs ? "Hide Tech Specs" : "Show Tech Specs"} 
      </button>
    </div>
  );
}

export default Comparepage;