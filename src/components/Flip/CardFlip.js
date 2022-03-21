import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ReactCardFlip from 'react-card-flip';
import card_back from '../CardItem/TestCard/card_back.png';

import cardFlipSfx from "../../assets/card_flip.wav";
import holoFlipSfx from "../../assets/nice.mp3";
import epicFlipSfx from "../../assets/found.mp3";
import legendaryFlipSfx from "../../assets/english_rare.mp3";
import useSound from 'use-sound';
import CardHandler from '../CardHandler/CardHandler';

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
        }
    }

    return (
        <div style={{ margin: "10px" }}>
            <ReactCardFlip isFlipped={flipped} flipDirection='horizontal'>
                <div onClick={() => handleFlip()} className={cardType === 1 ? classes.holoBack : cardType === 2 ? classes.shatterBack : cardType === 3 ? classes.legendaryBack : classes.normalBack}>
                    <img src={card_back} alt="logo" style={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} />
                </div>
                <>
                    <CardHandler cardImage={cardImage} cardType={cardType} sizeTag={"normal"} />
                </>
            </ReactCardFlip>
        </div>
    )
}

export default CardFlip