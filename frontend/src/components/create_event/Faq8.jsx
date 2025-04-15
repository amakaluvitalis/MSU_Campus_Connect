"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about creating and managing events on
            Campus Connect.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I create an event?
            </h2>
            <p>
              To create an event, navigate to the 'Create Event' section on your
              dashboard. Fill out the event details, including the title, date,
              and location. Once submitted, your event will be reviewed and
              published.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I edit my event?
            </h2>
            <p>
              Yes, you can edit your event details anytime before the event
              date. Simply go to your events dashboard, select the event you
              wish to edit, and make the necessary changes. Don't forget to save
              your updates!
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What is event promotion?
            </h2>
            <p>
              Event promotion involves sharing your event details across various
              channels to attract attendees. You can promote your event on
              social media and through the Campus Connect platform. Utilize the
              sharing options available during the event creation process.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do reminders work?
            </h2>
            <p>
              Reminders are sent to registered attendees before the event
              starts. You can customize the reminder settings when creating your
              event. Attendees will receive notifications via the app and email.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Who can create events?
            </h2>
            <p>
              Both students and faculty members can create events on Campus
              Connect. Ensure you have the necessary permissions to create and
              manage events. If you encounter issues, please reach out for
              assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
