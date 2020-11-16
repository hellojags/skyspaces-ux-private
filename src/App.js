import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
// import { theme } from "./config/globalTheme";
//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core";
import MainApp from "./mainApp";

function App() {
  const [forLightGray, setforLightGray] = useState("#f7f7f7");
  const [forLinkColors, setForLinksColor] = useState("#656d70");
  const [whiteBgColorTheme, setwhiteBgColorTheme] = useState("#ffffff");
  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#1ed660",
        textColor: "#636f70",
      },
      whiteBgColor: whiteBgColorTheme,
      linksColor: forLinkColors,
      secondary: {
        main: "#636f70",
        textColor: "#c5c5c5",
      },
      lightGray: forLightGray,
      mediumGray: "#c5c5c5",
      lightGreen: "#daffe7",
    },
  });

  const functionForChangeTheme = () => {
    setforLightGray(forLightGray === "#f7f7f7" ? "#1a1b1d" : "#f7f7f7");
    setForLinksColor(forLinkColors === "#656d70" ? "#ffffff" : "#656d70");
    setwhiteBgColorTheme(
      whiteBgColorTheme === "#ffffff" ? "#000000" : "#ffffff"
    );
  };

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Switch>
            <Route path="/" component={() => <MainApp />} />
          </Switch>
        </Router>
        {/* <div style={{ paddingTop: 80 }}>
          <ProfileMain />
        </div>
         */}
      </ThemeProvider>
    </>
  );
}

export default App;
