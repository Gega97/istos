import { Box, Avatar, Button } from "@mui/material";
import { ITenderComponent } from "../interfaces";

const TenderAction: React.FC<ITenderComponent> = (props) => {
  return (
    <Box style={{ display: "flex" }}>
      <Box style={{ width: "50%", display: "flex", alignItems: "center" }}>
        <Box style={{ marginRight: 8 }}>
          <Avatar
            style={{
              width: 30,
              height: 30,
            }}
            src={
              props.avatarURL ||
              "https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_iron_man_marvel_hero-512.png"
            }
          />
        </Box>
        <Box style={{ fontSize: 12 }}>{props.username}</Box>
      </Box>
      <Box style={{ width: "50%", display: "flex", justifyContent: "end" }}>
        <Box>
          <Box
            style={{
              fontSize: 10,
            }}
          >
            <Button
              onClick={() => props.onClick()}
              size="small"
              variant="outlined"
              style={{
                textTransform: "capitalize",
              }}
            >
              Licitar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TenderAction;
