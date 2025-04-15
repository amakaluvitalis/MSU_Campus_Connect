"use client";

import React from "react";

export function Layout203() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Empowering Alumni Connections: Engage, Mentor, and Network for
              Success
            </h3>
            <p className="mb-6 md:mb-8 md:text-md">
              Our Alumni Engagement features foster meaningful connections
              between current students and alumni. Through mentorship programs,
              a comprehensive directory, and professional networking
              opportunities, we create a thriving community.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Mentorship Program
                </h6>
                <p>
                  Connect with alumni for guidance and support in your academic
                  and career journey.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Alumni Directory
                </h6>
                <p>
                  Access a searchable database to find and connect with fellow
                  alumni easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
