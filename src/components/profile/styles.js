import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  profileImage: {
    width: 190,
    height: 190,
    borderRadius: "50%",
    position: "absolute",
    left: 0,
    marginLeft: 150,
    marginTop: 150,
  },
  profileImageForMobile: {
    width: 190,
    height: 190,
    borderRadius: "50%",
    position: "absolute",
    top: 180,
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    border: `2px solid ${theme.palette.primary.main}`,
    // marginLeft: 150,
    // marginTop: 150,
  },
  profileUserNameMobile: {
    textAlign: "center",
    marginTop: 15,
  },
  listOfProfile: {
    paddingLeft: 150,
    display: "flex",
  },
  profileListHeadings: {
    color: theme.palette.mediumGray,
    fontWeight: 500,
    fontSize: 17,
    paddingLeft: 30,
    paddingRight: 30,
  },
  profileListCounts: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  followingButton: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  profileUserName: {
    color: theme.palette.linksColor,
    fontWeight: 500,
    fontSize: 30,
  },
  tabsName: {
    paddingLeft: 20,
    paddingRight: 20,
    cursor: "pointer",
    paddingBottom: 10,
  },
}));