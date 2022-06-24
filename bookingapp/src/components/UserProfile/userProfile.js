import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

import { useEffect, useState, useCallback } from "react";
import { getUserReservations } from "../utils/service";

const Profile = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await getUserReservations();
        const resJson = await response.json();

        if (response.status == 401 || response.status == 400) {
          throw new Error(response.error);
        }
        setReservations(resJson.body);
        setIsLoading(false);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);
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
            justifyContent: "center",
            height: "100vh",
            marginTop: 2,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </Container>
      ) : (
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 2,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {/* {`${reservations[0].firstName}``${reservations[0].lastName}`} */}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Здесь отображены забронированные Вами кабинеты в течение недели,
                с уточняющей информацией.
              </Typography>
            </Container>
          </Box>
          <Container sx={{ py: 2, height: "100vh" }} maxWidth="md">
            <Grid container spacing={4}>
              {reservations.map((reservation, index) => (
                <Grid item key={index} xs={4} sm={2} md={2}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {`${reservation.room}`}
                      </Typography>
                      <Typography>{`${reservation.day}`}</Typography>
                      <Typography>{`${reservation.time}`}</Typography>
                      <Typography>{`${reservation.firstName}`}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      )}
    </>
  );
};

export default Profile;
