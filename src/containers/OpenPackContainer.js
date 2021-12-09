import React from 'react';
import Header from "../components/Header/Header";
import CardFlip from '../components/Flip/CardFlip';
import generateCard from '../cardpull/cardPuller';

const OpenPackContainer = () => {

    return (
        <div>
            <Header />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "25px" }}>
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
            </div>
        </div >
    )

}

export default OpenPackContainer;