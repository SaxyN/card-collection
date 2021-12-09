import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ReactCardFlip from 'react-card-flip';
import card_back from '../CardItem/TestCard/card_back.png';

import HoloCard from '../CardItem/HoloCard/HoloCard';
import ShatterCard from '../CardItem/ShatterCard/ShatterCard';
import NormalCard from '../CardItem/NormalCard/NormalCard';

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
        <div style={{ margin: "10px" }}>
            <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                <div onClick={() => handleFlip()} className={cardType === "holo" ? classes.holoBack : cardType === "shatter" ? classes.shatterBack : classes.normalBack}>
                    <img src={card_back} alt="logo" style={{ width: "210px", height: "295px", borderRadius: "5% / 3.5%" }} />
                </div>
                <>
                    {/* <HoloCard /> */}
                    {cardType === "holo" ? <HoloCard /> : cardType === "shatter" ? <ShatterCard /> : <NormalCard />}
                    {/* <ShatterCard /> */}
                </>
            </ReactCardFlip>
        </div>
    )
}

export default CardFlip