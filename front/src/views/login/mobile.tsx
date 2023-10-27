import { Box, Button } from "@mui/material";
import { ILoginView } from "../../interfaces";

const MobileView: React.FC<ILoginView> = (props) => {
  return (
    <>
      <Box style={{ padding: 16 }}>
        <img
          src="https://img.freepik.com/free-vector/city-buildings-blue-color_23-2147512465.jpg"
          alt=""
          style={{ width: "100%" }}
        />
        <Box style={{ textAlign: "center" }}>
          <Box style={{ fontSize: 20, fontWeight: "bold" }}>
            Welcome to Istos
          </Box>

          <Box
            style={{ fontSize: 16, marginTop: 32, textDecoration: "underline" }}
          >
            ¿Indiferencia o impacto?
          </Box>
        </Box>
        <Box
          style={{
            position: "fixed",
            bottom: 100,
            width: "92%",
            textAlign: "center",
          }}
        >
          <Button
            disableElevation
            variant="contained"
            style={{ color: "#ffffff" }}
            onClick={() => props.onLogin()}
          >
            Auth with NFID
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MobileView;
