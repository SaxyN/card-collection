import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ReactCardFlip from 'react-card-flip';
import ReactAudioPlayer from 'react-audio-player';
import card_back from '../CardItem/TestCard/card_back.png';

import HoloCard from '../CardItem/HoloCard/HoloCard';
import ShatterCard from '../CardItem/ShatterCard/ShatterCard';
import NormalCard from '../CardItem/NormalCard/NormalCard';

const styles = makeStyles((theme) => ({
    flipCard: {
        margin: "35px",
    },
    normalBack: {
        transition: "box-shadow 0.1s ease-out",
        overflow: "hidden",
        "&:hover": {
            boxShadow: "0 0 30px -5px white,0 0 10px -2px white, 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    holoBack: {
        transition: "box-shadow 0.1s ease-out",
        "&:hover": {
            boxShadow: "-20px -20px 30px -25px red, 20px 20px 30px -25px red, -7px -7px 10px -5px red, 7px 7px 10px -5px red, 0 0 13px 4px rgba(255,255,255,0.3), 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    },
    shatterBack: {
        transition: "box-shadow 0.1s ease-out",
        "&:hover": {
            boxShadow: "-20px -20px 30px -25px red, 20px 20px 30px -25px blue, -7px -7px 10px -5px yellow, 7px 7px 10px -5px purple, 0 0 13px 4px rgba(255,255,255,0.3), 0 55px 35px -20px rgba(0, 0, 0, 0.5)",
        }
    }
}))

const CardFlip = ({ cardImg, cardType }) => {
    const classes = styles();
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        if (!flipped) {
            setFlipped(true)
        }
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
            <div onClick={() => handleFlip()} className={cardType === "holo" ? classes.holoBack : cardType === "shatter" ? classes.shatterBack : classes.normalBack}>
                <img src={card_back} alt="logo" style={{ width: "210px", height: "295px", position: "relative", borderRadius: "5% / 3.5%" }} />
            </div>
            <div style={{margin: "-10px"}}>
                {/* <HoloCard /> */}
                {cardType === "holo" ? <HoloCard /> : cardType === "shatter" ? <ShatterCard /> : <NormalCard />}
                {/* <ShatterCard /> */}
            </div>
        </ReactCardFlip>
    )
}

export default CardFlip