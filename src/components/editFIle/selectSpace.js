import React from "react";
import useStyles from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

/**
 * @author
 * @function AuthComponent
 **/

const AuthComponent = (props) => {
  // State
  //   const [thumbnail, setThumb] = React.useState("");
  // Style
  const classes = useStyles();

  // functions

  return (
    <Grid container spacing={3} style={{ paddingBottom: "10px", margin: "0" }}>
      <Grid item xs={2}>
        <Typography className={classes.selectSpaces_title}>Spaces</Typography>
      </Grid>

      <Grid item xs={10} className={classes.selectSpace_title_btns_grid}>
        {/*  All */}
        <Typography
          variant="span"
          className={classes.ss_title_head_image_text}
        >
          Super Space
        </Typography>

        {/* Image */}
        <Typography
          variant="span"
          className={classes.ss_title_head_image_text}
        >
          Music Space
        </Typography>
        {/* videos */}

        <Typography
          variant="span"
          className={classes.ss_title_head_image_text}
        >
          Videos
        </Typography>

        {/* Document */}
        <Typography
          variant="span"
          className={classes.ss_title_head_image_text}
        >
          Documents
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AuthComponent;
