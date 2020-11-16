import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  most_main_grid_settings: {
    padding: "0px",
    width: "100%",
    margin: 0,
  },
  main_grid_settings: {
    margin: "auto",
  },
  MaintabsPaper_settings: {
    paddingTop: "10px",
    // paddingLeft: "35px",
    paddingRight: "35px",
    paddingBottom: "40px",
    // boxShadow: "5px 5px 9px 5px #E6E6E6",
    boxShadow: "none",
  },
  tabsPaper_settings: {
    padding: "0px",
    boxShadow: "none",
  },
  settings_title: {
    color: theme.palette.primary.textColor,
    textAlign: "left",
    fontWeight: "500",
    fontSize: "20px",
    paddingBottom: "30px",
  },
  backup_btn_div: {
    padding: "30px 0px",
    display: "flex",
    justifyContent: "flex-end",
  },

  backup_btn: {
    backgroundColor: theme.palette.primary.main,
    "&&&:focus": {
      outline: "none",
    },
    "&&&:hover": {
      backgroundColor: "darkgreen",
    },
  },
  lable_skylink_inpt_settings: {
    textAlign: "left",
    color: `${theme.palette.primary.main}`,
    fontSize: "12px",
    fontWeight: "600",
    paddingBottom: "10px",
  },
  skynetPortal_inpt: {
    width: "90%",
    textAlign: "left",
  },
  skynetPortal_MI: {
    color: `${theme.palette.primary.main}`,
  },
  save_btn_settings: {
    "&&&:focus": {
      outline: "none !important",
    },
  },
}));
