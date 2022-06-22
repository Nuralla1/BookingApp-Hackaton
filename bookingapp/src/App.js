import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signup/signup";
import Board from "./components/Border/border";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
