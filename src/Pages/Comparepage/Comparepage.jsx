import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import CompareItem from "./CompareItem";
import "./comparepage.css";
import itemsToCompare from "../../Recoil/Atoms/itemsToCompare";
import showTechSpecs from "../../Recoil/Atoms/showTechSpecs";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

const Comparepage = () => {  

  const selectedItems = useRecoilValue(itemsToCompare);
  const [showSpecs, setShowSpecs] = useRecoilState(showTechSpecs);
  
  return(
    <div className="comparePage">
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
      <div className="techButtonDiv">
        <button className="techButton" onClick={() => setShowSpecs(!showSpecs)}> 
          {showSpecs ? <ArrowUp2 /> : <ArrowDown2 />}
          {showSpecs ? "Hide Tech Specs" : "Show Tech Specs"} 
        </button>
      </div>
    </div>
  );
}

export default Comparepage;