import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:kaushiksumit427@gmail.com.com">
        <Button>Contact: kaushiksumit427@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
