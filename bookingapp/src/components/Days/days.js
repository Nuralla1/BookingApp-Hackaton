import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "../Header/header";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Days = () => {
  const navigate = useNavigate();
  const { roomNumber } = useParams();
  const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];
  //   useEffect(() => {
  //     if (!sessionStorage.length) {
  //       navigate("/");
  //     }
  //   }, []);
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
          justifyContent: "start",
          height: "100vh",
          marginTop: 2,
        }}
      >
        <CssBaseline />
        <Typography component="h1" variant="h5">
          {`Выберите день, в который Вы бы хотели забронировать кабинет #${roomNumber}`}
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {days.map((day) => {
            return (
              <Button
                key={day}
                variant="outlined"
                sx={{ marginTop: 2 }}
                style={{ width: "150px" }}
                onClick={() => navigate(`/${roomNumber}/${day}`)}
              >
                {day}
              </Button>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Days;
