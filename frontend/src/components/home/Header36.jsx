"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
//import Masenovedio from "../../videos/Maseno_University_Welcome_tour.mp4"
import { Link } from "react-router-dom";

export function Header36() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Connect, Engage, and Thrive at Maseno University
        </h1>
        <p className="md:text-md">Masenovideo
          Campus Connect is your all-in-one platform for enhancing campus life.
          Discover events, network with peers, and navigate the campus
          effortlessly.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button asChild>
           <Link to="/About">Learn More</Link>
          </Button>

          <Button asChild variant="secondary">
            <Link to="/sign_up">Sign Up</Link>
          </Button>
        </div>
      </div>
      <div>
        {/* Video element */}
        <video
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
          autoPlay
          loop
          muted
          controls
        >
          <source type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
