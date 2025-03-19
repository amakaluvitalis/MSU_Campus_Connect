"use client";

import React from "react";

export function Layout27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Empowering Connections: Our Mentorship Program for Students and
              Alumni
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              The Mentorship Program connects students with experienced alumni
              to foster career growth and personal development. Through a
              structured matching process, we ensure that each mentee is paired
              with a mentor who aligns with their academic and professional
              interests.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Matching
                </h3>
                <p>
                  Tailored connections for meaningful mentorship experiences.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Support
                </h3>
                <p>Guidance and resources for successful mentorship.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
