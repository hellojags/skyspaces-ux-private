import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
// import { theme } from "./config/globalTheme";
//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core";
import MainApp from "./mainApp";

function App() {
  const [activeDark, setActiveDark] = useState(false);
  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#1ed660",
        textColor: "#636f70",
      },
      headerBgColor: "#ffffff",
      whiteBgColor: "#ffffff",
      linksColor: "#656d70",
      secondary: {
        main: "#636f70",
        textColor: "#c5c5c5",
      },
      sliderBg: "#ffffff",
      centerBar: "#ffffff",
      lightGray: "#f7f7f7",
      mediumGray: "#c5c5c5",
      lightGreen: "#daffe7",
      spacesTabsCount: "#EAEAEA",
    },
  });

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#1ed660",
        textColor: "#636f70",
      },
      sliderBg: "#141418",
      centerBar: "#343537",
      spacesTabsCount: "#000000",
      headerBgColor: "#1a1b1d",
      whiteBgColor: "#000000",
      linksColor: "#ffffff",
      secondary: {
        main: "#636f70",
        textColor: "#c5c5c5",
      },
      lightGray: "#1a1b1d",
      mediumGray: "#c5c5c5",
      lightGreen: "#daffe7",
    },
  });

  React.useEffect(() => {
    let getMode = localStorage.getItem("darkMode");
    if (getMode === "true") {
      setActiveDark(true);
    } else {
      setActiveDark(false);
    }
  }, [localStorage.getItem("darkMode")]);

  const handleDarkMode = (val) => {
    // console.log("called");
    setActiveDark(val);
  };

  // console.log("here is the dark mode===>", activeDark);

  return (
    <>
      <ThemeProvider theme={activeDark ? darkTheme : lightTheme}>
        <Router>
          <Switch>
            <Route
              path="/"
              component={() => <MainApp handleDarkMode={handleDarkMode} />}
            />
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
