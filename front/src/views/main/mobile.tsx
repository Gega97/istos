import { Box, Button } from "@mui/material";
import { IMainView } from "../../interfaces";
import { PaperActionItem } from "../../types";
import PaperAction from "../../components/paperAction";

const MobileView: React.FC<IMainView> = (props) => {
  return (
    <Box style={{ padding: 16 }}>
      <Box style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          style={{ textTransform: "capitalize", marginRight: 8, fontSize: 14 }}
          disableElevation
          size="small"
        >
          Proponer
        </Button>
        <Button
          variant="outlined"
          size="small"
          style={{ textTransform: "capitalize", fontSize: 14 }}
        >
          Aportar
        </Button>
        <Box
          style={{ fontSize: 12, textDecoration: "underline", marginTop: 8 }}
        >
          Licitar
        </Box>
      </Box>

      <Box style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
        Iniciativas
      </Box>
      {props.actionsPapers.map((value: PaperActionItem) => (
        <PaperAction
          value={value}
          key={value.id}
          navigateTo={props.navigateTo}
        />
      ))}
      {/* <Button onClick={() => props.onLogout()}>Logout with NFID</Button> */}
    </Box>
  );
};

export default MobileView;
