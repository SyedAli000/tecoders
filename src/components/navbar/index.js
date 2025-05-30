/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// import logo from "../../assetes/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Services", "Contact", "Portfolio"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={trigger ? 24 : 0}
        style={{
          backgroundColor: trigger ? "white" : "#030637",
          color: trigger ? "#626262" : "#fefeff",
          boxShadow: trigger
            ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
            : undefined,
        }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {trigger?
            <img
              src="/images/logo2.jpeg"
              className="logopic"
            />
            :
            <img
            src="/images/logo1.jpeg"
            className="logopic"
          />
               }
          </Typography>
          <Box className="qwerty" sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Button
                className="menuitemsbutton"
                // key={item}
                sx={{ color: trigger ? "#626262" : "#fefeff" }}
              >
                Home
              </Button>
            </Link>
            <Button
              className="menuitemsbutton"
              // key={item}
              sx={{ color: trigger ? "#626262" : "#fefeff" }}
            >
              Services
            </Button>
            <Button
              className="menuitemsbutton"
              // key={item}
              sx={{ color: trigger ? "#626262" : "#fefeff" }}
            >
              Contact
            </Button>
            <Link to="/portfolio">
              <Button
                className="menuitemsbutton"
                // key={item}
                sx={{ color: trigger ? "#626262" : "#fefeff" }}
              >
                Portfolio
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
