"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";


export function Layout246() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Transforming Campus Life: Engage, Connect, and Navigate with
              Campus Connect
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Campus Connect revolutionizes the university experience by
              seamlessly integrating event management, networking, campus
              navigation, and alumni engagement. Our platform empowers students,
              faculty, and alumni to connect and collaborate effortlessly.
              Discover a vibrant campus community where opportunities abound.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Streamlined Event Management for Every Campus Activity
            </h3>
            <p>
              Easily find, register, and participate in events tailored to your
              interests.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="/images/home_event.jpeg" 
                className="size-12" 
                alt="Event Image" />

            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Foster Connections Through Networking and Community Building
            </h3>
            <p>
              Join interest-based groups and connect with peers who share your
              passions.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Sign Up
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Navigate Your Campus with Ease and Confidence
            </h3>
            <p>
              Utilize our interactive map for real-time navigation to all campus
              locations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
