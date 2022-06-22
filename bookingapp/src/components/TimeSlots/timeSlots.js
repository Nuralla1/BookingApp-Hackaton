import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "../Header/header";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TimeSlots = () => {
  const navigate = useNavigate();
  const { roomNumber, day } = useParams();
  const timeSlots = ["9:30", "10:00", "17:30", `${roomNumber}`, `${day}`];
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
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <CssBaseline />
        <Typography component="h1" variant="h5">
          {`Выберите доступное время для бронирования кабинета #${roomNumber}. День брони - ${day}`}
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {timeSlots.map((slot) => {
            return (
              <Button
                key={slot}
                variant="outlined"
                sx={{ marginTop: 2 }}
                style={{ width: "150px" }}
              >
                {slot}
              </Button>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default TimeSlots;
