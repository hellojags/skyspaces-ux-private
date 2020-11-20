import React from "react";
import ComponentOne from "./components/component2";
import Component3 from "./components/component3";
import { Route } from "react-router-dom";
import Header from "./components/Header/index";
import Auth from "./components/Auth";
import SideBar from "./components/sideBar";
import Profile from "./components/profile";
import Footer from "./components/Footer";
import { useTheme } from "@material-ui/core/styles";

/**
 * @author
 * @function MainApp
 **/

const MainApp = (props) => {
  const theme = useTheme();

  return (
    <div>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <React.Fragment>
              <Header firsPage />
              <div
                style={{
                  paddingTop: 80,
                  backgroundColor: theme.palette.whiteBgColor,
                  minHeight: "calc(100vh - 180px)",
                }}
              >
                <ComponentOne />
                <Component3 />
              </div>
              <div
                style={{
                  paddingTop: 80,
                  backgroundColor: theme.palette.whiteBgColor,
                }}
              >
                <Footer />
              </div>
            </React.Fragment>
          );
        }}
      />

      <Route
        path="/auth"
        render={() => {
          return (
            <React.Fragment>
              <Header authRoute />
              <div
                style={{
                  paddingTop: 50,
                  backgroundColor: theme.palette.whiteBgColor,
                  height: "calc(100vh - 100px)",
                }}
              >
                <Auth />
              </div>
              <div style={{ backgroundColor: theme.palette.whiteBgColor }}>
                <Footer />
              </div>
            </React.Fragment>
          );
        }}
      />

      <Route
        path="/dashboard"
        // component={SideBar}
        render={() => {
          return (
            <React.Fragment>
              <Header sideBar handleDarkMode={props.handleDarkMode} />
              <SideBar />
            </React.Fragment>
          );
        }}
      />

      <Route
        exact
        path="/profile"
        // component={SideBar}
        render={() => {
          return (
            <React.Fragment>
              <Header sideBar handleDarkMode={props.handleDarkMode} />
              
              <Profile />
              <div style={{ backgroundColor: theme.palette.whiteBgColor }}>
                <Footer />
              </div>
            </React.Fragment>
          );
        }}
      />
    </div>
  );
};

export default MainApp;
