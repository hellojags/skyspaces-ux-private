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
          <Grid
            item
            xs={12}
            style={{
              padding: 0,
              backgroundColor: "white",
              marginLeft: 200,
              // marginBottom: 80,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
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

          <Grid
            item
            xs={12}
            style={{
              padding: 0,
              marginLeft: 170,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <Typography variant="span" className={classes.profileUserName}>
                  Alexandra
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 30,
                }}
              >
                <div className={classes.tabsName}>
                  <Typography
                    variant="span"
                    style={{
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
                      activeTab === 1 &&
                      `2px solid ${theme.palette.primary.main}`,
                  }}
                  onClick={() => setActiveTab(1)}
                >
                  <Typography variant="span">Image</Typography>
                </div>
                <div
                  className={classes.tabsName}
                  style={{
                    borderBottom:
                      activeTab === 2 &&
                      `2px solid ${theme.palette.primary.main}`,
                  }}
                  onClick={() => setActiveTab(2)}
                >
                  <Typography variant="span">Videos</Typography>
                </div>
                <div
                  className={classes.tabsName}
                  style={{
                    borderBottom:
                      activeTab === 3 &&
                      `2px solid ${theme.palette.primary.main}`,
                  }}
                  onClick={() => setActiveTab(3)}
                >
                  <Typography variant="span">Documents</Typography>
                </div>
              </div>
              <div
                className="search_main_div"
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: 20,
                }}
              >
                <span>
                  <i
                    className="fas fa-search srch-icon-inside-field-input"
                    style={{
                      position: "relative",
                      left: "32px",
                      top: "0px",
                    }}
                  ></i>
                </span>

                <input
                  className="form-control mr-sm-2 srch_inpt"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
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
          {/* <Grid
            item
            xs={12}
            style={{
              padding: 0,
              marginLeft: 170,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <Typography variant="span" className={classes.profileUserName}>
                  Alexandra
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 30,
                }}
              >
                <div className={classes.tabsName}>
                  <Typography
                    variant="span"
                    style={{
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
                      activeTab === 1 &&
                      `2px solid ${theme.palette.primary.main}`,
                  }}
                  onClick={() => setActiveTab(1)}
                >
                  <Typography variant="span">Image</Typography>
                </div>
                <div
                  className={classes.tabsName}
                  style={{
                    borderBottom:
                      activeTab === 2 &&
                      `2px solid ${theme.palette.primary.main}`,
                  }}
                  onClick={() => setActiveTab(2)}
                >
                  <Typography variant="span">Videos</Typography>
                </div>
                <div
                  className={classes.tabsName}
                  style={{
                    borderBottom:
                      activeTab === 3 &&
                      `2px solid ${theme.palette.primary.main}`,
                  }}
                  onClick={() => setActiveTab(3)}
                >
                  <Typography variant="span">Documents</Typography>
                </div>
              </div>
              <div
                className="search_main_div"
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: 20,
                }}
              >
                <span>
                  <i
                    className="fas fa-search srch-icon-inside-field-input"
                    style={{
                      position: "relative",
                      left: "32px",
                      top: "0px",
                    }}
                  ></i>
                </span>

                <input
                  className="form-control mr-sm-2 srch_inpt"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
          </Grid> */}
        </>
      )}

      {/* for tab or mobile mode */}

      <Grid item lg={3} xs={12} md={6} sm={12}>
        <LeftSideBar />
      </Grid>
      <Grid item lg={5} xs={12} md={6} sm={12}>
        {getStepContent(activeTab)}
      </Grid>
      <Grid item lg={4} xs={12} md={12} sm={12}>
        <RightSideBar />
      </Grid>
    </Grid>
  );
};

export default ProfileMain;
