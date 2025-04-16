"use client";

import React from "react";

export function Navbar5() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Campus Connect</a>
        <div className="hidden lg:flex gap-4">
          <a href="/event_details" className="hover:text-gray-400">Events</a>
          <a href="/networking_and_profiles" className="hover:text-gray-400">Networking</a>
          <a href="/campus_navigation" className="hover:text-gray-400">Map</a>
        </div>
      </div>
    </nav>
  );
}
