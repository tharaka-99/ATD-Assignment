import React from "react";
import "./Hero.css";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content col-lg-4 col-md-8 px-5 py-3">
          <p className="hero-title">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <div className="hero-button">
            <Button>Get free consultation</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
