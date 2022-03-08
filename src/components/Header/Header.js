import React from 'react';
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useHistory } from "react-router-dom";

import DrawerComponent from './DrawerComponent';

const useStyles = makeStyles((theme) => ({
    main: {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        backgroundColor: "#24252A",
    },
    header: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: "30px 10%",
    },
    buttonText: {
        color: "white",
    },
    ul: {
        listStyle: "none",
    },
    li: {
        display: "inline-block",
        padding: "0px 20px"
    }
}))

const Header = () => {
    const classes = useStyles();
    const history = useHistory();


    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <DrawerComponent />
                <ul className={classes.ul}>
                    {/* <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/inventory"}>
                            <Typography className={classes.buttonText} variant="body2">Inventory</Typography>
                        </Button>
                    </li> */}
                    <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/packs"}>
                            <Typography className={classes.buttonText} variant="body2">Packs</Typography>
                        </Button>
                    </li>
                    <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/showcase"}>
                            <Typography className={classes.buttonText} variant="body2">ShowCase</Typography>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;