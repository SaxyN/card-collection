import React from 'react';
import { IconButton, Box, Drawer, Divider, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

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
                    {['inventory', 'packs', 'showcase'].map((item, index) => (
                        <div key={index}>
                            <ListItem button className={classes.drawerItem} component={Link} to={item === "home" ? "/" : "/" + item} onClick={() => setOpen(false)}>
                                <ListItemText primary={item} />
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}

export default DrawerComponent;