/* eslint-disable no-unused-vars */
import React from "react";
import errorImg from "../../assets/images/team/images.jpg";
import vector from "../../assets/images/team/Group.png";
import Navbar from "../shared/Navbar";

const ErrorElement = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-1/2 md:mx-auto mx-10 my-10">
        <div>
          <img className="absolute" src={errorImg} alt="" />
        </div>
        <div>
          <img className="relative w-[92px] h-[90px]" src={vector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
