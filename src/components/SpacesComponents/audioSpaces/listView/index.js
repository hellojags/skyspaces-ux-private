import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Paper from "@material-ui/core/Paper";
import HeadsetIcon from "@material-ui/icons/Headset";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import AudioPlayer from "../audioPlayer";

/**
 * @author
 * @function AllSpacesListView
 **/

const AllSpacesListView = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} style={{ width: "100%", margin: "auto" }}>
      <Grid item xs={12} style={{ marginTop: 10 }}>
        <Paper className={classes.paperStyling}>
          <Grid container spacing={3} style={{ width: "100%", margin: "auto" }}>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <HeadsetIcon className={classes.spaceIcons} />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <Typography variant="span" className={classes.spaceName}>
                    vevo cross the limits.mp3
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    Image/jpg
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    701.56KB
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    01:24:12 pm <span>|</span> 12/09/2020
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div
                style={{
                  //   marginTop: 8,
                  // marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ paddingLeft: 62 }}>
                  <Typography variant="span" className={classes.status}>
                    Tags
                  </Typography>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
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
                    <EditOutlinedIcon
                      className={classes.tagEditIcon}
                      style={{ marginRight: 8 }}
                    />
                    <InfoOutlinedIcon className={classes.tagEditIcon} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} style={{ marginTop: 10 }}>
        <Paper className={classes.paperStyling}>
          <Grid container spacing={3} style={{ width: "100%", margin: "auto" }}>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <HeadsetIcon className={classes.spaceIcons} />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <Typography variant="span" className={classes.spaceName}>
                    vevo cross the limits.mp3
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    Image/jpg
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    701.56KB
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    01:24:12 pm <span>|</span> 12/09/2020
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div
                style={{
                  //   marginTop: 8,
                  // marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ paddingLeft: 62 }}>
                  <Typography variant="span" className={classes.status}>
                    Tags
                  </Typography>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
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
                    <EditOutlinedIcon
                      className={classes.tagEditIcon}
                      style={{ marginRight: 8 }}
                    />
                    <InfoOutlinedIcon className={classes.tagEditIcon} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} style={{ marginTop: 10 }}>
        <Paper className={classes.paperStyling}>
          <Grid container spacing={3} style={{ width: "100%", margin: "auto" }}>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <HeadsetIcon className={classes.spaceIcons} />
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <Typography variant="span" className={classes.spaceName}>
                    vevo cross the limits.mp3
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    Image/jpg
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    701.56KB
                  </Typography>
                </div>
                <div style={{ paddingLeft: 30 }}>
                  <Typography variant="span" className={classes.createAtTime}>
                    01:24:12 pm <span>|</span> 12/09/2020
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div
                style={{
                  //   marginTop: 8,
                  // marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ paddingLeft: 62 }}>
                  <Typography variant="span" className={classes.status}>
                    Tags
                  </Typography>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
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
                    <EditOutlinedIcon
                      className={classes.tagEditIcon}
                      style={{ marginRight: 8 }}
                    />
                    <InfoOutlinedIcon className={classes.tagEditIcon} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <AudioPlayer />
    </Grid>
  );
};

export default AllSpacesListView;
