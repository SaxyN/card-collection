import React, { Fragment } from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CardFlip from '../../components/Flip/CardFlip';
import { useSelector } from "react-redux";

const PackOpener = () => {
    const { pack } = useSelector((state) => ({
        pack: state.cards.pack,
    }));

    return (
        <div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "25px" }}>
                {pack.map((item, index) => {
                    return (
                        <Fragment>
                            <CardFlip cardType={item.type} cardImage={item.img} />
                        </Fragment>
                    )
                })}
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", paddingTop: "25px" }}>
                <Button style={{ margin: "5px" }} variant="contained" component={Link} to="/packs">Open Another</Button>
            </div>
        </div>
    )
}

export default PackOpener