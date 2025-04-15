"use client";

import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -0.0022,
  lng: 34.5986,
};

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Navigate Your Campus Effortlessly with Our Interactive Map Feature
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Our Campus Navigation system offers real-time GPS assistance to
              help you find your way. Easily locate buildings, offices, and
              event venues with just a few taps.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Interactive Map
                </h6>
                <p>
                  Find your way with precise directions and location-based
                  search functionalities.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Route Suggestions
                </h6>
                <p>
                  Get optimal routes to your destinations for a seamless campus
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div>
            <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["marker"]}>
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
              <MarkerF position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </section>
  );
}
