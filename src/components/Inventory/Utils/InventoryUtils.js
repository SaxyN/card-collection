import { makeStyles } from "@mui/styles";
import { IconButton, Tooltip } from "@mui/material";

// import RefreshIcon from '@mui/icons-material/Refresh';
import NumbersIcon from '@mui/icons-material/Numbers';
// import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import Filter3Icon from '@mui/icons-material/Filter3';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import DiamondIcon from '@mui/icons-material/Diamond';
import * as cardActions from "../../../store/cards/cards.action";
import { useDispatch, useSelector } from "react-redux"

const styles = makeStyles((theme) => ({
    utils: {
        background: "red",
    }
}))

const InventoryUtils = () => {
    const classes = styles();
    const dispatch = useDispatch()
    const { inventory } = useSelector((state) => ({
        inventory: state.cards.inventory,
    }))
    // const handleRefresh = () => {
    //     dispatch(cardActions.updateVisibleInventory(inventory));
    // }
    const sortCount = () => {
        dispatch(cardActions.sortInventoryByCount(inventory))
    }
    const sortId = () => {
        dispatch(cardActions.sortInventoryByID(inventory))
    }
    const sortType = () => {
        dispatch(cardActions.sortInventoryByType(inventory))
    }
    const sortName = () => {
        dispatch(cardActions.sortInventoryByName(inventory))
    }

    return (
        <>
            <Tooltip title="Sort By ID">
                <IconButton size="large" className={classes.utils} onClick={() => sortId()}>
                    <NumbersIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Sort By Name">
                <IconButton size="large" className={classes.utils} onClick={() => sortName()}>
                    <SortByAlphaIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Sort By Count">
                <IconButton size="large" className={classes.utils} onClick={() => sortCount()}>
                    <Filter3Icon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Sort By Rarity">
                <IconButton size="large" className={classes.utils} onClick={() => sortType()}>
                    <DiamondIcon />
                </IconButton>
            </Tooltip>
        </>
    )

}

export default InventoryUtils;