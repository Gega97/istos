import { useState } from "react";

import { Box, IconButton, TextField, Avatar, Button } from "@mui/material";

import { IRegisterView } from "../../interfaces";
import MobileHeader from "../../components/mobileHeader";

const MobileView: React.FC<IRegisterView> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [avatar, setAvatar] = useState<number[]>([1, 2, 3]);

  return (
    <>
      <Box style={{ padding: 16 }}>
        <MobileHeader title="Cuentanos de ti" navigateTo={props.navigateTo} />
        <Box style={{ textAlign: "center", marginTop: 16, marginBottom: 16 }}>
          <IconButton>
            <Avatar
              style={{ width: 100, height: 100 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbbK2pa-B1UTy51qUBkmiDrvVpwxAlewARg&usqp=CAU"
            />
          </IconButton>
        </Box>
        <TextField
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
          id="outlined-basic"
          label="Usuario..."
          variant="outlined"
          fullWidth
          style={{ marginBottom: 16 }}
        />
        <TextField
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          id="outlined-basic"
          label="Nombre y apellido..."
          variant="outlined"
          fullWidth
          style={{ marginBottom: 16 }}
        />
        <TextField
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          multiline
          minRows={3}
          maxRows={5}
          id="outlined-basic"
          label="Descripción..."
          variant="outlined"
          fullWidth
        />
        <Box style={{ display: "flex", justifyContent: "end", marginTop: 16 }}>
          <Button
            variant="contained"
            disableElevation
            disabled={name === "" || username === "" || description === ""}
            onClick={() =>
              props.onRegister({
                name,
                description,
                username,
                avatar,
              })
            }
          >
            Crear
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MobileView;
