import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ReactCardFlip from 'react-card-flip';
import card_back from '../CardItem/TestCard/card_back.png';
import GREEN_FRONT from "../CardItem/CardAssets/green_front.png";
import BLUE_FRONT from "../CardItem/CardAssets/blue_front.png";
import RED_FRONT from "../CardItem/CardAssets/red_front.png";
import PURPLE_FRONT from "../CardItem/CardAssets/purple_front.png";
import YELLOW_FRONT from "../CardItem/CardAssets/yellow_front.png";

import HoloCard from '../CardItem/HoloCard/HoloCard';
import ShatterCard from '../CardItem/ShatterCard/ShatterCard';
import NormalCard from '../CardItem/NormalCard/NormalCard';
import LegendaryCard from "../CardItem/LegendaryCard/LegendaryCard";

import cardFlipSfx from "../../assets/card_flip.wav";
import holoFlipSfx from "../../assets/nice.mp3";
import epicFlipSfx from "../../assets/found.mp3";
import legendaryFlipSfx from "../../assets/english_rare.mp3";
import useSound from 'use-sound';
import CardHandler from '../CardHandler/CardHandler';
// import ImageHandler from '../ImageHandler/ImageHandler';
// import { ImageFetcher } from '../ImageHandler/ImageHandler';

const styles = makeStyles((theme) => ({
    flipCard: {
        margin: "35px",
    },
    normalBack: {
        height: "368.75px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px -5px white, 0 0 10px -2px white, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    holoBack: {
        height: "368.75px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px blue, 0 0 10px -2px blue, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    shatterBack: {
        height: "368.75px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px #18E3CE, 0 0 10px -2px #18E3CE, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    legendaryBack: {
        height: "368.75px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px gold, 0 0 10px -2px gold, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    }
}))

const CardFlip = ({ cardType, cardImage }) => {
    const classes = styles();
    const [flipped, setFlipped] = useState(false);
    // const [image, setImage] = useState(null);
    const [normalCard] = useSound(
        cardFlipSfx,
        { volume: 0.25 }
    );
    const [holoCard] = useSound(
        holoFlipSfx,
        { volume: 0.25 }
    );
    const [epicCard] = useSound(
        epicFlipSfx,
        { volume: 0.45 }
    );
    const [legendaryCard] = useSound(
        legendaryFlipSfx,
        { volume: 0.25 }
    );

    const handleFlip = () => {
        const random = Math.floor(Math.random() * 100);
        // console.log("random: " + random);
        // if (random <= 20) {
        //     setImage(GREEN_FRONT);
        // } else if (random > 20 && random <= 40) {
        //     setImage(BLUE_FRONT);
        // } else if (random > 40 && random <= 60) {
        //     setImage(PURPLE_FRONT);
        // } else if (random > 60 && random <= 80) {
        //     setImage(RED_FRONT);
        // } else {
        //     setImage(YELLOW_FRONT);
        // }
        if (!flipped) {
            setFlipped(true)
            if (cardType === 0) {
                normalCard()
            } else if (cardType === 1) {
                holoCard()
            } else if (cardType === 2) {
                epicCard()
            } else if (cardType === 3) {
                legendaryCard()
            }
            // switch (cardType) {
            //     case "normal":
            //         normalCard()
            //     case "holo":
            //         holoCard()
            //     case "shatter":
            //         epicCard()
            //     default:
            //         normalCard()
            // }
        }
    }

    // const randomImage = () => {
    //     const random = Math.floor(Math.random() * 100);
    //     console.log("random: " + random);
    //     if (random <= 33) {
    //         return GREEN_FRONT;
    //     } else if (random > 33 && random <= 66) {
    //         return BLUE_FRONT;
    //     } else {
    //         return RED_FRONT;
    //     }
    // }

    return (
        <div style={{ margin: "10px" }}>
            <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                <div onClick={() => handleFlip()} className={cardType === 1 ? classes.holoBack : cardType === 2 ? classes.shatterBack : cardType === 3 ? classes.legendaryBack : classes.normalBack}>
                    {/* <ImageHandler name={cardImg} size="s" alt="logo" /> */}
                    <img src={card_back} alt="logo" style={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                </div>
                <>
                    {/* <HoloCard /> */}
                    <CardHandler cardImage={cardImage} cardType={cardType} />
                    {/* {cardType === "holo" ? <HoloCard imageFace={cardImage} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> : cardType === "shatter" ? <ShatterCard imageFace={cardImage} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> : cardType === "legendary" ? <LegendaryCard imageFace={cardImage} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> : <NormalCard imageFace={cardImage} imageStyle={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />} */}
                    {/* <ShatterCard /> */}
                </>
            </ReactCardFlip>
        </div>
    )
}

export default CardFlip