import React from "react";
import useStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import HeadsetIcon from "@material-ui/icons/Headset";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useTheme } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

/**
 * @author
 * @function Cards
 **/

const Cards = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {[0, 1, 2].map((i) => {
        return (
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="main_crad_prfl_grid"
          >
            <Paper className={classes.paperStyling}>
              <div className={classes.cardContainer}>
                <HeadsetIcon className={classes.spaceIcons} />
                <div className={classes.rightContentCon}>
                  <div className={classes.rightSideTop}>
                    <Typography variant="span" className={classes.spaceName}>
                      vevo cross the limits.mp3
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <div>
                        <Typography variant="span" className={classes.createAt}>
                          Created At :{" "}
                        </Typography>
                        <Typography
                          variant="span"
                          className={classes.createAtTime}
                        >
                          01:34:12 pm
                        </Typography>
                      </div>
                      <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
                      <div>
                        <Typography
                          variant="span"
                          className={classes.createAtTime}
                        >
                          12/09/2020
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingTop: 5, display: "flex" }}>
                    <div>
                      <Typography variant="span" className={classes.createAt}>
                        Content Type :{" "}
                      </Typography>
                      <Typography
                        variant="span"
                        className={classes.createAtTime}
                      >
                        Image/jpg
                      </Typography>
                    </div>
                    <div style={{ paddingLeft: 10, paddingRight: 10 }}>|</div>
                    <div>
                      <Typography variant="span" className={classes.createAt}>
                        Content Size :{" "}
                      </Typography>
                      <Typography
                        variant="span"
                        className={classes.createAtTime}
                      >
                        701.56KB
                      </Typography>
                    </div>
                  </div>
                  <div style={{ paddingTop: 5 }}>
                    <Typography variant="span" className={classes.createAt}>
                      Create Time :{" "}
                    </Typography>
                    <Typography variant="span" className={classes.createAtTime}>
                      01:24:12 pm <span>|</span> 12/09/2020
                    </Typography>
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <Typography variant="span" className={classes.status}>
                        Other Spaces
                      </Typography>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <Typography
                        variant="span"
                        className={classes.tagsBgAndOtherTags}
                      >
                        Super Space
                      </Typography>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <Typography variant="span" className={classes.status}>
                        Tags
                      </Typography>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <Typography variant="span" className={classes.tagsBg}>
                          Demo
                        </Typography>
                        <Typography variant="span" className={classes.tagsBg}>
                          Sia
                        </Typography>
                        <Typography variant="span" className={classes.tagsBg}>
                          Lunch
                        </Typography>
                      </div>
                      <div>
                        <EditOutlinedIcon
                          className={classes.tagEditIcon}
                          style={{ marginRight: 15 }}
                        />
                        <InfoOutlinedIcon className={classes.tagEditIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Pagination count={5} />
      </div>
    </>
  );
};

export default Cards;
