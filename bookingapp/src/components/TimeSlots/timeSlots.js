import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getSlots } from "../utils/service";

const TimeSlots = () => {
  const navigate = useNavigate();
  const { roomNumber, day } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //   useEffect(() => {
  //     if (!sessionStorage.length) {
  //       navigate("/");
  //     }
  //   }, []);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await getSlots(roomNumber, day);
        const resJson = await response.json();

        if (response.status == 401 || response.status == 400) {
          throw new Error(response.error);
        }
        setTimeSlots(resJson.body);
        setIsLoading(false);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);

  const onSubmit = (info) => {
    const entries = Object.entries(info);
    const trueInfo = entries
      .filter((entry) => entry[1])
      .map((entries) => entries[0]);
    navigate("/reservation", {
      state: { time: trueInfo, room: roomNumber, day: day },
    });
  };
  return (
    <>
      {isLoading ? (
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
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </Container>
      ) : (
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
            {`Выберите доступное время для бронирования кабинета #${roomNumber}. День брони - ${day}`}
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
            {timeSlots.map((slot) => {
              return (
                <FormGroup key={slot}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={`${slot}`}
                    sx={{ width: "100px" }}
                    {...register(`${slot}`)}
                  />
                </FormGroup>
              );
            })}

            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 2 }}
              style={{ width: "150px" }}
            >
              Подтвердить
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
};

export default TimeSlots;
