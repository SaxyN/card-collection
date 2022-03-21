import React from 'react';
import Header from "../components/Header/Header";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
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
            <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "25px" }}>
                <Button component={Link} to="/packs">Open Another</Button>
                <Button component={Link} to="/packs/packgenerate">Open Same</Button>
            </div>
        </div >
    )

}

export default OpenPackContainer;