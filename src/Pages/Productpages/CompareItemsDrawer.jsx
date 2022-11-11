import { React, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getDownloadURL, ref } from "firebase/storage";
import itemsToCompare from "../../Recoil/Atoms/itemsToCompare";
import { Link } from 'react-router-dom';
import { storage } from "../../firebase";
import { getBackgroundColor } from "../../utils";

const DrawerItem = (props) => {

  const [compareItems, setCompareItems] = useRecoilState(itemsToCompare);
  const [imgURL, setImgUrl] = useState('');

  const product = props.item;

  useEffect(() => {
    getDownloadURL(ref(storage, product.id + '.jpg')).then((url) => {
        setImgUrl(url);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compareItems]);

  const removeItem = () => {    
    const items = compareItems.filter(item => item.name !== product.name); 
    setCompareItems(items);
  }

  return (
    <div className="drawerItem" style={{backgroundColor: getBackgroundColor(product.co2score)}}>
      <img src={imgURL} alt="productphoto" height={"100px"} width={"140px"}/>
      <div> {product.name} </div>
      <button className="drawerItemButton" onClick={removeItem}> Remove </button>
    </div>
  );
}

const CompareItemsDrawer = () => {
  const [selectedItems, setSelectedItems] = useRecoilState(itemsToCompare);
  return (
    selectedItems.length === 0 ? 
      <></> 
      :
      <div>
        <div style={{height: "120px"}}></div>
        <div className="drawerOpen">
          <div className='drawerContent'>
            {selectedItems.map((item, key) => (
              <DrawerItem key={key} item={item}/>
            ))}
          </div>
          <div className='drawerButtons'>
            <button onClick={() => setSelectedItems([])}> Remove all chosen items </button>
            <Link to="/compare" className="navbaritem"> 
              <button> Compare </button>
            </Link>
          </div>
        </div>
      </div>
    
  );
}
export default CompareItemsDrawer;