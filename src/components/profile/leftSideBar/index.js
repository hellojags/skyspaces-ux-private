import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

/**
 * @author
 * @function LeftSideBar
 **/

const LeftSideBar = (props) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Typography variant="span" className={classes.LeftSideBarHeadings}>
          Bio
        </Typography>
        <div style={{ paddingTop: 10, paddingBottom: 30 }}>
          <Typography variant="span" className={classes.bioContentStyling}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
          </Typography>
        </div>
      </div>

      <div style={{ paddingTop: 5, paddingBottom: 30 }}>
        <Typography variant="span" className={classes.LeftSideBarHeadings}>
          Sky link
        </Typography>
        <div>
          <Typography variant="span" className={classes.bioContentStyling}>
            www.website.com.url
          </Typography>
        </div>
      </div>

      <div>
        <Typography variant="span" className={classes.LeftSideBarHeadings}>
          List of Public Spaces
        </Typography>

        <div className={classes.spacesCont}>
          <span>
            <BookmarkIcon className={classes.spaceBookIcon} />
            <Typography variant="span" className={classes.spacelinkName}>
              Animal Space <span className={classes.spacesNumber}>(12)</span>
            </Typography>
          </span>
          <span>
            <AddCircleOutlineIcon className={classes.spaceIcon} />
          </span>
        </div>

        <div className={classes.spacesCont}>
          <span>
            <BookmarkIcon className={classes.spaceBookIcon} />
            <Typography variant="span" className={classes.spacelinkName}>
              Freedom Space <span className={classes.spacesNumber}>(12)</span>
            </Typography>
          </span>
          <span>
            <AddCircleOutlineIcon className={classes.spaceIcon} />
          </span>
        </div>

        <div className={classes.spacesCont}>
          <span>
            <BookmarkIcon className={classes.spaceBookIcon} />
            <Typography variant="span" className={classes.spacelinkName}>
              Super Space <span className={classes.spacesNumber}>(12)</span>
            </Typography>
          </span>
          <span>
            <AddCircleOutlineIcon className={classes.spaceIcon} />
          </span>
        </div>

        <div className={classes.spacesCont}>
          <span>
            <BookmarkIcon className={classes.spaceBookIcon} />
            <Typography variant="span" className={classes.spacelinkName}>
              Music Space <span className={classes.spacesNumber}>(12)</span>
            </Typography>
          </span>
          <span>
            <AddCircleOutlineIcon className={classes.spaceIcon} />
          </span>
        </div>

        <div className={classes.spacesCont}>
          <span>
            <BookmarkIcon className={classes.spaceBookIcon} />
            <Typography variant="span" className={classes.spacelinkName}>
              Video Space <span className={classes.spacesNumber}>(12)</span>
            </Typography>
          </span>
          <span>
            <AddCircleOutlineIcon className={classes.spaceIcon} />
          </span>
        </div>

        <div className={classes.spacesCont}>
          <span>
            <BookmarkIcon className={classes.spaceBookIcon} />
            <Typography variant="span" className={classes.spacelinkName}>
              Demo Space <span className={classes.spacesNumber}>(12)</span>
            </Typography>
          </span>
          <span>
            <AddCircleOutlineIcon className={classes.spaceIcon} />
          </span>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
