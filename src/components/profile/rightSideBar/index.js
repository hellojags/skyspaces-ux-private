import React from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";

/**
 * @author
 * @function RightSideBar
 **/

const RightSideBar = (props) => {
  const classes = useStyles();

  //   var settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 1000,
  //     slidesToShow: 3,
  //     slidesToScroll: 3,
  //     initialSlide: 0,
  //     arrows: true,
  //     autoplay: true,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 800,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           initialSlide: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Typography
          variant="span"
          className={classes.followingAndFollowsHeadings}
        >
          FOLLOWING
        </Typography>
        <div
          style={{
            backgroundColor: "white",
            paddingLeft: 55,
            paddingRight: 50,
            paddingTop: 30,
            paddingBottom: 30,
            marginTop: 20,
          }}
          className="sliderContainer"
        >
          <Slider {...settings}>
            <div className={classes.followContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfSmZyAvxpOE32QA0B2N63vWh7vykXkQ82xw&usqp=CAU"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  // position: "relative",
                  // left: 11,
                }}
              />
              <Typography variant="span" className={classes.followName}>
                awaiskaram
              </Typography>
            </div>
            <div className={classes.followContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfSmZyAvxpOE32QA0B2N63vWh7vykXkQ82xw&usqp=CAU"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  // position: "relative",
                  // left: 11,
                }}
              />
              <Typography variant="span" className={classes.followName}>
                awaiskaram
              </Typography>
            </div>

            <div className={classes.followContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfSmZyAvxpOE32QA0B2N63vWh7vykXkQ82xw&usqp=CAU"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  // position: "relative",
                  // left: 11,
                }}
              />
              <Typography variant="span" className={classes.followName}>
                awaiskaram
              </Typography>
            </div>
            <div className={classes.followContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfSmZyAvxpOE32QA0B2N63vWh7vykXkQ82xw&usqp=CAU"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  // position: "relative",
                  // left: 11,
                }}
              />
              <Typography variant="span" className={classes.followName}>
                awaiskaram
              </Typography>
            </div>
          </Slider>
          <div className={classes.seeAllHeading}>
            <Typography variant="span">See all</Typography>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <Typography
          variant="span"
          className={classes.followingAndFollowsHeadings}
        >
          FOLLOWERS
        </Typography>
        <div
          style={{
            backgroundColor: "white",
            paddingLeft: 55,
            paddingRight: 50,
            paddingTop: 30,
            paddingBottom: 30,
            marginTop: 20,
          }}
          className="sliderContainer"
        >
          <Slider {...settings}>
            <div className={classes.followContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfSmZyAvxpOE32QA0B2N63vWh7vykXkQ82xw&usqp=CAU"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  // position: "relative",
                  // left: 11,
                }}
              />
              <Typography variant="span" className={classes.followName}>
                awaiskaram
              </Typography>
            </div>
            <div className={classes.followContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfSmZyAvxpOE32QA0B2N63vWh7vykXkQ82xw&usqp=CAU"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  // position: "relative",
                  // left: 11,
                }}
              />
              <Typography variant="span" className={classes.followName}>
                awaiskaram
              </Typography>
            </div>

            <div className={classes.followContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfSmZyAvxpOE32QA0B2N63vWh7vykXkQ82xw&usqp=CAU"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  // position: "relative",
                  // left: 11,
                }}
              />
              <Typography variant="span" className={classes.followName}>
                awaiskaram
              </Typography>
            </div>
            <div className={classes.followContainer}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfSmZyAvxpOE32QA0B2N63vWh7vykXkQ82xw&usqp=CAU"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  // position: "relative",
                  // left: 11,
                }}
              />
              <Typography variant="span" className={classes.followName}>
                awaiskaram
              </Typography>
            </div>
          </Slider>
          <div className={classes.seeAllHeading}>
            <Typography variant="span">See all</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
