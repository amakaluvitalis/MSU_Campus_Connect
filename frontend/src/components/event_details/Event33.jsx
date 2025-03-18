"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiMap } from "react-icons/bi";

export function Event33() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Schedule</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Event Schedule
            </h1>
            <p className="md:text-md">
              Join us for an engaging series of events designed to inspire and
              connect our campus community.
            </p>
          </div>
        </div>
        <Tabs defaultValue="fri-09-feb" className="flex flex-col justify-start">
          <TabsList className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center overflow-auto pl-[5vw] md:ml-0 md:w-full md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="fri-09-feb"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Fri 09 Feb
            </TabsTrigger>
            <TabsTrigger
              value="sat-10-feb"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Sat 10 Feb
            </TabsTrigger>
            <TabsTrigger
              value="sun-11-feb"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Sun 11 Feb
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="fri-09-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">8:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">
                    Opening Ceremony
                  </h5>
                  <div>Dr. Smith</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Auditorium</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">9:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">
                    Workshop on Innovation
                  </h5>
                  <div>Ms. Johnson</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Room 202</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">10:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">
                    Panel Discussion
                  </h5>
                  <div>Prof. Lee</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Hall A</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
          </TabsContent>
          <TabsContent
            value="sat-10-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">8:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">
                    Networking Breakfast
                  </h5>
                  <div>Mr. Brown</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Cafeteria</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">9:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">
                    Guest Speaker Session
                  </h5>
                  <div>Dr. Green</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Lecture Hall</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">10:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">
                    Closing Remarks
                  </h5>
                  <div>Dean</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Main Hall</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
          </TabsContent>
          <TabsContent
            value="sun-11-feb"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">8:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">
                    Morning Yoga Session
                  </h5>
                  <div>Instructor</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Gym</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">9:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">Career Fair</h5>
                  <div>Various</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Expo Center</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[6rem_max-content_1fr_max-content] md:gap-8 md:py-8">
              <div className="text-md md:text-lg">10:00 am</div>
              <div className="w-full md:w-36">
                <a
                  href="#"
                  className="relative block aspect-[3/2] md:aspect-square"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </a>
              </div>
              <div className="grid auto-cols-fr grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_.25fr]">
                <div>
                  <h5 className="text-xl font-bold md:text-2xl">
                    Feedback Session
                  </h5>
                  <div>Facilitator</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BiMap className="size-6 flex-none" />
                  <span>Room 101</span>
                </div>
              </div>
              <Button variant="secondary" size="primary" title="View details">
                <a href="#">View details</a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
