import { Box, Button } from "@mui/material";
import { ISupportComponent } from "../interfaces";

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
          <Button
            onClick={() => props.onShared()}
            size="small"
            variant="outlined"
            style={{
              textTransform: "capitalize",
            }}
          >
            Compartir
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SupportAction;
