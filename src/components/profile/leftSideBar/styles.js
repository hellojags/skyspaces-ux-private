import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  LeftSideBarHeadings: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  bioContentStyling: {
    color: theme.palette.linksColor,
    fontSize: 14,
  },
  spacesCont: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  spaceBookIcon: {
    fontSize: 15,
    color: theme.palette.mediumGray,
    // position: "relative",
    // left: 12,
  },
  spacelinkName: {
    paddingLeft: 10,
    fontSize: 15,
    color: theme.palette.linksColor,
  },
  spacesNumber: {
    color: theme.palette.primary.main,
    fontSize: 13,
    paddingLeft: 6,
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
  spaceIcon: {
    color: theme.palette.primary.main,
    fontSize:20
  },
}));
