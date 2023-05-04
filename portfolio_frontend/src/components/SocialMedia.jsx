import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = ({ twitter, facebook, insta }) => {
  return (
    <div className="footer-new">
      <div className="app__social">
        <div>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href={insta} target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
        </div>
        <p style={{ marginLeft: "40px" }}>@2023 AJOYSR,All rights reserved</p>
      </div>
    </div>
  );
};

export default SocialMedia;
