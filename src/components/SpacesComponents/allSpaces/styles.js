import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sharedSpaceHeading: {
    color: theme.palette.linksColor,
    fontSize: 20,
  },
  sharedSpaceButn: {
    color: "white",
    borderRadius: 10,
  },
  appsIcon: {
    color: theme.palette.primary.main,
  },
  reOrdered: {
    color: theme.palette.mediumGray,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginRight: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuColor: {
    color: theme.palette.linksColor,
  },
  icon: {
    color: theme.palette.primary.main,
  },

  //
  cardContainer: {
    display: "flex",
    flexDirection: "row",
  },
  spaceIcons: {
    color: theme.palette.primary.main,
    fontSize: 40,
    fontWeight: 400,
  },
  spaceName: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  rightContentCon: {
    width: "100%",
  },
  shareIconColor: {
    color: theme.palette.primary.main,
  },
  paperStyling: {
    padding: 15,
    // boxShadow: "0px 0px 5px 8px rgba(50, 50, 50, 0.14)",
    boxShadow: "0 0 10px rgba(0,0,0,.4)",
    borderRadius: "10px",
    backgroundColor: theme.palette.headerBgColor,
  },
  rightSideTop: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "4px",
  },
  createAt: {
    color: theme.palette.linksColor,
    fontWeight: 500,
    fontSize: 13,
  },
  createAtTime: {
    color: theme.palette.mediumGray,
    fontSize: 13,
  },
  rightContentCon: {
    width: "86%",
    margin: "auto",
  },
  paragraph: {
    color: theme.palette.mediumGray,
    fontSize: 11.5,
    lineHeight: "0px !important",
  },
  status: {
    color: theme.palette.linksColor,
    fontWeight: "bold",
  },
  sharedBg: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#38b6ff",
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: 15,
  },

  privatedBg: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#ff3d3d",
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: 15,
  },

  publicdBg: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: 15,
  },

  tagsBg: {
    width: 72,
    height: 29,
    borderRadius: 50,
    backgroundColor: theme.palette.tagBgColor,
    color:theme.palette.tagColor,
    border: `2px solid ${theme.palette.tagBorderColor}`,
    // color: "black",
    // paddingLeft: 20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign: "center",
    // paddingRight: 20,
    // paddingTop: 6,
    // paddingBottom: 6,
    marginLeft: 15,
    fontSize: 13,
    marginBottom: 10,
  },

  tagEditIcon: {
    color: theme.palette.primary.main,
    fontSize: 18,
  },
}));
