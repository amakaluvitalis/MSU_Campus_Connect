"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta20() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Update Your Profile Information
          </h2>
          <p className="md:text-md">
            Enhance your profile by updating your bio, skills, and interests to
            connect better.
          </p>
          <div className="mt-6 w-full max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button title="Submit">Submit</Button>
            </form>
            <p className="text-xs">
              By clicking Submit, you confirm your agreement with our Terms and
              Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
