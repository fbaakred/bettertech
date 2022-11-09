import React from 'react'
import "./homepage.css";
import BalloonLight  from "../../Components/BalloonLight";
import BalloonDark  from "../../Components/BalloonDark";
import Trees from "../../Components/Trees";
import LightBulb from "../../Components/LightBulb";
import Wave from "../../Components/Wave";
import BLogo from "../../Components/BLogo";

const Homepage = () => {
    return (
        <div className={"container"}>
            <div className={"firstSubContainer"}>
                <div className={"balloonContainer"}>
                    <div />
                    <div>
                        <BalloonLight width={116} height={173}/>
                    </div>
                    <div>
                        <BalloonDark width={142} height={212}/>
                    </div>
                </div>
                <div className={"treeContainer"}>
                    <Trees width={1018} height={490}/>
                </div>
            </div>
            <div className={"secondSubContainer"}>
                <div className={"lightBulbAndWaveContainer"}>
                    <LightBulb width={319} height={476}/>
                </div>

                <div className={"textContainer"}>
                    <div>
                        <div className={"infoTextTitle"}>
                            <BLogo width={36} height={71}/>
                            ecause together we can make the world a
                        </div>
                        <div className={"infoTextTitle"}>
                            <BLogo width={36} height={71}/>
                            etter place to live in!
                        </div>
                    </div>
                    <div className={"infoText"}>
                        We are BetterTech! We honor our clients’ trust in us to help them with choosing more eco-friendly
                        products. Here at BetterTech, we use scientific methods to evaluate the CO2 impact of each tech
                        product and offer a viable comparison base which makes it easy for our customers to make their
                        ethical purchase decision.
                    </div>
                </div>

            </div>
            <div className={"lightBulbAndWaveContainer"}>
                <Wave width={"100%"} height={284}/>
            </div>
        </div>
    )
}

export default Homepage;