import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import DoneIcon from "@material-ui/icons/Done";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const handleExit = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle
        id="simple-dialog-title"
        style={{ padding: "20px 130px 0px 130px" }}
      >
        <span
          style={{ fontSize: "14px", color: "#636f70", fontWeight: "bold" }}
        >
          Status
        </span>
      </DialogTitle>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0px",
        }}
      >
        <CheckCircleOutlinedIcon
          style={{ fontSize: "60px", color: "#1ed660" }}
        />
      </div>
      {/* error text */}
      <Typography
        style={{
          textAlign: "center",
          color: "#1ed660",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Success
      </Typography>
      {/* warning text */}
      <Typography
        style={{
          textAlign: "center",
          color: "#c5c5c5",
          fontSize: "12px",
        }}
      >
        Skylink has been saved Successfully
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingRight: "20px",
        }}
        onClick={handleExit}
      >
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DoneIcon />}
          size="small"
          style={{ background: "#1ed660" }}
        >
          OK
        </Button>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  //   const handleClickOpen = () => {
  //     // setOpen(true);
  //     props.setOpen(true)

  //   };

  const handleClose = (value) => {
    // setOpen(false);
    // setSelectedValue(value);
    props.setSecondOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button> */}
      <SimpleDialog
        setOpen={props.setSecondOpen}
        open={props.value}
        onClose={handleClose}
        style={{ borderRadius: "20px" }}
      />
    </div>
  );
}
