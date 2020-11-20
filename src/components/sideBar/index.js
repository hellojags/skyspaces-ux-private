import React from "react";
import useStyles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BackupIcon from "@material-ui/icons/Backup";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import VerticalSplitOutlinedIcon from "@material-ui/icons/VerticalSplitOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import WifiIcon from "@material-ui/icons/Wifi";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SImpleFooter from "../Footer/simpleFooter";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import UploadContent from "../upload-content";
import SpacesTabs from "../spacesTabs";
import SharedSpaces from "../sharedSpaces";
import ActivityHistory from "../ActivityHistory/index";
import Settings from "../settings/index";
import EditFIle from "../editFIle/index";
import { AiOutlineUpload } from "react-icons/ai";
import editDocIcon from "./images/writing.png";
import { BiCoinStack } from "react-icons/bi";
import { ImTree } from "react-icons/im";
import { FaShareSquare } from "react-icons/fa";
import FooterDashboard from "../Footer/simpleFooter";
import SettingComponent from "../settings";
import InnerIcon from "./images/icon.jpeg";
import { BsFileText } from "react-icons/bs";

// import Header from "../Header";
// import { Switch } from "@material-ui/core";

/**
 * @author
 * @function SideBar
 **/

const SideBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:950px)");

  const drawer = (
    <>
      {/* <Header /> */}
      <div className="main-example">
        <div className={classes.sideNavContainer}>
          {/* for section one */}

          <div className={classes.linksStyles}>
            <AiOutlineUpload className={classes.iconStyling} />
            <Typography variant="span">
              <Link to="/dashboard" className={classes.linkName}>
                Upload
              </Link>
            </Typography>
          </div>

          <div className={classes.linksStyles}>
            <AddBoxOutlinedIcon className={classes.iconStyling} />
            <Typography variant="span" className={classes.linkName}>
              New
            </Typography>
          </div>

          <div className={classes.linksStyles}>
            {/* <img
              src={editDocIcon}
              className={classes.iconStyling}
              style={{ height: "20px" }}
            /> */}
            <BsFileText className={classes.iconStyling} />
            <Typography variant="span" className={classes.linkName}>
              Register
            </Typography>
          </div>

          {/* for section two */}
          <div className={classes.spaceLinkStyle}>
            <span>
              <BiCoinStack className={classes.spaceIcon} />
              <Typography variant="span">
                <Link to="/dashboard/spaces" className={classes.linkName}>
                  Spaces
                </Link>
              </Typography>
            </span>
            <span>
              <AddCircleOutlineIcon className={classes.spaceIcon} />
            </span>
          </div>
          {/* expanded */}
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Animal Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              {/* <EditOutlinedIcon className={classes.editIconStyle} /> */}

              <FaShareSquare className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Freedom Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              {/* <EditOutlinedIcon className={classes.editIconStyle} /> */}

              <FaShareSquare className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Super Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              {/* <EditOutlinedIcon className={classes.editIconStyle} /> */}

              <FaShareSquare className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Music Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              {/* <EditOutlinedIcon className={classes.editIconStyle} /> */}

              <FaShareSquare className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Video Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              {/* <EditOutlinedIcon className={classes.editIconStyle} /> */}

              <FaShareSquare className={classes.shareIconStyle} />
            </span>
          </div>
          <div className={classes.spacesCont}>
            <span>
              <BookmarkIcon className={classes.spaceBookIcon} />
              <Typography variant="span" className={classes.spacelinkName}>
                Demo Space <span className={classes.spacesNumber}>(12)</span>
              </Typography>
            </span>
            <span>
              {/* <EditOutlinedIcon className={classes.editIconStyle} /> */}

              <FaShareSquare className={classes.shareIconStyle} />
            </span>
          </div>

          <div className={classes.spaceLinkStyle}>
            <span>
              <ImTree className={classes.iconStyling} />
              <Typography variant="span">
                <Link to="/dashboard/sharedSpaces" className={classes.linkName}>
                  {" "}
                  Shared Spaces
                </Link>
              </Typography>
            </span>
            <span>
              <AddCircleOutlineIcon className={classes.spaceIcon} />
            </span>
          </div>

          <div className={classes.sideProf_div}>
            {/* 1st side Inner icon */}
            <div className={classes.innerSideProf_div}>
              <div className={classes.icon_side_inner_div}>
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  style={{
                    width: "25px",
                    borderRadius: "100%",
                    height: "25px",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                <span
                  style={{ fontSize: "12px" }}
                  className={classes.sharedSpace_names}
                >
                  jollyvector
                </span>
                <div className={classes.icon_sub_title_div}>
                  Video Space
                  <span style={{ color: "#1ed660", paddingLeft: "7px" }}>
                    (13)
                  </span>
                </div>
              </div>
            </div>

            {/* 2nd side inner icon */}

            <div className={classes.innerSideProf2_div}>
              <div className={classes.icon_side_inner_div}>
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  style={{
                    width: "25px",
                    borderRadius: "100%",
                    height: "25px",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "20px", marginTop: "-5px" }}>
                <span
                  style={{ fontSize: "12px" }}
                  className={classes.sharedSpace_names}
                >
                  jollyvector
                </span>
                <div className={classes.icon_sub_title_div}>
                  Audio Space
                  <span style={{ color: "#1ed660", paddingLeft: "7px" }}>
                    (25)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: "30px" }}>
            <div className={classes.image_logo_sideBarfooter}>
              <img
                src="https://skyspaces.io/static/media/Sia.7dd07c88.svg"
                height="60"
                width="60"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden> */}
        {matches ? (
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        ) : null}
      </nav>
      <main className={matches ? classes.content : classes.contentBgColor}>
        <Route
          exact
          path="/dashboard"
          render={() => {
            return (
              <React.Fragment>
                <div
                  style={{
                    paddingTop: 40,
                    minHeight: "calc(100vh - 70px)",
                  }}
                >
                  <UploadContent />
                </div>
              </React.Fragment>
            );
          }}
        />

        <Route
          path="/dashboard/spaces"
          render={() => {
            return (
              <React.Fragment>
                <div
                  style={{ paddingTop: 70, minHeight: "calc(100vh - 100px)" }}
                >
                  <SpacesTabs />
                </div>
              </React.Fragment>
            );
          }}
        />

        <Route
          path="/dashboard/sharedSpaces"
          render={() => {
            return (
              <React.Fragment>
                <div style={{ paddingTop: 70, minHeight: "100vh" }}>
                  <SharedSpaces />
                </div>
              </React.Fragment>
            );
          }}
        />

        <Route
          path="/dashboard/setting"
          render={() => {
            return (
              <React.Fragment>
                <div style={{ paddingTop: 70 }}>
                  <SettingComponent />
                </div>
              </React.Fragment>
            );
          }}
        />

        <Route
          path="/dashboard/history"
          render={() => {
            return (
              <React.Fragment>
                <div style={{ paddingTop: 40 }}>
                  <ActivityHistory />
                </div>
              </React.Fragment>
            );
          }}
        />

        <div>
          <FooterDashboard />
        </div>
      </main>
    </div>
  );
};

export default SideBar;
