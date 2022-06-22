import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/kaushik___sumit";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
          
            <Typography>Sumit Kaushik</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
          
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
          

            <a href="https://instagram.com/kaushik___sumit" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
