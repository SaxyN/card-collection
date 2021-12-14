import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ReactCardFlip from 'react-card-flip';
import card_back from '../CardItem/TestCard/card_back.png';

import HoloCard from '../CardItem/HoloCard/HoloCard';
import ShatterCard from '../CardItem/ShatterCard/ShatterCard';
import NormalCard from '../CardItem/NormalCard/NormalCard';
import LegendaryCard from "../CardItem/LegendaryCard/LegendaryCard";

import cardFlipSfx from "../../assets/card_flip.wav";
import holoFlipSfx from "../../assets/nice.mp3";
import epicFlipSfx from "../../assets/ohmygod.wav";
import legendaryFlipSfx from "../../assets/ehh.mp3";
import useSound from 'use-sound';

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
            boxShadow: "0 0 30px 5px gold, 0 0 10px -2px gold, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    legendaryBack: {
        height: "295px",
        transition: "box-shadow 0.1s ease-out",
        borderRadius: "5%/3.5%",
        "&:hover": {
            boxShadow: "0 0 30px 5px orange, 0 0 10px -2px orange, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    }
}))

const CardFlip = ({ cardImg, cardType }) => {
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

    return (
        <div style={{ margin: "10px" }}>
            <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                <div onClick={() => handleFlip()} className={cardType === "holo" ? classes.holoBack : cardType === "shatter" ? classes.shatterBack : cardType === "legendary" ? classes.legendaryBack : classes.normalBack}>
                    <img src={card_back} alt="logo" style={{ width: "210px", height: "295px", borderRadius: "5% / 3.5%" }} />
                </div>
                <>
                    {/* <HoloCard /> */}
                    {cardType === "holo" ? <HoloCard /> : cardType === "shatter" ? <ShatterCard /> : cardType === "legendary" ? <LegendaryCard /> : <NormalCard />}
                    {/* <ShatterCard /> */}
                </>
            </ReactCardFlip>
        </div>
    )
}

export default CardFlip