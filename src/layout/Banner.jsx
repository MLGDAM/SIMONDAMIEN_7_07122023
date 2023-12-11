import React from "react";
import "../styles/sass/banner.scss";

function Banner (props)  {
  return (
    <div className="banner">
      <h1 className="banner_title">{props.title}</h1>
      <img src={props.src} alt="banniere-kasa" className="banner_img" />
    </div>
  );
};

export default Banner;
