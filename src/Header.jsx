import React from "react";
import images from "./images/logo.JPG";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={images} alt="logo" width="120" height="60"></img>
      </div>
    </>
  );
};

export default Header;
