import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paperStyling: {
    padding: 15,
    borderRadius: 10,
    boxShadow: "3px 3px 10px 0px rgba(50, 50, 50, 0.75)",
  },
  rootP: {
    width: 250,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft:30
  },

  rePlayIcon:{
      color:theme.palette.linksColor,
      fontSize:30
  },

  sliderPlusPlayIcons: {
    display: "flex",
    alignItems: "center",
  },

  sliderStyle: {
    marginLeft: 10,
    marginRight: 10,
  },

  duration: {
    color: theme.palette.mediumGray,
    fontSize: 10,
  },

  mediaPlayIcons: {
    color: theme.palette.linksColor,
    fontSize: 30,
  },
  mediaPlayIconsPlayer: {
    color: theme.palette.linksColor,
    fontSize: 35,
  },
}));
