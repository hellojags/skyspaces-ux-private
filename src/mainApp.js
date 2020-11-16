import React from "react";
import ComponentOne from "./components/component2";
import Component3 from "./components/component3";
import { Route } from "react-router-dom";
import Header from "./components/Header/index";
import Auth from "./components/Auth";
import SideBar from "./components/sideBar";
import Profile from "./components/profile";
import Footer from './components/Footer';

/**
 * @author
 * @function MainApp
 **/

const MainApp = (props) => {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <React.Fragment>
              <Header firsPage />
              <div style={{ paddingTop: 80 }}>
                <ComponentOne />
                <Component3 />
              </div>
              <div>
<Footer/>
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
              <div style={{ paddingTop: 50 }}>
                <Auth />
              </div>
              <div>
<Footer/>
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
              <Header sideBar />
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
              <Header sideBar />
              <Profile />
            </React.Fragment>
          );
        }}
      />
    </>
  );
};

export default MainApp;
