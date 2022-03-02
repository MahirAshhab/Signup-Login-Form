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

// React Router Dom
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

// Components
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const StyledDiv = styled.div`
  .input-container{
    margin-bottom: 15px;
  }

  h1{
    font-size: 36px;
    margin-bottom: 40px;
  }

  .form-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .form-container-2{
    width: 50%;
    padding: 30px;
    border-radius: 20px;
    transition: 0.5s;
  }

  label{
    letter-spacing: 1px;
    font-size: 14px;
    text-align: left !important;
  }

  input{
    letter-spacing: 1px;
    font-size: 14px;
    margin-top: 5px;
    box-sizing: border-box;
    width: 100% ;
    border-radius: 10px;
    padding: 8px 10px;
    transition: 0.5s;
  }

  .sign-up-container{
    padding-top: 40px;
    text-align: center;
  }

  .sign-up{
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 10px 15px;
    border-radius: 10px;
    color: white;
    transition: 0.5s;
    text-transform: uppercase;
  }

  .sign-up-bottom-text{
    text-align: center;
  }

  .sign-up-bottom-text a{
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
    transition: 0.5s;
  }

  @media screen and (max-width: 768px) {
    .form-container-2{
      width: 70% !important;
    }
  }
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
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <StyledDiv>
                <Signup></Signup>
              </StyledDiv>
            </Route>
            <Route path="/login">
              <StyledDiv>
                <Login></Login>
              </StyledDiv>
            </Route>
          </Switch>
        </HashRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;