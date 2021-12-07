import React from 'react';
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useHistory } from "react-router-dom";

// import AcountModal from '../NewHeader/AcountModal';
import DrawerComponent from './DrawerComponent';

import { AuthContext } from '../../firebase/Authenticator';
import { useContext } from 'react';

import { getAuth, signOut } from 'firebase/auth';

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
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();

    async function signOutUser() {
        signOut(auth)
            .then(() => {
                history.replace("/login")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <DrawerComponent />
                {/* <Button variant="text" size="large" component={Link} to={"/"}>
                </Button> */}

                <Typography className={classes.buttonText} variant="h6">{currentUser.displayName}</Typography>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/"}>
                            <Typography className={classes.buttonText} variant="body2">Home</Typography>
                        </Button>
                    </li>
                    <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/inventory"}>
                            <Typography className={classes.buttonText} variant="body2">Inventory</Typography>
                        </Button>
                    </li>
                    <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/packs"}>
                            <Typography className={classes.buttonText} variant="body2">Packs</Typography>
                        </Button>
                    </li>
                    <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/openpack"}>
                            <Typography className={classes.buttonText} variant="body2">Test Pack</Typography>
                        </Button>
                    </li>
                    {/* <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/settings"}>
                            <Typography className={classes.buttonText} variant="body2">Settings</Typography>
                        </Button>
                    </li> */}
                    {/* <li className={classes.li}>
                        <Button variant="text" component={Link} to={"/login"}>
                            <Typography className={classes.buttonText} variant="body2">Login</Typography>
                        </Button>
                    </li> */}
                </ul>
                {/* <Button variant="text">
                    <Typography className={classes.buttonText} variant="body2">Home</Typography>
                </Button> */}
                <div style={{ display: "flex" }}>
                    <Button variant="text" onClick={() => signOutUser()}>
                        <Typography className={classes.buttonText} variant="body2">Sign Out</Typography>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header;