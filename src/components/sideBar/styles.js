import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dashboardCont: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 28,
    marginTop: 25,
    alignItems: "center",
  },
  spaceIcon: {
    color: theme.palette.primary.main,
  },
  spacesLink: {
    color: theme.palette.primary.main,
    paddingLeft: 30,
  },
  spacesCont: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  linkName: {
    paddingLeft: 30,
    color: theme.palette.linksColor,
    textDecoration: "none",
  },
  spacelinkName: {
    paddingLeft: 30,
    fontSize: 15,
    color: theme.palette.linksColor,
  },
  editIconStyle: {
    fontSize: 23,
    paddingRight: 5,
    color: theme.palette.mediumGray,
  },
  shareIconStyle: {
    fontSize: 20,
    color: theme.palette.mediumGray,
  },

  spaceBookIcon: {
    fontSize: 15,
    color: theme.palette.mediumGray,
    position: "relative",
    left: 12,
  },
  spacesNumber: {
    color: theme.palette.primary.main,
    fontSize: 13,
    paddingLeft: 6,
  },
  spaceLinkStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.linksColor,
    paddingTop: 10,
    paddingBottom: 10,
  },
  linksStyles: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.linksColor,
    paddingTop: 10,
    paddingBottom: 10,
  },
  sideNavContainer: {
    paddingTop: 100,
    margin: "auto",
    width: "80%",
  },
  drawerPaper: {
    width: 320,
    borderRight: "none",
    backgroundColor: theme.palette.lightGray,
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${340}px)`,
      marginLeft: 320,
    },
    backgroundColor: theme.palette.whiteBgColor,
    padding: theme.spacing(3),
  },
  content2: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      flexShrink: 0,
    },
  },
}));
