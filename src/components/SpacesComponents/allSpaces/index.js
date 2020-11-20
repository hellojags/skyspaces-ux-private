import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@material-ui/icons/Apps";
import ReorderIcon from "@material-ui/icons/Reorder";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import LowPriorityIcon from "@material-ui/icons/LowPriority";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Cards from "./cards";

/**
 * @author
 * @function AllSpaces
 **/

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    color: theme.palette.linksColor,
    //   border: '1px solid #ced4da',
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    //   transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      // borderRadius: 4,
      // borderColor: '#80bdff',
      backgroundColor: "white",
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const AllSpaces = (props) => {
  const classes = useStyles();
  const [filterSelection, setFilterSelection] = React.useState("emp");

  const handleChange = (event) => {
    setFilterSelection(event.target.value);
  };

  return (
    <Grid
      container
      spacing={3}
      style={{
        width: "100%",
        margin: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Cards />
    </Grid>
  );
};

export default AllSpaces;
