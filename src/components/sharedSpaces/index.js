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
 * @function SharedSpaces
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

const SharedSpaces = (props) => {
  const classes = useStyles();
  const [filterSelection, setFilterSelection] = React.useState("emp");

  const handleChange = (event) => {
    setFilterSelection(event.target.value);
  };

  return (
    <Grid container spacing={3} style={{ width: "100%", margin: 0 }}>
      <Grid item xs={12}>
        <Typography variant="span" className={classes.sharedSpaceHeading}>
          Shared Spaces
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          className={classes.sharedSpaceButn}
          startIcon={<EditIcon style={{ color: "white" }} />}
        >
          CREATE SPACE
        </Button>
        <span style={{ marginLeft: 20 }}></span>
        <IconButton aria-label="delete">
          <AppsIcon className={classes.appsIcon} />
        </IconButton>

        <IconButton aria-label="delete">
          <ReorderIcon className={classes.reOrdered} />
        </IconButton>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          // borderRadius: "10px",
        }}
      >
        <LowPriorityIcon />
        <FormControl className={classes.formControl}>
          <Select
            input={<BootstrapInput />}
            inputProps={{
              classes: {
                icon: classes.icon,
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterSelection}
            disableUnderline={true}
            onChange={handleChange}
          >
            <MenuItem value={"emp"} className={classes.menuColor}>
              Latest filter
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.sharedSpaceButn}
          startIcon={<CheckCircleIcon style={{ color: "white" }} />}
        >
          Select
        </Button>
      </Grid>
      <Cards />
    </Grid>
  );
};

export default SharedSpaces;
