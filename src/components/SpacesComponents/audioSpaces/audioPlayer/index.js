import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Slider from "@material-ui/core/Slider";
// import Typography from '@material-ui/core/Typography';
import CachedIcon from "@material-ui/icons/Cached";
import MenuIcon from "@material-ui/icons/Menu";
import VolumeUp from "@material-ui/icons/VolumeUp";
import ClearIcon from "@material-ui/icons/Clear";

/**
 * @author
 * @function AudioPlayer
 **/

const AudioPlayer = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={12} style={{ position: "sticky", bottom: 0 }}>
      <Paper className={classes.paperStyling}>
        <Grid container spacing={3} style={{ width: "100%", margin: 0 }}>
          <Grid item lg={8} sm={8} xs={12} md={8}>
            <div className={classes.sliderPlusPlayIcons}>
              <div>
                <SkipPreviousIcon className={classes.mediaPlayIcons} />
                <PlayArrowIcon className={classes.mediaPlayIconsPlayer} />
                <SkipNextIcon className={classes.mediaPlayIcons} />
              </div>
              <div className={classes.rootP}>
                <span className={classes.duration}>02:32</span>{" "}
                <Slider
                  value={value}
                  onChange={handleChange}
                  className={classes.sliderStyle}
                  aria-labelledby="continuous-slider"
                />
                <span className={classes.duration}>04:32</span>
              </div>
              <div style={{ marginLeft: 30 }}>
                <CachedIcon className={classes.rePlayIcon} />
              </div>
              <div style={{ marginLeft: 30 }}>
                <MenuIcon className={classes.rePlayIcon} />
              </div>
            </div>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={12}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                width: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <VolumeUp className={classes.rePlayIcon} />
              <Slider
                style={{ marginLeft: 7 }}
                value={value}
                onChange={handleChange}
                aria-labelledby="continuous-slider"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingLeft: 5,
              }}
            >
              <ClearIcon />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AudioPlayer;
