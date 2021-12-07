import React from 'react';
import { IconButton, Box, Drawer, Divider, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// import AcountModal from '../NewHeader/AcountModal';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: "10%"
    },
    drawerItem: {
        padding: "30px"
    },
    wrapper: {
        display: "flex",
        width: "100%",
        position: "absolute",
        left: 15,
        top: 38,
    },
}))

const DrawerComponent = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    return (
        <Box className={classes.wrapper}>
            <IconButton style={{ color: "white" }} onClick={() => setOpen(!open)}>
                <MenuIcon />
            </IconButton>
            <Drawer variant="persistent" anchor="left" open={open} className={classes.drawer}>
                <List>
                    <ListItem>
                        <IconButton onClick={() => setOpen(!open)} style={{ marginTop: "22px" }}>
                            <MenuOpenIcon />
                        </IconButton>
                    </ListItem>
                    {['home', 'inventory', 'packs', 'openpack'].map((item, index) => (
                        <div key={index}>
                            <ListItem button className={classes.drawerItem} component={Link} to={item === "home" ? "/" : "/" + item} onClick={() => setOpen(false)}>
                                <ListItemText primary={item} />
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </Drawer>
            {/* <IconButton component={Link} to={"/"}>
                <HomeIcon style={{color: "black", fontSize: "44px"}}/> */}
            {/* <ComputerIcon style={{color: "black"}}/> */}
            {/* <Typography variant="h6">Home</Typography> */}
            {/* </IconButton> */}
        </Box>
    )
}

export default DrawerComponent;