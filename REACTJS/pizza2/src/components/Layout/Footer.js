import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from "@mui/material";


const Footer = () => {
  <style>
    
  </style>
  return (
    <>
  <div style={{ display: "flex",background:"black",color:"white", justifyContent: "space-around" }}>
  <div className="footer-section">
      <h3>COMPANY</h3>
      <ul>
        <li>About us</li>
        <li>Team</li>
        <li>Careers</li>
        <li>Swiggy Blog</li>
        <li>Bug Bounty</li>
        <li>Swiggy One</li>
        <li>Swiggy Corporate</li>
        <li>Swiggy Instamart</li>
        <li>Swiggy Genie</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>CONTACT</h3>
      <ul>
        <li>Help & Support</li>
        <li>Partner with us</li>
        <li>Ride with us</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>LEGAL</h3>
      <ul>
        <li>Terms & Conditions</li>
        <li>Refund & Cancellation</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
    </div>
  </div>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,background:"black",color:"white"}}>
      <p style={{ textAlign: "center", margin: "0" }}>&copy; 2023 Pizza Hut. All rights reserved.</p>
      <Box
        sx={{ textAlign: "right", bgcolor: "black", color: "white", p: 1 }}
        style={{ marginLeft: "auto" }}
      >
        <Box
          sx={{
            my: 1,
            "svg": {
              fontSize: "60px",
              cursor: "pointer",
              marginLeft: "10px",
            },
            "svg:hover": {
              color: "goldenrod",
            },
          }}
        >
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Box>
      </Box>
    </div>
    </>
  );
};

export default Footer;