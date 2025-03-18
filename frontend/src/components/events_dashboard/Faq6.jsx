"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          FAQs
        </h2>
        <p className="md:text-md">
          Find answers to common questions about event registration, creation,
          and participation.
        </p>
        <div className="mt-6 md:mt-8">
          <Button title="Contact" variant="secondary">
            Contact
          </Button>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How do I register?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To register for an event, simply click on the event details and
              select the 'Register' button. You will receive a confirmation
              email once your registration is successful. Make sure to check
              your spam folder if you don’t see it in your inbox.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Can I create events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes! If you have the necessary permissions, you can create events
              through the 'Create Event' section. Fill out the required details,
              upload images, and promote your event to the campus community.
              Don't forget to share it on social media!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What if I can't attend?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you cannot attend an event, you can cancel your registration
              through your dashboard. This helps organizers manage attendance
              effectively. You will also receive updates about future events
              that may interest you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How to find events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can find events by browsing the Events Dashboard, where all
              upcoming events are listed. Use the search feature to filter by
              category or date. Additionally, check the featured events section
              for highlights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Who can participate?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Participation is open to all students, faculty, staff, and alumni
              of Maseno University. Some events may have specific eligibility
              criteria, which will be indicated in the event details. We
              encourage everyone to engage and connect!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
