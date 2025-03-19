"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta19() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Check Your Email for Instructions
          </h2>
          <p className="md:text-md">
            We've sent you an email with instructions on how to reset your
            password.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More">Learn More</Button>
            <Button title="Back" variant="secondary">
              Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
