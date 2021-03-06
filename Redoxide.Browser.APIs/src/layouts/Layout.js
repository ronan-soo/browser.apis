import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Notification from "../components/Notification";

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const DrawerHeader = () => (
        <Box>
            <Toolbar />
        </Box>
    );

    const NavBar = (props) => {
        const transitionForDrawer = open ?
            {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(["margin", "width"], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen
                })
            } : {
                transition: theme.transitions.create(["margin", "width"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                })
            };

        return (
            <AppBar
                sx={transitionForDrawer}
                {...props}
            />
        );
    };

    const Main = (props) => {
        const transitionForDrawer = open ?
            {
                transition: theme.transitions.create(["margin", "width"], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen
                }),
                marginLeft: 0
            } : {
                transition: theme.transitions.create("margin", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                marginLeft: `-${drawerWidth}px`
            };

        return (
            <Box
                sx={{
                    marginTop: '70px',
                    flexGrow: 1,
                    padding: theme.spacing(3),
                    ...transitionForDrawer
                }}
            >
                {props.children}
            </Box>
        );
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <NavBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={toggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Browser API
                    </Typography>
                </Toolbar>
            </NavBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader />
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main>
                <Notification />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
                    dolor purus non enim praesent elementum facilisis leo vel. Risus at
                    ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
                    quisque non tellus. Convallis convallis tellus id interdum velit
                    laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
                    adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                    integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
                    eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
                    quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                    vivamus at augue. At augue eget arcu dictum varius duis at consectetur
                    lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
                    faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                    ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                    elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                    sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                    mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                    risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                    purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                    morbi tristique senectus et. Adipiscing elit duis tristique
                    sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Main>
        </Box>
    );
}
