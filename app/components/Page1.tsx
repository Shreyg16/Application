'use client';

import Image from "next/image";
import React from "react";
import BgImg from "../Public/tech-hero.webp";
import DashboardImg from "../Public/streamline.webp"
import GraphImg from "../Public/gain-access.webp"
import Circle from "../Public/feel-supported-now-orbit.webp"
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";



function Page1() {
  return (
    <>
     <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-4 lg:px-10 py-10 lg:py-20 bg-background ">
      {/* Image Section */}
      <div className="hidden lg:block">
        <Image
          src={BgImg}
          alt=""
          className="w-[600px] rounded-ee-[100px] -mt-20 -ml-12"
        />
      </div>

      {/* Text Content Section */}
      <div className="mt-8 mr-0 lg:mr-[100px] lg:mt-0 text-center lg:text-left flex flex-col items-center lg:items-start px-4 sm:px-6 md:px-8 lg:px-0">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-8 lg:mt-16 max-w-full md:max-w-2xl ">
    HR Software For <br />
    Tech Companies
  </h1>
  <p className="text-sm sm:text-base md:text-lg mt-4 sm:mt-6 lg:mt-10 max-w-full sm:max-w-md lg:max-w-lg  leading-relaxed">
    HR challenges in the technology industry are different. That’s why Namely’s HR
    technology is designed to scale with your company, securely streamline your
    business systems, and engage your workforce. With compliance resources keeping
    you one step ahead, delivered HR analytics, and world-class support – it’s no
    wonder Namely is the go-to HR software for tech companies.
  </p>
  <button  className="bg-transparent mt-4 sm:mt-6 lg:mt-10 border border-slate-400 uppercase  px-4 py-2 w-full sm:w-auto md:w-52 rounded-md">
    Request a Call
  </button>
  
    <ShootingStars/>
    <StarsBackground/>  
  
</div>
</div>
  <div className="container mx-auto px-4 bg-background ">
    
  <h1 className="text-center text-3xl sm:text-4xl mt-10 sm:mt-14 ">
    The Trusted HR Solution in the Technology Industry
  </h1>

  <div className="flex flex-col lg:flex-row mt-8 lg:mt-16">
    {/* Left Content */}
    <div className="flex-1">
    <h2 className="mt-10 ml-0 lg:ml-16 lg:mt-24 text-lg  w-11/12 sm:w-72 sm:text-lg   text-center lg:text-left mx-auto lg:mx-0">
     Streamline Your Operations
    </h2>

      <p className="mt-4  text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:ml-16">
        Tie your business systems together into a single, secure place with seamless workflows to give you time back in your day.
      </p>

      <h2 className=" mt-10  ml-0 lg:ml-16 lg:mt-14 text-lg w-11/12 sm:w-72 sm:text-lg text-center lg:text-left mx-auto lg:mx-0">
       Build a Winning Team & Culture
     </h2>
      <p className="mt-4  text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:ml-16">
        As you continue to scale, Namely provides you with the tools to hire, onboard, and engage tech talent to reach their best potential.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
      <Image
        src={DashboardImg}
        alt="Dashboard Image"
        className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] object-contain"
      />
    </div>
  </div>
</div> 
<div className="flex flex-col lg:flex-row items-center mt-10 ">
  {/* Image Container */}
  <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
    <Image
      src={GraphImg}
      alt="Graph Image"
      className="w-full ml-0 lg:ml-16 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain"
    />
  </div>

  {/* Text Container */}
  <div className="mt-8 lg:mt-0 lg:ml-16 w-full lg:w-1/2 bg-background">
    {/* Section 1 */}
    <h2 className="mt-6 lg:mt-32 text-lg  w-11/12 sm:w-[350px]  text-center lg:text-left mx-auto lg:mx-0">
      Leverage Modern, Intuitive Technology
    </h2>
    <p className="mt-4 text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:ml-0">
      Namely’s HR Tech makes it easy for your team to self-serve, and is built for flexibility to fit your unique business needs.
    </p>

    {/* Section 2 */}
    <h2 className="mt-10 lg:mt-14 text-lg  w-11/12 sm:w-[350px]  text-center lg:text-left mx-auto lg:mx-0">
      Gain Instant Access to Business Insights
    </h2>
    <p className="mt-4  text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:ml-0">
      With pre-built HR analytics dashboards and custom reporting, Namely’s HR technology keeps you in the know about your workforce.
    </p>
  </div>
</div>


<div className="flex flex-col lg:flex-row mt-8 lg:mt-16 bg-background">
  {/* Left Content */}
  <div className="flex-1 px-4 sm:px-8 lg:ml-10">
    <h2 className="mt-10 lg:mt-24 text-lg sm:text-xl text-center lg:text-left mx-auto lg:mx-16">
      Feel Supported Now & In the Future
    </h2>
    <p className="mt-4  text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:ml-16">
      HR for the tech industry can be complicated, that’s why Namely is here for you throughout implementation and beyond with dedicated support.
    </p>
  </div>

  {/* Right Image */}
  <div className="flex-1 flex justify-center items-center mt-8 lg:mt-5">
    <Image
      src={Circle}
      alt="Dashboard Image"
      className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[350px] object-contain"
    />
  </div>
</div>

    </>
  );
}

export default Page1;
