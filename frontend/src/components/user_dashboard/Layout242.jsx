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
              Explore Your Interest-Based Groups and Recent Activities
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
                Stay Connected with Your Community and Engage Actively
              </h3>
              <p className="mb-5 md:mb-6">
                Discover the groups you’ve joined and the latest activities
                happening within them.
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
                Recent Activities in Your Groups
              </h3>
              <p className="mb-5 md:mb-6">
                Catch up on the latest discussions and events from your interest
                groups.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  View
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
                Manage Your Group Memberships and Notifications
              </h3>
              <p className="mb-5 md:mb-6">
                Easily adjust your group settings and stay informed about
                important updates.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
