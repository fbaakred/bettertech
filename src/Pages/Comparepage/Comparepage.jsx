import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRecoilValue } from "recoil";
import itemsToCompare from "../../Recoil/Atoms/itemsToCompare";
import { Back } from "iconsax-react";
import { Link } from "react-router-dom";
import CompareItem from "./CompareItem";
import "./comparepage.css";

const Comparepage = () => {

    const selectedItems = useRecoilValue(itemsToCompare);

    return (
        <div className="comparePage">
            <div className="topOfPage">
                <Link to="/laptops">
                    <Back size={40} style={{ paddingLeft: "0.5em", paddingTop: "0.3em" }} />
                </Link>
                <div className="compareHeadline"> Compare Products </div>
            </div>
            <Tabs className="Tabs">
                <TabList>
                    <Tab> General Information </Tab>
                    <Tab> Product Sustainability </Tab>
                    <Tab> Technical Details </Tab>
                </TabList>
                <TabPanel>
                    <div className="compareView">
                        <div className="rowNames">
                            <div style={{ paddingTop: "1.1em", paddingBottom: "0.5em" }}>Brand</div>
                            <div style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>Product Type</div>
                            <div style={{ paddingTop: "3.8em", paddingBottom: "3.8em" }}>CO2 Score</div>
                            <div style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>CO2 Footprint</div>
                            <div style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>Price</div>
                        </div>
                        {selectedItems.map((obj, key) => (
                            <CompareItem
                                key={key}
                                product={obj}
                                tab="general"
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="compareView">
                        <div className="rowNames">
                            <div style={{ paddingTop: "1.1em", paddingBottom: "0.5em" }}>Average Lifetime</div>
                            <div style={{ paddingTop: "0.3em", paddingBottom: "0.5em" }}>Energy Efficiency (TEC)</div>
                            <div style={{ paddingTop: "0.6em", paddingBottom: "0.5em" }}>To Put It In A Nutshell</div>
                            <div style={{ paddingTop: "27em"}}>CO2 Breakdown Diagram</div>
                        </div>
                        {selectedItems.map((obj, key) => (
                            <CompareItem
                                key={key}
                                product={obj}
                                tab="psustainability"
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="compareView">
                        <div className="rowNames">
                            <div style={{ paddingTop: "2.4em" }}>Display Resolution</div>
                            <div style={{ paddingTop: "2.1em" }}>Display Size</div>
                            <div style={{ paddingTop: "2em" }}>CPU</div>
                            <div style={{ paddingTop: "2em" }}>RAM</div>
                            <div style={{ paddingTop: "2em" }}>SSD</div>
                            <div style={{ paddingTop: "2em" }}>Operating System</div>
                        </div>
                        {selectedItems.map((obj, key) => (
                            <CompareItem
                                key={key}
                                product={obj}
                                tab="technical"
                            />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Comparepage;