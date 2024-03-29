import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "../../gallery/styles";

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

export default function ViewMore() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="most_main_grid_gallery">
      {/* <IconButton> */}
      <MoreVertOutlinedIcon
        onClick={handleClick}
        style={{ color: "#1ed660", cursor: "pointer" }}
      />
      {/* </IconButton> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            cursor: "pointer",
          }}
        >
          <Typography
            //   onClick={() => setActiveStep(0)}
            variant="span"
            className={`gallery_title_head_Alltext ${classes.gallery_title_head_Alltext_menu}`}
          >
            Other
            <Typography variant="span" className={classes.innerValue_All}>
              34
            </Typography>
          </Typography>
        </div>
      </Popover>
    </div>
  );
}
