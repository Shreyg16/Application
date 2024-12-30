/* eslint-disable react/no-unescaped-entities */
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
    <div className="bg-background">
      <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-4 lg:px-10 py-10 lg:py-20">
        {/* Image Section */}
        <div className="hidden lg:block w-full lg:w-1/2 xl:w-5/12">
          <Image
            src={BgImg}
            alt="Tech Hero"
            className="w-full max-w-[600px] rounded-ee-[100px] -mt-20 -ml-12"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 xl:w-7/12 mt-8 lg:mt-0 text-center lg:text-left flex flex-col items-center lg:items-start px-4 sm:px-6 md:px-8 lg:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-8 lg:mt-16 max-w-full md:max-w-2xl">
            HR Software For <br className="hidden sm:inline" />
            Tech Companies
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 sm:mt-6 lg:mt-10 max-w-full sm:max-w-md lg:max-w-lg xl:max-w-2xl leading-relaxed">
            HR challenges in the technology industry are different. That's why Namely's HR
            technology is designed to scale with your company, securely streamline your
            business systems, and engage your workforce. With compliance resources keeping
            you one step ahead, delivered HR analytics, and world-class support – it's no
            wonder Namely is the go-to HR software for tech companies.
          </p>
          <button className="bg-transparent mt-4 sm:mt-6 lg:mt-10 border border-slate-400 uppercase px-4 py-2 w-full sm:w-auto md:w-52 rounded-md hover:bg-slate-700 transition-colors duration-300">
            Request a Call
          </button>
          
          <ShootingStars />
          <StarsBackground />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mt-10 sm:mt-14">
          The Trusted HR Solution in the Technology Industry
        </h2>

        <div className="flex flex-col lg:flex-row mt-8 lg:mt-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-16">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-center lg:text-left mx-auto lg:mx-0 lg:ml-16">
                Streamline Your Operations
              </h3>
              <p className="mt-4 text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:ml-16">
                Tie your business systems together into a single, secure place with seamless workflows to give you time back in your day.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-center lg:text-left mx-auto lg:mx-0 lg:ml-16">
                Build a Winning Team & Culture
              </h3>
              <p className="mt-4 text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:ml-16">
                As you continue to scale, Namely provides you with the tools to hire, onboard, and engage tech talent to reach their best potential.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <Image
              src={DashboardImg}
              alt="Dashboard"
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center mt-10 lg:mt-20">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src={GraphImg}
            alt="Graph"
            className="w-full ml-0 lg:ml-16 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain"
          />
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-16 space-y-8 lg:space-y-16 px-4 lg:px-0">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-center lg:text-left mx-auto lg:mx-0">
              Leverage Modern, Intuitive Technology
            </h3>
            <p className="mt-4 text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:mx-0">
              Namely's HR Tech makes it easy for your team to self-serve, and is built for flexibility to fit your unique business needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-center lg:text-left mx-auto lg:mx-0">
              Gain Instant Access to Business Insights
            </h3>
            <p className="mt-4 text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:mx-0">
              With pre-built HR analytics dashboards and custom reporting, Namely's HR technology keeps you in the know about your workforce.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-8 lg:mt-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-16">
          <h3 className="mt-10 lg:mt-24 text-lg sm:text-xl font-semibold text-center lg:text-left">
            Feel Supported Now & In the Future
          </h3>
          <p className="mt-4 text-center lg:text-left max-w-md lg:max-w-[630px] mx-auto lg:mx-0">
            HR for the tech industry can be complicated, that's why Namely is here for you throughout implementation and beyond with dedicated support.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-5">
          <Image
            src={Circle}
            alt="Support Circle"
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[350px] object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default Page1;

