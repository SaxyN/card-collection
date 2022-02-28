import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ReactCardFlip from 'react-card-flip';
import card_back from '../CardItem/TestCard/card_back.png';
import GREEN_FRONT from "../CardItem/CardAssets/green_front.png";
import BLUE_FRONT from "../CardItem/CardAssets/blue_front.png";
import RED_FRONT from "../CardItem/CardAssets/red_front.png";

import HoloCard from '../CardItem/HoloCard/HoloCard';
import ShatterCard from '../CardItem/ShatterCard/ShatterCard';
import NormalCard from '../CardItem/NormalCard/NormalCard';
import LegendaryCard from "../CardItem/LegendaryCard/LegendaryCard";

import cardFlipSfx from "../../assets/card_flip.wav";
import holoFlipSfx from "../../assets/nice.mp3";
import epicFlipSfx from "../../assets/ohmygod.wav";
import legendaryFlipSfx from "../../assets/english_rare.mp3";
import useSound from 'use-sound';
import ImageHandler from '../ImageHandler/ImageHandler';
import { ImageFetcher } from '../ImageHandler/ImageHandler';

const styles = makeStyles((theme) => ({
    flipCard: {
        margin: "35px",
    },
    normalBack: {
        height: "295px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px -5px white, 0 0 10px -2px white, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    holoBack: {
        height: "295px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px blue, 0 0 10px -2px blue, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    shatterBack: {
        height: "295px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px #18E3CE, 0 0 10px -2px #18E3CE, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    legendaryBack: {
        height: "295px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px gold, 0 0 10px -2px gold, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    }
}))

const CardFlip = ({ cardType, cardImg }) => {
    const classes = styles();
    const [flipped, setFlipped] = useState(false);
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
        { volume: 0.25 }
    );
    const [legendaryCard] = useSound(
        legendaryFlipSfx,
        { volume: 0.25 }
    );

    const handleFlip = () => {
        if (!flipped) {
            setFlipped(true)
            if (cardType === "normal") {
                normalCard()
            } else if (cardType === "holo") {
                holoCard()
            } else if (cardType === "shatter") {
                epicCard()
            } else {
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

    const handleAudio = (type) => {

    }

    const randomImage = () => {
        const random = Math.floor(Math.random() * 100);
        if (random <= 33) {
            return GREEN_FRONT;
        } else if (random > 33 && random <= 66) {
            return BLUE_FRONT;
        } else {
            return RED_FRONT;
        }
    }
    console.log("render");
    return (
        <div style={{ margin: "10px" }}>
            <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                <div onClick={() => handleFlip()} className={cardType === "holo" ? classes.holoBack : cardType === "shatter" ? classes.shatterBack : cardType === "legendary" ? classes.legendaryBack : classes.normalBack}>
                    {/* <ImageHandler name={cardImg} size="s" alt="logo" /> */}
                    <img src={card_back} alt="logo" style={{ width: "210px", height: "295px", borderRadius: "5% / 3.5%" }} />
                </div>
                <>
                    {/* <HoloCard /> */}
                    {cardType === "holo" ? <HoloCard /> : cardType === "shatter" ? <ShatterCard /> : cardType === "legendary" ? <LegendaryCard /> : <NormalCard image={randomImage()} />}
                    {/* <ShatterCard /> */}
                </>
            </ReactCardFlip>
        </div>
    )
}

export default CardFlip