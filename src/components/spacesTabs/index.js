import React from "react";
import useStyles from "../gallery/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@material-ui/icons/Apps";
import ReorderIcon from "@material-ui/icons/Reorder";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import LowPriorityIcon from "@material-ui/icons/LowPriority";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PublishIcon from "@material-ui/icons/Publish";
import HeadsetIcon from "@material-ui/icons/Headset";

//components
import AllSpaces from "../SpacesComponents/allSpaces";
import ImagesGallery from "../gallery";
import AudioSpaces from "../SpacesComponents/audioSpaces";
import EditFile from "../editFIle";
import ViewMore from "../SpacesComponents/allSpaces/viewMorePopOver";
import AllSpacesListView from "../SpacesComponents/allSpaces/listView";
import AudioSpacesListView from "../SpacesComponents/audioSpaces/listView";


/**
 * @author
 * @function SpacesTabs
 **/

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    color: theme.palette.linksColor,
    //   border: '1px solid #ced4da',
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    //   transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      // borderRadius: 4,
      // borderColor: '#80bdff',
      backgroundColor: "white",
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const SpacesTabs = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [filterSelection, setFilterSelection] = React.useState("emp");
  const [isTrue, setIsTrue] = React.useState(false);
  const [GridUi, setGridUi] = React.useState(true);

  const handleUploadSection = (value) => {
    setIsTrue(value);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <AllSpaces />;
      case 1:
        return <ImagesGallery handleUploadSection={handleUploadSection} />;
      case 2:
        return <AudioSpaces />;
      case 3:
        return <EditFile />;
      default:
        return "unknown step";
    }
  }

  function getStepContentForList(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <AllSpacesListView />;
      case 1:
        return <ImagesGallery handleUploadSection={handleUploadSection} />;
      case 2:
        return <AudioSpacesListView />;
      case 3:
        return <EditFile />;
      default:
        return "unknown step";
    }
  }

  

  const handleChange = (event) => {
    setFilterSelection(event.target.value);
  };

  return (
    <>
      <Grid
        container
        className="most_main_grid_gallery"
        spacing={3}
        style={{ width: "99%", margin: "auto" }}
      >
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <Typography className={classes.gallery_title}>Spaces</Typography>
          <Typography className={classes.gallery_subTitle}>
            Freedom Space
          </Typography>
        </Grid>

        <Grid
          item
          lg={10}
          md={10}
          sm={12}
          xs={12}
          className={`${
            classes.gallery_title_btns_grid
          } ${"most_main_grid_gallery_style"}`}
        >
          {/*  All */}
          <Typography
            onClick={() => setActiveStep(0)}
            variant="span"
            className={`gallery_title_head_Alltext ${classes.gallery_title_head_Alltext}`}
          >
            All
            <Typography variant="span" className={classes.innerValue_All}>
              {" "}
              34
            </Typography>
          </Typography>

          {/* Image */}
          <Typography
            onClick={() => setActiveStep(1)}
            variant="span"
            className={`gallery_title_head_image_text ${classes.gallery_title_head_image_text}`}
          >
            <CameraAltOutlinedIcon style={{ fontSize: "20px" }} />
            &nbsp; Images
            <Typography variant="span" className={classes.innerValue_All}>
              12
            </Typography>
          </Typography>

          <Typography
            onClick={() => setActiveStep(2)}
            variant="span"
            className={`gallery_title_head_image_text ${classes.gallery_title_head_image_text}`}
          >
            <HeadsetIcon style={{ fontSize: "20px" }} />
            &nbsp; Audios
            <Typography variant="span" className={classes.innerValue_All}>
              12
            </Typography>
          </Typography>
          {/* videos */}

          <Typography
            onClick={() => setActiveStep(3)}
            variant="span"
            className={`gallery_title_head_image_text ${classes.gallery_title_head_image_text}`}
          >
            <VideocamOutlinedIcon style={{ fontSize: "23px" }} />
            &nbsp; Videos
            <Typography variant="span" className={classes.innerValue_All}>
              4
            </Typography>
          </Typography>

          {/* Document */}
          {/* <Typography
            variant="span"
            className={`gallery_title_head_image_text ${classes.gallery_title_head_image_text}`}
          >
            <DescriptionOutlinedIcon style={{ fontSize: "20px" }} />
            &nbsp; Documents
            <Typography variant="span" className={classes.innerValue_All}>
              18
            </Typography>
          </Typography> */}
          {/* settings icon */}
          <div className={`${classes.menuverticalIcon_div} ${"menu_icon_top"}`}>
            <ViewMore />
          </div>
        </Grid>
        {isTrue ? null : (
          <>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ color: "white", borderRadius: 10 }}
                  component="span"
                  startIcon={<PublishIcon style={{ color: "white" }} />}
                >
                  Upload
                </Button>
              </label>

              <span style={{ marginLeft: 20 }}></span>
              <IconButton aria-label="delete" onClick={() => setGridUi(true)}>
                <AppsIcon className={classes.appsIcon} />
              </IconButton>

              <IconButton aria-label="delete" onClick={() => setGridUi(false)}>
                <ReorderIcon className={classes.reOrdered} />
              </IconButton>
              {/* <IconButton aria-label="delete">
            <AppsIcon className={classes.appsIcon} />
          </IconButton> */}

              {/* <IconButton aria-label="delete">
            <ReorderIcon className={classes.reOrdered} />
          </IconButton> */}
            </Grid>

            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <LowPriorityIcon className={classes.lowPriorIcon} />
              <FormControl className={classes.formControl}>
                <Select
                  input={<BootstrapInput />}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filterSelection}
                  disableUnderline={true}
                  onChange={handleChange}
                >
                  <MenuItem value={"emp"} className={classes.menuColor}>
                    Latest filter
                  </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                className={classes.sharedSpaceButn}
                startIcon={<CheckCircleIcon style={{ color: "white" }} />}
              >
                Select
              </Button>
            </Grid>
          </>
        )}
      </Grid>

      {GridUi ? getStepContent(activeStep) : getStepContentForList(activeStep)}
    </>
  );
};

export default SpacesTabs;
