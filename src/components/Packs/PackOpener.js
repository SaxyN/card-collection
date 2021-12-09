import React, { useState } from 'react';
import CardFlip from '../../components/Flip/CardFlip';
import generateCard from '../../cardpull/cardPuller';

const PackOpener = () => {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "25px" }}>
            <CardFlip cardType={generateCard()} />
            <CardFlip cardType={generateCard()} />
            <CardFlip cardType={generateCard()} />
            <CardFlip cardType={generateCard()} />
            <CardFlip cardType={generateCard()} />
            <CardFlip cardType={generateCard()} />
        </div>
    )
}

export default PackOpener