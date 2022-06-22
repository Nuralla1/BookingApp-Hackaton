import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signup/signup";
import Days from "./components/Days/days";
import Rooms from "./components/Rooms/rooms";
import TimeSlots from "./components/TimeSlots/timeSlots";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rooms" element={<Rooms />} />

          <Route path="/:roomNumber" element={<Days />} />
          <Route path="/:roomNumber/:day" element={<TimeSlots />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
