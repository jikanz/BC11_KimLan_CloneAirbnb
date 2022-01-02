import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__background">
        <img
          src="../img/f1502649-e034-40ab-9fed-7992b7d550c6.webp"
          alt=""
          w="100"
        />
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Hero;
