"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog36() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Latest Insights and Updates
            </h2>
            <p className="md:text-md">
              Explore our latest articles and resources for students.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Education
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Maximize Your Campus Experience
                </h2>
              </a>
              <p>Discover tips to enhance your journey at Maseno University.</p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Networking
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Building Connections on Campus
                </h2>
              </a>
              <p>Learn how to network effectively with peers and alumni.</p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Events
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Upcoming Campus Events
                </h2>
              </a>
              <p>
                Stay updated on the latest events happening at Maseno
                University.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
