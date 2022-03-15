import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";

import RefreshIcon from '@mui/icons-material/Refresh';

const styles = makeStyles((theme) => ({
    utils: {
        position: "absolute",
        left: "50%",
    }
}))

const InventoryUtils = ({ updateINV }) => {
    const classes = styles();
    return (
        <IconButton className={classes.utils} onClick={() => updateINV()}>
            <RefreshIcon />
        </IconButton>

    )

}

export default InventoryUtils;