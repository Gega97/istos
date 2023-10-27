import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { IProfileView } from "../../interfaces";
import MobileHeader from "../../components/mobileHeader";

const MobileView: React.FC<IProfileView> = (props) => {
  return (
    <Box style={{ padding: 16 }}>
      <MobileHeader navigateTo={props.navigateTo} title="Atras" />
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
