"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout372() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Profile</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Manage Your Profile
            </h2>
            <p className="md:text-md">
              Edit your information and preferences easily.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="flex flex-col border border-border-primary">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 1"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Quick Access to Your Events
                  </h3>
                  <p>View and manage your registered events.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Edit"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 2"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Quick Access to Your Events
                  </h3>
                  <p>View and manage your registered events.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Edit"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Quick</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Enhance Your Campus Experience
                  </h3>
                  <p>Discover opportunities and connect with others.</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
