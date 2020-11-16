import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
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
import editDocIcon from "../sideBar/images/writing.png";
import { BiCoinStack } from "react-icons/bi";
import { ImTree } from "react-icons/im";
import { FaShareSquare } from "react-icons/fa";
import useStyles from "../sideBar/styles";
import InnerIcon from "../sideBar/images/icon.jpeg";

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="main-example">
        <div className={classes.sideNavContainerForDrawer}>
          {/* for section one */}
          <div>
            <img
              src="https://skyspaces.io/static/media/SkySpaces_g.531bd028.png"
              style={{ width: 200, height: 50, marginBottom: 15 }}
            />
          </div>
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
            <img
              src={editDocIcon}
              className={classes.iconStyling}
              style={{ height: "20px" }}
            />
            {/* <ExitToAppIcon className={classes.iconStyling} /> */}
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
        </div>
        <div className={classes.sideProf_div}>
          {/* 1st side Inner icon */}
          <div className={classes.innerSideProf_div}>
            <div className={classes.icon_side_inner_div}>
              <img
                src={InnerIcon}
                style={{
                  width: "25px",
                  borderRadius: "100%",
                  height: "25px",
                }}
              />
            </div>
            <div style={{ paddingLeft: "20px", marginTop: "-5px" }}>
              <span style={{ fontSize: "12px" }}>jollyvector</span>
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
                src={InnerIcon}
                style={{
                  width: "25px",
                  borderRadius: "100%",
                  height: "25px",
                }}
              />
            </div>
            <div style={{ paddingLeft: "20px", marginTop: "-5px" }}>
              <span style={{ fontSize: "12px" }}>jollyvector</span>
              <div className={classes.icon_sub_title_div}>
                Audio Space
                <span style={{ color: "#1ed660", paddingLeft: "7px" }}>
                  (25)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
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
  );

  return (
    <React.Fragment key={"left"}>
      <IconButton
        className="menu-button-styling"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
}
