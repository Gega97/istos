import { Box, IconButton, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IMobileHeader } from "../interfaces";

const MobileHeader: React.FC<IMobileHeader> = (props) => {
  return (
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
        {props.title}
      </Box>
    </Box>
  );
};

export default MobileHeader;
