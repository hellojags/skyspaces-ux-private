import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import VerticalSplitOutlinedIcon from "@material-ui/icons/VerticalSplitOutlined";
import Typography from "@material-ui/core/Typography";
// import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ImageIcon from "@material-ui/icons/Image";
import HeadsetIcon from "@material-ui/icons/Headset";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useTheme } from "@material-ui/core/styles";

/**
 * @author
 * @function Cards
 **/

const Cards = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [cardChecked, setCardChecked] = React.useState("");

  return (
    <>
      <Grid item lg={6} md={12} sm={6} xs={12}>
        <Paper
          className={classes.paperStyling}
          onClick={() => setCardChecked(0)}
          style={{
            backgroundColor:
              cardChecked === 0 ? theme.palette.lightGreen : null,
          }}
        >
          <div className={classes.cardContainer}>
            <HeadsetIcon className={classes.spaceIcons} />
            <div className={classes.rightContentCon}>
              <div className={classes.rightSideTop}>
                <Typography variant="span" className={classes.spaceName}>
                  vevo cross the limits.mp3
                </Typography>
                {/* <ScreenShareIcon className={classes.shareIconColor} /> */}
              </div>
              <div
                style={{ paddingTop: 20, paddingBottom: 10, display: "flex" }}
              >
                <div>
                  <Typography variant="span" className={classes.createAt}>
                    Content Type :{" "}
                  </Typography>
                  <Typography variant="span" className={classes.createAtTime}>
                    Image/jpg
                  </Typography>
                </div>
                <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
                <div>
                  <Typography variant="span" className={classes.createAt}>
                    Content Size :{" "}
                  </Typography>
                  <Typography variant="span" className={classes.createAtTime}>
                    701.56KB
                  </Typography>
                </div>
              </div>
              <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Typography variant="span" className={classes.createAt}>
                  Create Time :{" "}
                </Typography>
                <Typography variant="span" className={classes.createAtTime}>
                  01:24:12 pm <span>|</span> 12/09/2020
                </Typography>
              </div>

              <div
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div>
                  <Typography variant="span" className={classes.status}>
                    Tags
                  </Typography>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Typography variant="span" className={classes.tagsBg}>
                    Demo
                  </Typography>
                  <Typography variant="span" className={classes.tagsBg}>
                    Sia
                  </Typography>
                  <Typography variant="span" className={classes.tagsBg}>
                    Lunch
                  </Typography>
                </div>
                <div>
                  <EditOutlinedIcon className={classes.tagEditIcon} />
                  <InfoOutlinedIcon className={classes.tagEditIcon} />
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={6} md={12} sm={6} xs={12}>
        <Paper
          onClick={() => setCardChecked(1)}
          style={{
            backgroundColor:
              cardChecked === 1 ? theme.palette.lightGreen : null,
          }}
          className={classes.paperStyling}
        >
          <div className={classes.cardContainer}>
            <HeadsetIcon className={classes.spaceIcons} />
            <div className={classes.rightContentCon}>
              <div className={classes.rightSideTop}>
                <Typography variant="span" className={classes.spaceName}>
                  vevo cross the limits.mp3
                </Typography>
                {/* <ScreenShareIcon className={classes.shareIconColor} /> */}
              </div>
              <div
                style={{ paddingTop: 20, paddingBottom: 10, display: "flex" }}
              >
                <div>
                  <Typography variant="span" className={classes.createAt}>
                    Content Type :{" "}
                  </Typography>
                  <Typography variant="span" className={classes.createAtTime}>
                    Image/jpg
                  </Typography>
                </div>
                <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
                <div>
                  <Typography variant="span" className={classes.createAt}>
                    Content Size :{" "}
                  </Typography>
                  <Typography variant="span" className={classes.createAtTime}>
                    701.56KB
                  </Typography>
                </div>
              </div>
              <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Typography variant="span" className={classes.createAt}>
                  Create Time :{" "}
                </Typography>
                <Typography variant="span" className={classes.createAtTime}>
                  01:24:12 pm <span>|</span> 12/09/2020
                </Typography>
              </div>

              <div
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div>
                  <Typography variant="span" className={classes.status}>
                    Tags
                  </Typography>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Typography variant="span" className={classes.tagsBg}>
                    Demo
                  </Typography>
                  <Typography variant="span" className={classes.tagsBg}>
                    Sia
                  </Typography>
                  <Typography variant="span" className={classes.tagsBg}>
                    Lunch
                  </Typography>
                </div>
                <div>
                  <EditOutlinedIcon className={classes.tagEditIcon} />
                  <InfoOutlinedIcon className={classes.tagEditIcon} />
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>

      <Grid item lg={6} md={12} sm={6} xs={12}>
        <Paper
          onClick={() => setCardChecked(2)}
          style={{
            backgroundColor:
              cardChecked === 2 ? theme.palette.lightGreen : null,
          }}
          className={classes.paperStyling}
        >
          <div className={classes.cardContainer}>
            <HeadsetIcon className={classes.spaceIcons} />
            <div className={classes.rightContentCon}>
              <div className={classes.rightSideTop}>
                <Typography variant="span" className={classes.spaceName}>
                  vevo cross the limits.mp3
                </Typography>
                {/* <ScreenShareIcon className={classes.shareIconColor} /> */}
              </div>
              <div
                style={{ paddingTop: 20, paddingBottom: 10, display: "flex" }}
              >
                <div>
                  <Typography variant="span" className={classes.createAt}>
                    Content Type :{" "}
                  </Typography>
                  <Typography variant="span" className={classes.createAtTime}>
                    Image/jpg
                  </Typography>
                </div>
                <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
                <div>
                  <Typography variant="span" className={classes.createAt}>
                    Content Size :{" "}
                  </Typography>
                  <Typography variant="span" className={classes.createAtTime}>
                    701.56KB
                  </Typography>
                </div>
              </div>
              <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Typography variant="span" className={classes.createAt}>
                  Create Time :{" "}
                </Typography>
                <Typography variant="span" className={classes.createAtTime}>
                  01:24:12 pm <span>|</span> 12/09/2020
                </Typography>
              </div>

              <div
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div>
                  <Typography variant="span" className={classes.status}>
                    Tags
                  </Typography>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Typography variant="span" className={classes.tagsBg}>
                    Demo
                  </Typography>
                  <Typography variant="span" className={classes.tagsBg}>
                    Sia
                  </Typography>
                  <Typography variant="span" className={classes.tagsBg}>
                    Lunch
                  </Typography>
                </div>
                <div>
                  <EditOutlinedIcon className={classes.tagEditIcon} />
                  <InfoOutlinedIcon className={classes.tagEditIcon} />
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>

      <Grid item lg={6} md={12} sm={6} xs={12}>
        <Paper
          onClick={() => setCardChecked(3)}
          style={{
            backgroundColor:
              cardChecked === 3 ? theme.palette.lightGreen : null,
          }}
          className={classes.paperStyling}
        >
          <div className={classes.cardContainer}>
            <HeadsetIcon className={classes.spaceIcons} />
            <div className={classes.rightContentCon}>
              <div className={classes.rightSideTop}>
                <Typography variant="span" className={classes.spaceName}>
                  vevo cross the limits.mp3
                </Typography>
                {/* <ScreenShareIcon className={classes.shareIconColor} /> */}
              </div>
              <div
                style={{ paddingTop: 20, paddingBottom: 10, display: "flex" }}
              >
                <div>
                  <Typography variant="span" className={classes.createAt}>
                    Content Type :{" "}
                  </Typography>
                  <Typography variant="span" className={classes.createAtTime}>
                    Image/jpg
                  </Typography>
                </div>
                <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
                <div>
                  <Typography variant="span" className={classes.createAt}>
                    Content Size :{" "}
                  </Typography>
                  <Typography variant="span" className={classes.createAtTime}>
                    701.56KB
                  </Typography>
                </div>
              </div>
              <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Typography variant="span" className={classes.createAt}>
                  Create Time :{" "}
                </Typography>
                <Typography variant="span" className={classes.createAtTime}>
                  01:24:12 pm <span>|</span> 12/09/2020
                </Typography>
              </div>

              <div
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div>
                  <Typography variant="span" className={classes.status}>
                    Tags
                  </Typography>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Typography variant="span" className={classes.tagsBg}>
                    Demo
                  </Typography>
                  <Typography variant="span" className={classes.tagsBg}>
                    Sia
                  </Typography>
                  <Typography variant="span" className={classes.tagsBg}>
                    Lunch
                  </Typography>
                </div>
                <div>
                  <EditOutlinedIcon className={classes.tagEditIcon} />
                  <InfoOutlinedIcon className={classes.tagEditIcon} />
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default Cards;
