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
  most_main_grid_actvHstry: {
    padding: "0px",
    width: "100%",
    margin: 0,
  },
  main_grid_actvHstry: {
    margin: "auto",
  },
  MaintabsPaper_actvHstry: {
    paddingTop: "10px",
    // paddingLeft: "35px",
    paddingRight: "35px",
    paddingBottom: "40px",
    // boxShadow: "5px 5px 9px 5px #E6E6E6",
    boxShadow: "none",
  },
  tabsPaper_actvHstry: {
    padding: "0px",
    boxShadow: "none",
  },
  actvHstry_title: {
    color: theme.palette.primary.textColor,
    textAlign: "left",
    fontWeight: "500",
    fontSize: "20px",
    paddingBottom: "30px",
  },
}));
