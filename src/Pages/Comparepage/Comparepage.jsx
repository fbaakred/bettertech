import React from "react";
import { useRecoilValue} from "recoil";
import CompareItem from "./CompareItem";
import "./comparepage.css";
import { itemsToCompare } from "../../Recoil/Atoms/itemsToCompare";

const Comparepage = () => {  

  const selectedItems = useRecoilValue(itemsToCompare);
  
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
    </div>
  );
}

export default Comparepage;