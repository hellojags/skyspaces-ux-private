import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  followingAndFollowsHeadings: {
    color: theme.palette.mediumGray,
    fontWeight: 600,
    fontSize: 20,
  },
  sliderContainer: {
    backgroundColor: theme.palette.sliderBg,
    paddingLeft: 55,
    paddingRight: 50,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 20,
  },
  followName: {
    fontSize: 14,
    paddingTop: 10,
    color: theme.palette.linksColor,
    fontWeight: 500,
  },
  followContainer: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    flexDirection: "column !important",
  },
  seeAllHeading: {
    textAlign: "center",
    fontSize: 20,
    color: theme.palette.primary.main,
    marginTop: 20,
  },
}));