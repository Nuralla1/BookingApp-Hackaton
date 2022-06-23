import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addReservation } from "../utils/service";
import { useState } from "react";

const Reservation = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (info) => {
    const obj = { ...info, ...location.state };
    try {
      const response = await addReservation(obj);
      const resJson = await response.json();

      console.log(response);
      console.log(resJson);
    } catch (error) {
      alert(error);
    }
    reset();
  };
  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          height: "84vh",
          marginTop: 2,
        }}
      >
        <CssBaseline />
        <Typography component="h1" variant="h5">
          {`Опишите цель бронирования`}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            error={!!errors.meetingName?.message}
            helperText={errors.meetingName?.message}
            margin="normal"
            required
            fullWidth
            id="meetingName"
            label="Цель бронирования"
            name="meetingName"
            autoComplete="meetingName"
            autoFocus
            multiline
            {...register("meetingName", {
              required: "Поле обязательно для заполнения",
            })}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: 2 }}
            style={{ width: "150px" }}
          >
            Забронировать
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Reservation;
