import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ForestSharpIcon from "@mui/icons-material/ForestSharp";

import { useNavigate } from "react-router-dom";

export default function Header({ callback }) {
  const navigate = useNavigate();
  function handleExit() {
    sessionStorage.clear();
    callback();
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ForestSharpIcon />
          </IconButton>

          <Button color="inherit" onClick={() => navigate("/home")}>
            Домой
          </Button>
          <Button color="inherit" onClick={handleExit}>
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
