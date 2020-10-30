import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPreviousOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNextOutlined";
import ShuffleIcon from "@material-ui/icons/ShuffleOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Album and song details</p>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <p>Volume controls</p>
      </div>
    </div>
  );
}

export default Footer;
