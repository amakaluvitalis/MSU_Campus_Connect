"use client";

import React from "react";
import MapImage from "../../images/female_holding_a_map.jpg";
import MapImage2 from "../../images/man_showing_directions.jpeg";




export function Layout24() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src={MapImage2}
                className="w-full object-cover"
              />
            </div>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Navigate Your Campus Effortlessly with Our Interactive GPS Map
            </h3>
            <p className="md:text-md">
              Our real-time GPS-based interactive map makes navigating Maseno
              University a breeze. Easily find buildings, event venues, and more
              with just a few taps.
            </p>
          </div>
          <div>
          <img src={MapImage} alt="Female holding a map" 
          className="w-full object-cover"
           />
          </div>
        </div>
      </div>
    </section>
  );
}
