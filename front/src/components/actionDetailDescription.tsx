import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IActionDescription } from "../interfaces";

const ActionDetailDescription: React.FC<IActionDescription> = (props) => {
  return (
    <Accordion elevation={0} defaultExpanded={true}>
      <AccordionSummary
        style={{ padding: 0 }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box
          style={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          Descripcion
        </Box>
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0 }}>
        {props.description}
      </AccordionDetails>
    </Accordion>
  );
};

export default ActionDetailDescription;
