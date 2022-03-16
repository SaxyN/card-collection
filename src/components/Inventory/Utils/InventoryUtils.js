import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";

import RefreshIcon from '@mui/icons-material/Refresh';
import * as cardActions from "../../../store/cards/cards.action";
import { useDispatch, useSelector } from "react-redux"

const styles = makeStyles((theme) => ({
    utils: {
        // position: "absolute",
        // left: "50%",
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
    return (
        <IconButton className={classes.utils}>
            {/* <RefreshIcon /> */}
        </IconButton>
        // <>Utils</>
    )

}

export default InventoryUtils;