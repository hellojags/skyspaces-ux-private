import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VerticalSplitOutlinedIcon from "@material-ui/icons/VerticalSplitOutlined";
import Typography from "@material-ui/core/Typography";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

/**
 * @author
 * @function Cards
 **/

const Cards = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid item lg={6} md={12} sm={6} xs={12}>
        <Paper className={classes.paperStyling}>
          <div className={classes.cardContainer}>
            <VerticalSplitOutlinedIcon className={classes.spaceIcons} />
            <div className={classes.rightContentCon}>
              <div className={classes.rightSideTop}>
                <Typography variant="span" className={classes.spaceName}>
                  Freedom Space
                </Typography>
                <ScreenShareIcon className={classes.shareIconColor} />
              </div>
              <div style={{ paddingTop: 20, paddingBottom: 10 }}>
                <Typography variant="span" className={classes.createAt}>
                  Create Time :{" "}
                </Typography>
                <Typography variant="span" className={classes.createAtTime}>
                  01:24:12 pm <span>|</span> 12/09/2020
                </Typography>
              </div>
              <div style={{ paddingBottom: 10, lineHeight: 1 }}>
                <Typography variant="span" className={classes.paragraph}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </Typography>
              </div>
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Typography variant="span" className={classes.status}>
                  Status
                </Typography>
                <Typography variant="span" className={classes.sharedBg}>
                  Shared
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
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={6} md={12} sm={6} xs={12}>
        <Paper className={classes.paperStyling}>
          <div className={classes.cardContainer}>
            <VerticalSplitOutlinedIcon className={classes.spaceIcons} />
            <div className={classes.rightContentCon}>
              <div className={classes.rightSideTop}>
                <Typography variant="span" className={classes.spaceName}>
                  Freedom Space
                </Typography>
                <ScreenShareIcon className={classes.shareIconColor} />
              </div>
              <div style={{ paddingTop: 20, paddingBottom: 10 }}>
                <Typography variant="span" className={classes.createAt}>
                  Create Time :{" "}
                </Typography>
                <Typography variant="span" className={classes.createAtTime}>
                  01:24:12 pm <span>|</span> 12/09/2020
                </Typography>
              </div>
              <div style={{ paddingBottom: 10, lineHeight: 1 }}>
                <Typography variant="span" className={classes.paragraph}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </Typography>
              </div>
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Typography variant="span" className={classes.status}>
                  Status
                </Typography>
                <Typography variant="span" className={classes.privatedBg}>
                  Shared
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
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>

      <Grid item lg={6} md={12} sm={6} xs={12}>
        <Paper className={classes.paperStyling}>
          <div className={classes.cardContainer}>
            <VerticalSplitOutlinedIcon className={classes.spaceIcons} />
            <div className={classes.rightContentCon}>
              <div className={classes.rightSideTop}>
                <Typography variant="span" className={classes.spaceName}>
                  Freedom Space
                </Typography>
                <ScreenShareIcon className={classes.shareIconColor} />
              </div>
              <div style={{ paddingTop: 20, paddingBottom: 10 }}>
                <Typography variant="span" className={classes.createAt}>
                  Create Time :{" "}
                </Typography>
                <Typography variant="span" className={classes.createAtTime}>
                  01:24:12 pm <span>|</span> 12/09/2020
                </Typography>
              </div>
              <div style={{ paddingBottom: 10, lineHeight: 1 }}>
                <Typography variant="span" className={classes.paragraph}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </Typography>
              </div>
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Typography variant="span" className={classes.status}>
                  Status
                </Typography>
                <Typography variant="span" className={classes.publicdBg}>
                  Shared
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
