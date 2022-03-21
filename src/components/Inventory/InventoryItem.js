import React from 'react';
import { styled } from '@mui/styles';
import { Badge } from "@mui/material";

import CardHandler from '../CardHandler/CardHandler';

const InventoryItem = ({ card, openCardInfo, sizeTag }) => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            border: `2px solid black`,
            paddingLeft: "20px",
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingRight: "5px",
            right: -6,
            top: "8%",
            fontSize: 15,
        }
    }))

    // const StyledCounter = styled('div')({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: "solid 2px black",
    //     textAlign: 'center',
    //     width: "1%",
    //     position: "absolute",
    //     paddingTop: 8,
    //     paddingBottom: 8,
    //     borderRadius: 10,
    //     top: "50%",
    //     left: "10%",
    //     marginLeft: "",
    //     marginTop: "",
    //     zIndex: 500,
    // })

    return (
        <div style={{ justifyContent: "center" }} onClick={() => openCardInfo ? openCardInfo(card.id) : null}>
            <StyledBadge style={{ color: "black" }} badgeContent={card.count} color="default" max={50}>
                <CardHandler cardImage={card.img} cardType={card.type} sizeTag={sizeTag} />
            </StyledBadge>
        </div>
    )
}

export default InventoryItem;