import React, { useContext } from "react";
import {
  Avatar,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Box,
} from "@mui/material/";

import logo from "../assets/IstosLogo.png";

import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { AppContext } from "../context";
import { IAppBarComponent } from "../interfaces";
import { service } from "../service";

// import LogoutIcon from "@mui/icons-material/Logout";

const AppBar: React.FC<IAppBarComponent> = (props) => {
  const { state, handleSidebar, logout } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const onLogout = async (): Promise<void> => {
    await service.onLogoutNFID();
    logout();
    props.navigateTo("/");
    handleSidebar(false);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MuiAppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          // onClick={() => handleSidebar(true)}
        >
          <img src={logo} style={{ width: 75 }} />
        </IconButton>
        <Box
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: 16,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {state.user?.username}
          </Typography>
          <IconButton color="inherit">
            <Avatar
              onClick={handleClick}
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => props.navigateTo("/app/profile")}>
          <Avatar src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />{" "}
          {state.user?.name}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configuraciones
        </MenuItem>
        <MenuItem onClick={() => onLogout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </MuiAppBar>
  );
};

export default AppBar;
