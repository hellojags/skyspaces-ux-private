import React from "react";
import useStyles from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
/**
 * @author
 * @function AuthComponent
 **/

const AuthComponent = (props) => {
  // State
  const [imageStatus, setImageStatus] = React.useState(false);
  const [selectedImagesLength, setSelectedImagesLength] = React.useState([]);

  // Style
  const classes = useStyles();

  // functions
  const handleClick = (e) => {
    let arr = [...selectedImagesLength, e.target.name];
    setImageStatus(!imageStatus);
    props.handleUploadSection(!imageStatus);

    if (imageStatus == false) {
      setSelectedImagesLength(arr);
      console.log("arr", arr);
    } else {
      let filteredArr = selectedImagesLength.filter((item) => {
        // console.log("item", selectedImagesLength);
        return item != e.target.name;
      });
      setSelectedImagesLength(filteredArr);

      console.log("filter", filteredArr);
    }
  };
  return (
    <Grid
      container
      spacing={3}
      className={` most_main_grid_gallery ${classes.most_main_grid_gallery}`}
    >
      <Grid
        item
        xs={12}
        className={classes.main_grid_gallery}
        style={{ paddingTop: "0px" }}
      >
        <Paper className={`${classes.paper} ${classes.MaintabsPaper_gallery}`}>
          <Paper className={classes.tabsPaper_gallery}>
            {/* title bar when an image is selected */}
            {imageStatus ? (
              <Grid container spacing={3} style={{ margin: "0px" }}>
                <Grid
                  item
                  xs={12}
                  className={classes.titleBar_onSelect_img_grid_gallery}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DoneAllIcon style={{ color: "#1ed660" }} />}
                        size="small"
                        style={{
                          background: "transparent",
                          color: "#636f70",
                          boxShadow: "none",
                        }}
                      >
                        Select all
                      </Button>

                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={
                          <DeleteOutlineIcon style={{ color: "#ff3d3d" }} />
                        }
                        size="small"
                        style={{
                          background: "transparent",
                          color: "#636f70",
                          boxShadow: "none",
                          marginLeft: "15px",
                        }}
                      >
                        Delete
                      </Button>

                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={
                          <ShareOutlinedIcon style={{ color: "#1ed660" }} />
                        }
                        size="small"
                        style={{
                          background: "transparent",
                          color: "#636f70",
                          boxShadow: "none",
                          marginLeft: "15px",
                        }}
                      >
                        Share
                      </Button>

                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={
                          <GamesOutlinedIcon style={{ color: "#1ed660" }} />
                        }
                        size="small"
                        style={{
                          background: "transparent",
                          color: "#636f70",
                          boxShadow: "none",
                          marginLeft: "15px",
                        }}
                      >
                        Move to
                      </Button>

                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={
                          <PlaylistAddOutlinedIcon
                            style={{ color: "#1ed660" }}
                          />
                        }
                        size="small"
                        style={{
                          background: "transparent",
                          color: "#636f70",
                          boxShadow: "none",
                          marginLeft: "15px",
                        }}
                      >
                        Add to
                      </Button>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      {selectedImagesLength.length} Selected
                      <ClearOutlinedIcon
                        onClick={() => {
                          setImageStatus(!imageStatus)
                          props.handleUploadSection(!imageStatus);
                          setSelectedImagesLength([])
                        }}
                        style={{
                          color: "#1ed660",
                          fontSize: "18px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            ) : null}

            {/* dropzone */}
            <Grid container spacing={3} style={{ margin: "0px" }}>
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon style={{ cursor: "pointer" }} />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  />
                  <EditOutlinedIcon
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  style={{
                    width: "100%",
                    height: "250px",
                    border: imageStatus ? "2px solid #1ed660" : null,
                  }}
                  onClick={(e) => handleClick(e)}
                  name="1"
                />
              </Grid>
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon style={{ cursor: "pointer" }} />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  />
                  <EditOutlinedIcon
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  />
                </div>
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://images.unsplash.com/photo-1507827561255-2d3030b142c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </Grid>
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px" }}
                  />
                  <EditOutlinedIcon style={{ marginLeft: "10px" }} />
                </div>
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://images.unsplash.com/photo-1507827561255-2d3030b142c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </Grid>
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px" }}
                  />
                  <EditOutlinedIcon style={{ marginLeft: "10px" }} />
                </div>
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://images.unsplash.com/photo-1507827561255-2d3030b142c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </Grid>
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px" }}
                  />
                  <EditOutlinedIcon style={{ marginLeft: "10px" }} />
                </div>
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://images.unsplash.com/photo-1507827561255-2d3030b142c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </Grid>
              <Grid
                item
                lg={2}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px" }}
                  />
                  <EditOutlinedIcon style={{ marginLeft: "10px" }} />
                </div>
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://images.unsplash.com/photo-1507827561255-2d3030b142c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </Grid>
              <Grid
                item
                lg={2}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px" }}
                  />
                  <EditOutlinedIcon style={{ marginLeft: "10px" }} />
                </div>
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://images.unsplash.com/photo-1507827561255-2d3030b142c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </Grid>
              <Grid
                item
                lg={2}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px" }}
                  />
                  <EditOutlinedIcon style={{ marginLeft: "10px" }} />
                </div>
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://images.unsplash.com/photo-1507827561255-2d3030b142c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </Grid>
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className={`image_grid_gallery ${classes.image_grid_gallery}`}
              >
                <div
                  className={`inner_image_icons ${classes.inner_image_icons}`}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AddCircleOutlineOutlinedIcon
                    style={{ marginLeft: "10px" }}
                  />
                  <EditOutlinedIcon style={{ marginLeft: "10px" }} />
                </div>
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://images.unsplash.com/photo-1507827561255-2d3030b142c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AuthComponent;
