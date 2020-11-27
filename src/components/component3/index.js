import React, { useEffect } from "react";
import "./css/index.css";
import { DropzoneArea } from "material-ui-dropzone";
import ImageIcon from "@material-ui/icons/Image";
import { FiUpload } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

// import classes from "*.module.css";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  setUploadContentBg: {
    backgroundColor: theme.palette.headerBgColor,
  },
  pasteInput: {
    backgroundColor: theme.palette.headerBgColor,
  },
}));

function Component3(props) {
  const [thumbnail, setThumb] = React.useState("");
  const classes = useStyles();
  const [mode, setMode] = React.useState("");
  const handleImage = (files) => {
    if (files.length) {
      setThumb(files[0]);
    }
  };
  const delImg = () => {
    setThumb("");
  };

  useEffect(() => {
    let getFromLocal = localStorage.getItem("darkMode");
    setMode(getFromLocal);
  }, []);

  return (
    <div className="container-fluid main-upload-component">
      <div className="container most-main-div">
        <div className={`main-cntner ${classes.setUploadContentBg}`}>
          <div className="row main-rw-row-div">
            {/* column 1 */}

            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 firstColumn">
              {/* col 1 title */}
              <div
                className={mode === "true" ? "setColorC3" : "colum1-title-div"}
              >
                Upload Your Files
              </div>
              {/* drag n drop col 1 */}
              <div
                className={mode === "true" ? "setDropzColor" : "col1-dnd-div"}
              >
                {/* dropzone */}

                <DropzoneArea
                  filesLimit={5}
                  onChange={handleImage}
                  className="dropZonArea_drop_image"
                  Icon={"none"}
                  maxFileSize={210000000}
                  onDelete={delImg}
                  dropzoneText={
                    <div>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Drop Your FIles here
                      </span>
                    </div>
                  }
                />
              </div>
              <div className="butn-upld-col1-toggle-div">
                <button className="btn  btn butn-upld-col1">
                  {/* <i className="fa fa-download upld-col1-icon-downld"> */}
                  <FiUpload style={{ fontSize: "18px" }} />
                  &nbsp;&nbsp;&nbsp;Upload
                  {/* </i> */}
                </button>
                <div className="toggle-switch-col1-btn">
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitches"
                    />
                    <label
                      className="custom-control-label"
                      for="customSwitches"
                    ></label>
                  </div>
                </div>
              </div>
            </div>

            {/* column 2 */}

            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 secondColumn">
              {/* col2 title */}
              <div
                className={mode === "true" ? "setColorC3" : "colum2-title-div"}
              >
                Paste Skylink
              </div>
              {/* col2 description */}
              <div
                className={
                  mode === "true" ? "setColorinnerC3" : "colum2-desc-div"
                }
              >
                Paste Your Skylink to hunt your data
              </div>
              {/* col2 input with icon */}
              <div className="colum2-inpt-div">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className={`form-control colum2-input-with-icon ${classes.pasteInput}`}
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="Please Enter Skylink to download"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text icon-inpt-colum2">
                      {/* icon  */}
                      <div className="srch_btn_main_div_changed">
                        {/* <i className="fa fa-download colum2-icon-dwnload"></i> */}
                        <FiDownload className="colum2-icon-dwnload" />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 thirdColumn">
          Upon uploading a file , Skynet a 46 byte link called a skylink.
          <br />
          this link can then be shared with anyone to retrieve the file on any
          skynet Webportal.
        </div>
      </div>
    </div>
  );
}
export default Component3;
