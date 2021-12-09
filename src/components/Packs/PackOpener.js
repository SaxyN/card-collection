import React, { useState } from 'react';
import { Button } from "@mui/material";
import { Link, Redirect } from "react-router-dom";
import CardFlip from '../../components/Flip/CardFlip';
import generateCard, { generatePack } from '../../cardpull/cardPuller';
// import generatePack from '../../cardpull/cardPuller';

const PackOpener = () => {
    return (
        <div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "25px" }}>
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
                <CardFlip cardType={generateCard()} />
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", paddingTop: "25px" }}>
                <Button style={{margin: "5px"}} variant="contained" component={Link} to="/packs">Open Another</Button>
                <Button style={{margin: "5px"}} variant="contained" component={Link} to="/packs/packgenerate" onClick={() => generatePack("pack_2", 6)}>Open Same</Button>
            </div>
        </div>
    )
}

export default PackOpener