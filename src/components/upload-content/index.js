import React from "react";
import useStyles from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AutoComp from "./autofield/autofield";
import Switch from "@material-ui/core/Switch";
import DescriptionIcon from "@material-ui/icons/Description";
import { DropzoneArea } from "material-ui-dropzone";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { TiAttachment } from "react-icons/ti";
import ClearIcon from '@material-ui/icons/Clear';

/**
 * @author
 * @function AuthComponent
 **/

const AuthComponent = (props) => {
  // State
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });
  const [thumbnail, setThumb] = React.useState("");
  // Style
  const classes = useStyles();

  // functions
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleImage = (files) => {
    if (files.length) {
      setThumb(files[0]);
    }
  };
  const delImg = () => {
    setThumb("");
  };
  return (
    <Grid container spacing={3} className={classes.most_main_grid_uc}>
      <Grid item xs={12} className={classes.main_grid_uc}>
        <Paper className={`${classes.paper} ${classes.MaintabsPaper_uc}`}>
          <Paper className={classes.tabsPaper_uc}>
            <Typography className={classes.uc_title}>Upload Content</Typography>
            <Grid container spacing={3} className={classes.tags_inpt_main_grid}>
              <Grid
                item
                lg={5}
                md={5}
                sm={5}
                xs={12}
                style={{ padding: "none" }}
              >
                <AutoComp />
              </Grid>
              <Grid
                item
                lg={5}
                md={5}
                sm={5}
                xs={12}
                style={{ padding: "none" }}
              >
                <AutoComp />
              </Grid>
              <Grid item xs={2}>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  color="default"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
            </Grid>
            {/* dropzone */}
            <Grid container spacing={3} className="drpZone_main_grid">
              <Grid item xs={12}>
                <DropzoneArea
                  filesLimit={1}
                  showPreviewsInDropzone={false}
                  onChange={handleImage}
                  //  className={classes.dropZonArea}
                  Icon={"none"}
                  maxFileSize={210000000}
                  onDelete={delImg}
                  dropzoneText={
                    <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                      <div>
                        <BsFileEarmarkArrowUp
                          style={{
                            fontSize: "55px",
                            color: "#c5c5c5",
                            marginBottom: "10px",
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: "bold",
                          color: "#c5c5c5",
                        }}
                      >
                        Drop a file here or
                        <span style={{ color: "#1ed660", marginLeft: "3px" }}>
                          click here to upload
                        </span>
                      </span>
                    </div>
                  }
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid
                item
                lg={5}
                md={5}
                sm={12}
                xs={12}
                className={classes.show_img_title_grid}
              >
                <span>
                  <DescriptionIcon className={classes.descIcon} />
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Typography className={classes.img_name_txt}>
                      {thumbnail == "" ? "Choose a file" : thumbnail.name}
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TiAttachment
                      style={{
                        fontSize: "18px",
                        color: "#1ed660",
                        marginRight: 10,
                      }}
                    />
                    <ClearIcon
                      style={{
                        fontSize: "18px",
                        color: "#1ed660",
                        cursor: "pointer",
                      }}
                      onClick={() => setThumb("")}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AuthComponent;
