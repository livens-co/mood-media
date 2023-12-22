"use client";

import Lottie from "lottie-react";

import contactAnimation from "../../components/ContactAnimation/ContactAnimation.json";

const ContactAnimation = () => {
  return (
    <div >
      <Lottie animationData={contactAnimation} loop={true}/>
    </div>
  );
};

export default ContactAnimation;
