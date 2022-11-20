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
        <div className={"homepageContainer"}>
            <div className={"whiteBackgroundContainer"}>
                <div className={"infoTextContainer"}>
                    <div className={"infoTextTitleContainer"}>
                        <div className={"infoTextTitleBlack"}>
                            To build the sustainability bridge to the future,
                        </div>
                        <div className={"infoTextTitleBlack"}>
                            we need you. Every action matters!
                        </div>
                    </div>
                    <div className={"infoTextBlack"}>
                        We are here to aid with your responsibility towards the planet.
                        Trust us in guiding you through trusted brands.
                    </div>
                </div>
                <div className={"treesAndBalloonsContainer"}>
                    <div className={"balloonsContainer"}>
                        <div />
                        <div>
                            <BalloonLight width={116} height={173}/>
                        </div>
                        <div>
                            <BalloonDark width={142} height={212}/>
                        </div>
                    </div>
                    <div className={"treesContainer"}>
                        <Trees width={"100%"} height={"auto"}/>
                    </div>
                </div>
            </div>
            <div className={"greenBackgroundContainer"}>
                <div className={"lightBulbContainer"}>
                    <LightBulb width={319} height={476}/>
                </div>
                <div className={"infoTextContainer"}>
                    <div className={"infoTextTitleContainer"}>
                        <div className={"infoTextTitleWhite"}>
                            <BLogo width={36} height={71}/>
                            ecause together we can make the world a
                        </div>
                        <div className={"infoTextTitleWhite"}>
                            <BLogo width={36} height={71}/>
                            etter place to live in!
                        </div>
                    </div>
                    <div className={"infoTextWhite"}>
                        We are BetterTech! We honor our clients’ trust in us to help them with choosing more eco-friendly
                        products. Here at BetterTech, we use scientific methods to evaluate the CO<sub>2</sub> impact of each tech
                        product and offer a viable comparison base which makes it easy for our customers to make their
                        ethical purchase decision.
                    </div>
                </div>

            </div>
            <div className={"waveContainer"}>
                <Wave width={"100%"} height={284}/>
            </div>
        </div>
    )
}

export default Homepage;