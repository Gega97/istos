import { Box, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { INavigationBarComponent } from "../interfaces";

const NavigationBar: React.FC<INavigationBarComponent> = (props) => {
  return (
    <Box
      style={{
        height: 90,
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        paddingLeft: 8,
        paddingRight: 8,
        position: "fixed",
        bottom: 0,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <IconButton onClick={() => props.navigateTo("/home")}>
          <HomeIcon
            fontSize="large"
            // style={{
            //   color: page === "home" ? "rgb(0 127 255 / 74%)" : "#757575  ",
            // }}
          />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={() => props.navigateTo("/home")}>
          <PeopleIcon
            fontSize="large"
            // style={{
            //   color: page === "feed" ? "rgb(0 127 255 / 74%)" : "#757575  ",
            // }}
          />
        </IconButton>
      </Box>
      <Box>
        <IconButton component="label" onClick={() => props.navigateTo("/home")}>
          <AddCircleOutlineIcon
            fontSize="large"
            // style={{
            //   color: page === "posts" ? "rgb(0 127 255 / 74%)" : "#757575  ",
            // }}
          />
          {/* <input
            ref={inputFile}
            hidden
            type="file"
            onChange={(e: any) => {
              if (e.target.value) {
                handleChange(e);
              }
            }}
          /> */}
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={() => props.navigateTo("/home")}>
          <NotificationsIcon
            fontSize="large"
            // style={{
            //   color:
            //     page === "notification" ? "rgb(0 127 255 / 74%)" : "#757575  ",
            // }}
          />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={() => props.navigateTo("/home")}>
          <HomeRepairServiceIcon
            fontSize="large"
            // style={{
            //   color: page === "settings" ? "rgb(0 127 255 / 74%)" : "#757575  ",
            // }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavigationBar;
