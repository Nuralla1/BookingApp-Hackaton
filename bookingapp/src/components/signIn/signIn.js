import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useForm } from "react-hook-form";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { signIn } from "../utils/service";

export default function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (info) => {
    try {
      const response = await signIn(info);
      const resJson = await response.json();
      sessionStorage.setItem("Token", resJson.accessToken);
      if (response.status == 401 || response.status == 400) {
        throw new Error(response.error);
      }
      navigate("/rooms");
    } catch (error) {
      alert(error);
    }
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            error={!!errors.username?.message}
            helperText={errors.username?.message}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Логин"
            name="username"
            autoComplete="username"
            autoFocus
            {...register("username", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[a-z]+\.[a-z]+$/i,
                message:
                  "Логин должен быть в формате 'Имя.Фамилия' на латнице.",
              },
            })}
          />

          <TextField
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^(?=.*?[0-9])(?=.*?[!@#$%^&*)(+?=._<>\\/]).{8,30}$/i,
                message:
                  "Пароль должен содержать от 8 до 30 символов и иметь хотя бы одну цифру и специсимвол.",
              },
            })}
          />

          <Grid container>
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Авторизируйтесь
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={() => navigate("/signup")} variant="outlined">
                Нет аккаунта? Зарегистрируйтесь
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
