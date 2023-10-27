import { Box, Button, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

import { ISupportComponent } from "../interfaces";
import Share from "@mui/icons-material/Share";

const SupportAction: React.FC<ISupportComponent> = (props) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }}>
      <Box style={{ width: "50%" }}>
        <Box
          style={{
            marginTop: 12,

            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          Support
        </Box>
        <Box
          style={{
            fontSize: 10,
            marginTop: 8,
            display: "flex",
          }}
        >
          <Button
            onClick={() => props.onDonate()}
            size="small"
            disableElevation
            variant="contained"
            style={{
              textTransform: "capitalize",
              marginRight: 8,
            }}
          >
            Aportar
          </Button>
          <IconButton
            color="primary"
            onClick={() => props.onShared()}
            size="small"
            style={{
              textTransform: "capitalize",
            }}
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SupportAction;
