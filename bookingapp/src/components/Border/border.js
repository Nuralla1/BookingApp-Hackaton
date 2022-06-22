import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "../Header/header";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();
  const rooms = ["404", "304", "303", "302", "301", "203"];
  useEffect(() => {
    if (!sessionStorage.length) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Выберите кабинет, который хотите забронировать
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {rooms.map((room) => {
            return (
              <Button key={room} variant="outlined" sx={{ marginTop: 2 }}>
                {room}
              </Button>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Board;
