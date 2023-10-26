import { Box, Paper } from "@mui/material";
import { IPaperActionComponent } from "../interfaces";

import PeopleIcon from "@mui/icons-material/People";

const PaperAction: React.FC<IPaperActionComponent> = (props) => {
  return (
    <Paper
      elevation={1}
      key={props.value.id}
      style={{
        marginBottom: 12,
        padding: 8,
        borderRadius: 15,
        height: 150,
      }}
      onClick={() => props.navigateTo(`app/action/detail/${props.value.id}`)}
    >
      <Box style={{ display: "flex" }}>
        <Box style={{ width: "40%", marginRight: 15 }}>
          <img
            style={{
              width: "100%",
              borderRadius: 15,
              height: 135,
              objectFit: "cover",
            }}
            src={props.value.image}
            alt=""
          />
        </Box>
        <Box style={{ width: "60%", padding: 8, position: "relative" }}>
          <Box
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 4,
              display: "-webkit-box",

              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {props.value.title}
          </Box>
          <Box
            style={{
              fontSize: 14,
              marginBottom: 12,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.value.address}
          </Box>
          <Box
            style={{
              position: "absolute",
              bottom: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ display: "flex", marginRight: 16 }}>
              <Box style={{ marginRight: 4 }}>
                <PeopleIcon fontSize="small" />
              </Box>
              <Box style={{ fontSize: 12, paddingTop: 3 }}>
                {props.value.contributors}
              </Box>
            </Box>
            <Box
              style={{
                width: "100%",
                fontSize: 12,
                fontWeight: "bold",
                paddingBottom: 3,
                marginLeft: "auto",
              }}
            >
              {props.value.amount}
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default PaperAction;
