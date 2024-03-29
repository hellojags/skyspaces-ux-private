import React from "react";
import Grid from "@material-ui/core/Grid";
import LeftSideBar from "./leftSideBar";
import PublicSpaces from "./tabs/publicSpace";
import RightSideBar from "./rightSideBar";
import { useTheme } from "@material-ui/core/styles";
import coverImage from "../../assets/dataset-cover.jpg";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import useMediaQuery from "@material-ui/core/useMediaQuery";

/**
 * @author
 * @function ProfileMain
 **/

const ProfileMain = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1145px)");

  const [activeTab, setActiveTab] = React.useState(0);

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PublicSpaces />;
      case 1:
        return "fsd";
      case 2:
        return "fds";

      default:
        return "unknown step";
    }
  }

  return (
    <Grid
      container
      spacing={3}
      style={{
        width: "100%",
        margin: "0",
        backgroundColor: theme.palette.lightGray,
      }}
    >
      {/* for desktop mode */}

      {matches ? (
        <>
          <Grid item xs={12} style={{ padding: 0 }}>
            <div>
              <img src={coverImage} style={{ width: "100%", height: 250 }} />
              <img
                src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
                className={classes.profileImage}
              />
            </div>
          </Grid>
          <Grid className={classes.followingBgColor} item xs={12}>
            <div className={classes.listOfProfile}>
              <div>
                <Typography
                  variant="span"
                  className={classes.profileListHeadings}
                >
                  FOLLOWING
                </Typography>
                <div>
                  <Typography
                    variant="span"
                    className={classes.profileListCounts}
                  >
                    472
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant="span"
                  className={classes.profileListHeadings}
                >
                  FOLLOWERS
                </Typography>
                <div>
                  <Typography
                    variant="span"
                    className={classes.profileListCounts}
                  >
                    11
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant="span"
                  className={classes.profileListHeadings}
                >
                  STORAGE
                </Typography>
                <div>
                  <Typography
                    variant="span"
                    className={classes.profileListCounts}
                  >
                    57 MB
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant="span"
                  className={classes.profileListHeadings}
                >
                  UPLOAD
                </Typography>
                <div>
                  <Typography
                    variant="span"
                    className={classes.profileListCounts}
                  >
                    21
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  marginRight: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.followingButton}
                  startIcon={<PersonOutlineIcon />}
                >
                  FOLLOWING
                </Button>
              </div>
            </div>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} style={{ padding: 0 }}>
            <div style={{ position: "relative" }}>
              <img src={coverImage} style={{ width: "100%", height: 250 }} />

              <img
                src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
                className={classes.profileImageForMobile}
              />
            </div>
          </Grid>
          <Grid item xs={12} className={classes.profileUserNameMobile}>
            <Typography variant="span" className={classes.profileUserName}>
              Alexandra
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              padding: 0,
              backgroundColor: "white",

              // paddingTop: 20,
              // paddingBottom: 20,
            }}
          >
            <div className={classes.listOfProfileForMobile}>
              <div className={classes.settinTopBottom}>
                <Typography
                  variant="span"
                  className={classes.profileListHeadings}
                >
                  FOLLOWING
                </Typography>
                <div>
                  <Typography
                    variant="span"
                    className={classes.profileListCounts}
                  >
                    472
                  </Typography>
                </div>
              </div>
              <div className={classes.settinTopBottom}>
                <Typography
                  variant="span"
                  className={classes.profileListHeadings}
                >
                  FOLLOWERS
                </Typography>
                <div>
                  <Typography
                    variant="span"
                    className={classes.profileListCounts}
                  >
                    11
                  </Typography>
                </div>
              </div>
              <div className={classes.settinTopBottom}>
                <Typography
                  variant="span"
                  className={classes.profileListHeadings}
                >
                  STORAGE
                </Typography>
                <div>
                  <Typography
                    variant="span"
                    className={classes.profileListCounts}
                  >
                    57 MB
                  </Typography>
                </div>
              </div>
              <div className={classes.settinTopBottom}>
                <Typography
                  variant="span"
                  className={classes.profileListHeadings}
                >
                  UPLOAD
                </Typography>
                <div>
                  <Typography
                    variant="span"
                    className={classes.profileListCounts}
                  >
                    21
                  </Typography>
                </div>
              </div>
              <div
                className={`stngTopFollowingbtn ${classes.settinTopBottom}`}
                style={{
                  marginRight: 20,
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className={`followingButton ${classes.followingButton}`}
                  startIcon={<PersonOutlineIcon />}
                >
                  FOLLOWING
                </Button>
              </div>
            </div>
          </Grid>
        </>
      )}

      {/* for tab or mobile mode */}
      <Grid
        container
        spacing={3}
        style={{
          width: "95%",
          margin: "auto",
          paddingTop: 20,
          // backgroundColor: theme.palette.lightGray,
        }}
      >
        <Grid
          item
          lg={3}
          xs={12}
          md={6}
          sm={12}
          style={{
            marginTop: 69,
          }}
        >
          <LeftSideBar />
        </Grid>
        <Grid item lg={6} xs={12} md={6} sm={12} className="cenetr_prfl_grid">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 30,
              flexWrap: "wrap",
              padding: 0,
            }}
          >
            <div className={`tabsName ${classes.tabsName}`}>
              <Typography
                variant="span"
                style={{
                  color: theme.palette.linksColor,
                  fontWeight: 500,
                  paddingBottom: 10,
                  borderBottom:
                    activeTab === 0 &&
                    `2px solid ${theme.palette.primary.main}`,
                }}
                // className={classes.tabsName}
                onClick={() => setActiveTab(0)}
              >
                Public Space
              </Typography>
            </div>
            <div
              className={classes.tabsName}
              style={{
                borderBottom:
                  activeTab === 1 && `2px solid ${theme.palette.primary.main}`,
              }}
              onClick={() => setActiveTab(1)}
            >
              <Typography
                variant="span"
                style={{
                  fontWeight: 500,
                  color: theme.palette.linksColor,
                }}
              >
                Image
              </Typography>
            </div>
            <div
              className={classes.tabsName}
              style={{
                borderBottom:
                  activeTab === 2 && `2px solid ${theme.palette.primary.main}`,
              }}
              onClick={() => setActiveTab(2)}
            >
              <Typography
                variant="span"
                style={{
                  fontWeight: 500,
                  color: theme.palette.linksColor,
                }}
              >
                Videos
              </Typography>
            </div>
            <div
              className={classes.tabsName}
              style={{
                borderBottom:
                  activeTab === 3 && `2px solid ${theme.palette.primary.main}`,
              }}
              onClick={() => setActiveTab(3)}
            >
              <Typography
                variant="span"
                style={{
                  fontWeight: 500,
                  color: theme.palette.linksColor,
                }}
              >
                Documents
              </Typography>
            </div>
          </div>
          <div className={classes.centerBar}>{getStepContent(activeTab)}</div>
        </Grid>
        <Grid item lg={3} xs={12} md={12} sm={12}>
          <div
            className="search_main_div_changed"
            style={{
              // width: "40%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 30,
              // marginLeft: 20,
            }}
          >
            <span style={{ position: "relative" }}>
              <i
                className="fas fa-search srch-icon-inside-field-input"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  marginTop: -9,
                  marginLeft: 11,
                }}
              ></i>
            </span>

            <input
              className={`form-control mr-sm-2 srch_inpt ${classes.searchBgColor}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <RightSideBar />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileMain;
