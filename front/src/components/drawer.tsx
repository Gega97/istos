import { useContext } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MUIDrawer,
} from "@mui/material";
import { AppContext } from "../context";
import { SidebarItem } from "../types";
import { service } from "../service";
import { ISidebarComponent } from "../interfaces";

const Drawer: React.FC<ISidebarComponent> = (props) => {
  const { state, handleSidebar, logout } = useContext(AppContext);

  const onLogout = async (): Promise<void> => {
    await service.onLogoutNFID();
    logout();
    props.navigateTo("/");
    handleSidebar(false);
  };

  const sidebarItems: SidebarItem[] = [
    {
      id: 0,
      title: "Titulo 1",
      path: "/",
      action: () => console.log,
    },
    {
      id: 1,
      title: "Titulo 2",
      path: "/",
      action: () => console.log,
    },
    {
      id: 2,
      title: "Cerrar sesión",
      path: "/",
      action: () => onLogout(),
    },
  ];

  return (
    <MUIDrawer
      anchor={"left"}
      open={state.isOpenSidebar}
      onClose={() => handleSidebar(false)}
    >
      <Box style={{ width: 200 }}>
        <List>
          {sidebarItems.map((item: SidebarItem) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => item.action()}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </MUIDrawer>
  );
};

export default Drawer;
