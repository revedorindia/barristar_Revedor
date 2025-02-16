import React from "react";
import { Button, Grid } from "@mui/material";
import Slider from "react-slick";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { heroSliders } from "../../data/data";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <Button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <KeyboardArrowLeftIcon />
  </Button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <Button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <KeyboardArrowRightIcon />
  </Button>
);

const HeroSlider = ({ className = "" }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider className={`heroSliderArea ${className}`} {...settings}>
      {heroSliders.map((slider, i) => (
        <Grid key={i}>
          <Grid
            className="slideWrapper"
            style={{
              background: `url(${slider.images}) no-repeat center center / cover`,
            }}
          >
            <Grid container className="container">
              <Grid item lg={8} xs={12}>
                <p>{slider.text}</p>
                <h2>
                  <span>{slider.title}</span> <span>{slider.subTitle}</span>
                </h2>
                <Link legacyBehavior href="/contact">
                  <Button className="btnStyle" component="a">
                    {slider.button}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Slider>
  );
};
export default HeroSlider;
