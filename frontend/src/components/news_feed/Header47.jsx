"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Updates</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Stay Informed Here
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              The News Feed is your go-to source for the latest updates from
              Maseno University. Stay connected with important news, upcoming
              events, and valuable opportunities tailored for our alumni
              community.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Sign Up" variant="secondary">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
