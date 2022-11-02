import React from "react";
import { Parallax } from "react-parallax";
import { Grid } from "@mui/material";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import HourglassFullTwoToneIcon from "@mui/icons-material/HourglassFullTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";

const services = [
  {
    icon: <PersonOutlineTwoToneIcon />,
    subtitle: "Book Your",
    title: "Appointment",
  },
  {
    icon: <HourglassFullTwoToneIcon />,
    subtitle: "Get Free",
    title: "Expert Advice",
  },
  {
    icon: <PeopleAltTwoToneIcon />,
    subtitle: "You Can Easily",
    title: "Join Our Team",
  },
];
const Service = ({ className = "" }) => {
  return (
    <Parallax
      bgImage="/images/services/1.jpg"
      bgImageAlt="the cat"
      contentClassName={`serviceArea ${className}`}
      strength={200}
    >
      <Grid container spacing={4} className="container">
        {services.map((service, i) => (
          <Grid item md={4} sm={6} xs={12} key={i}>
            <Grid className="serviceItem">
              <Grid className="serviceIcon">{service.icon}</Grid>
              <Grid className="serviceText">
                <span>{service.subtitle}</span>
                <h3>{service.title}</h3>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Parallax>
  );
};
export default Service;