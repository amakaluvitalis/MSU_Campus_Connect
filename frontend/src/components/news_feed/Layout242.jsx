"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout242() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Stay Updated with Upcoming Alumni Events and Registration
              Opportunities
            </h3>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Join Us for Exciting Alumni Events and Networking Opportunities
              </h3>
              <p className="mb-5 md:mb-6">
                Explore our calendar to register for upcoming alumni events and
                connect.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Register
                </Button>
              </div>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Don’t Miss Out on Our Engaging Alumni Networking Events
              </h3>
              <p className="mb-5 md:mb-6">
                Sign up now to secure your spot and network with fellow alumni.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Join
                </Button>
              </div>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Connect with Alumni: Upcoming Events and Opportunities Await You
              </h3>
              <p className="mb-5 md:mb-6">
                Stay connected and informed about events tailored for our alumni
                community.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
