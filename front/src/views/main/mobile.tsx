import { Box } from "@mui/material";
import { IMainView } from "../../interfaces";
import { PaperActionItem } from "../../types";
import PaperAction from "../../components/paperAction";

const MobileView: React.FC<IMainView> = (props) => {
  return (
    <Box style={{ padding: 16 }}>
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
