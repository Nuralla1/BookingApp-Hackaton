import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signup/signup";
import Days from "./components/Days/days";
import Rooms from "./components/Rooms/rooms";
import TimeSlots from "./components/TimeSlots/timeSlots";
import Reservation from "./components/Reservation/reservation";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
// import Main from "./components/main/main";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const theme = createTheme();

function App() {
  const location = useLocation();
  const [isLoginOrSignUp, setIsLoginOrSignUp] = useState(false);

  function hideHeaderFooter() {
    setIsLoginOrSignUp((prev) => !prev);
  }
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/signup") {
      setIsLoginOrSignUp(true);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {isLoginOrSignUp ? null : <Header callback={hideHeaderFooter} />}
        <Routes>
          <Route path="/" element={<SignIn callback={hideHeaderFooter} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Rooms />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/:roomNumber" element={<Days />} />
          <Route path="/:roomNumber/:day" element={<TimeSlots />} />
        </Routes>
        {isLoginOrSignUp ? null : <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;
