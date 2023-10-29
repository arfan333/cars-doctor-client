/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-[#FF3811] text-[20px] font-bold text-center">
          Service
        </h1>
        <h2 className="text-[#151515] text-[45px] font-bold text-center">
          Our Service Area
        </h2>
        <p className="text-center text-[#737373] font-normal">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
