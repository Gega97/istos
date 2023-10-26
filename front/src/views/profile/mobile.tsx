import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { IProfileView } from "../../interfaces";

const MobileView: React.FC<IProfileView> = (props) => {
  return (
    <Box style={{ padding: 16 }}>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          style={{ paddingLeft: 0 }}
          onClick={() => props.navigateTo(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box
          style={{
            fontSize: 18,
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Atras
        </Box>
      </Box>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => props.deleteUser()}>
              <ListItemIcon>
                <PersonRemoveIcon />
              </ListItemIcon>
              <ListItemText primary="Eliminar cuenta" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default MobileView;
