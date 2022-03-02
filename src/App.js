import React, { useState } from "react";

// CSS
import "./App.css";

// Styled Components
import styled, { ThemeProvider } from "styled-components";

// React Themes
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

// Components
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const icon = theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />;

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="dark-light-toggle-container">
          <button className="dark-light-toggle" onClick={() => themeToggler()}>{icon}</button>
        </div>
        <Signup></Signup>
      </StyledApp>
    </ThemeProvider>
  );
}
export default App;
