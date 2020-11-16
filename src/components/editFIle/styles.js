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
  most_main_grid_ef: {
    padding: "0px",
    width: "100%",
    margin: 0,
  },
  main_grid_ef: {
    margin: "auto",
  },
  MaintabsPaper_ef: {
    paddingTop: "10px",
    // paddingLeft: "35px",
    paddingRight: "35px",
    paddingBottom: "40px",
    // boxShadow: "5px 5px 9px 5px #E6E6E6",
    boxShadow: "none",
  },
  tabsPaper_ef: {
    padding: "0px",
    boxShadow: "none",
  },
  title1_ef: {
    textAlign: "left",
    color: `${theme.palette.primary.textColor}`,
  },
  titleOng_ef: {
    textAlign: "left",
    color: `${theme.palette.primary.main}`,
    fontSize: "12px",
    fontWeight: "600",
    paddingBottom: "30px",
  },
  lable_skylink_inpt_ef: {
    textAlign: "left",
    color: `${theme.palette.primary.main}`,
    fontSize: "12px",
    fontWeight: "600",
  },
  lable_fileName_inpt_ef: {
    textAlign: "left",
    color: `${theme.palette.primary.main}`,
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "30px",
  },
  skylinkUrl_txtfld: {
    marginBottom: "30px",
  },
  description_inpt_ef: {
    width: "100%",
    // padding: "20px 0px",
  },
  selectSpaces_title: {
    color: theme.palette.primary.main,
    textAlign: "left",
    fontWeight: "500",
    fontSize: "20px",
  },
  selectSpace_title_btns_grid: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  selectSpaces_title_head_Alltext: {
    background: `${theme.palette.lightGray}`,
    padding: "5px 10px",
    borderRadius: "50px",
    color: `${theme.palette.primary.textColor}`,
    fontSize: "13px",
  },
  ss_title_head_image_text: {
    background: `${theme.palette.lightGray}`,
    padding: "5px 10px",
    borderRadius: "50px",
    color: `${theme.palette.primary.textColor}`,
    fontSize: "13px",
    marginLeft: "15px",
  },
  ef_delbtn: {
    marginRight: "20px",
    background: "#ff3d3d",
    "&&&:focus": {
      outline: "none",
    },
    "&&&:hover": {
      background: "#ff3d3d",
    },
  },

  ef_saveBtn: {
    marginRight: "20px",
    color: "white",
    "&&&:focus": {
      outline: "none",
    },
  },

  ef_doneBtn: {
    marginRight: "20px",
    color: "white",
    "&&&:focus": {
      outline: "none",
    },
  },
}));
