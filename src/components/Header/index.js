import React from "react";
import "./css/index.css";
import AppsIcon from "@material-ui/icons/Apps";
import UserMenu from "./menu";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Drawer from "../drawer";

function Component1(props) {
  const theme = useTheme();
  const [userMenu, setUserMenu] = React.useState(null);
  const history = useHistory();
  const [anchor, setAnchor] = React.useState("");
  const [isTrue, setIsTrue] = React.useState(false);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const handleDrawer=()=>{
    setAnchor("left");
    isTrue(true);
  }

  return (
    <>
      <UserMenu userMenu={userMenu} setUserMenu={setUserMenu} />
      <div>
        <div className="container-fluid main-container">
          <nav className="navbar navbar-light hdr-nvbr-main">
            {props.sideBar && (
              <Drawer anchor={anchor} isTrue={isTrue} setIsTrue={setIsTrue} />
            )}
            {/* {props.sideBar && (
              <IconButton
                className="menu-button-styling"
                onClick={handleDrawer}
              >
                <MenuIcon />
              </IconButton>
            )} */}

            {props.authRoute || props.sideBar ? null : (
              <button
                className="navbar-toggler togl-btn-navbr"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            )}
            <a
              className={`${"navbar-brand"} ${"navi-brnd"} ${
                props.authRoute && "logoAlignMent"
              }`}
            >
              {/* logo */}
              <img
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/dashboard")}
                src="https://skyspaces.io/static/media/SkySpaces_g.531bd028.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
                loading="lazy"
                height="40"
                width="170"
              />
              {/* search input */}
              {props.authRoute ? null : (
                <>
                  <div className="search_main_div">
                    <span>
                      <i className="fas fa-search srch-icon-inside-field-input"></i>
                    </span>

                    <input
                      className="form-control mr-sm-2 srch_inpt"
                      type="search"
                      placeholder="Search in SkySpaces or download Skylink"
                      aria-label="Search"
                    />
                  </div>
                  {/* search inside nav-brand */}
                  <div className="srch_btn_main_div">
                    <button className="btn srch_btn_nvbar">
                      <label for="hidden-search-inpt">
                        <i className="fa fa-download icon_download_nvbar"></i>
                      </label>
                    </button>
                    <input type="file" id="hidden-search-inpt" />
                  </div>
                </>
              )}
            </a>

            {/* search outside nav-brand */}
            {props.authRoute ? null : (
              <div className="srch_btn_out_main_div">
                <button className="btn srch_btn_nvbar">
                  <label for="hidden-search-inpt">
                    <i className="fa fa-download icon_download_nvbar"></i>
                  </label>
                </button>
                <input type="file" id="hidden-search-inpt" />
              </div>
            )}
            {/* apps icon oustide nav-brand */}
            <div
              className="btn-icons-nvbr-div"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="butn-th-main-div">
                <button className="btn th_btn_nvbar">
                  {/* <i className="fa fa-th icon-th-nvbar"></i> */}
                  <AppsIcon
                    style={{
                      color: theme.palette.mediumGray,
                      fontSize: 35,
                      marginRight: 20,
                    }}
                  />
                </button>
              </div>
              {props.firsPage ? (
                <>
                  <div className="login-butn-main-out-div">
                    <button
                      onClick={() => history.push("/auth")}
                      type="button"
                      class="btn btn-sm butn-out-login-nvbr"
                    >
                      Login
                    </button>
                  </div>
                  <div className="signUp-butn-main-out-div">
                    <button
                      onClick={() => history.push("/auth")}
                      type="button"
                      class="btn  btn-sm butn-out-signup"
                    >
                      Sign up
                    </button>
                  </div>
                </>
              ) : props.authRoute ? null : (
                <div
                  onClick={userMenuClick}
                  style={{
                    boxShadow: "3px 3px 10px 0px rgba(50, 50, 50, 0.75)",
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "50%",
                    width: 45,
                    height: 45,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  A
                </div>
              )}
            </div>
            {/* collapse */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <div className="search_main_in_div">
                  <span className="srch-icon-inside-field-input-inside-cllpse-span">
                    <i className="fas fa-search srch-icon-inside-field-input-inside-cllpse"></i>
                  </span>

                  <input
                    className="form-control mr-sm-2 srch_inpt inside-srch-cllpse-inpt"
                    type="search"
                    placeholder="Search in SkySpaces or download Skylink"
                    aria-label="Search"
                  />
                </div>

                <div className="login-butn-main-div">
                  <button
                    onClick={() => history.push("/auth")}
                    type="button"
                    class="btn btn-success btn-sm butn-inside-clps-nvbr"
                  >
                    Login
                  </button>
                </div>
                <div className="signUp-butn-main-div">
                  <button
                    onClick={() => history.push("/auth")}
                    type="button"
                    class="btn btn-success btn-sm butn-inside-clps-nvbr"
                  >
                    Sign up
                  </button>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Component1;
