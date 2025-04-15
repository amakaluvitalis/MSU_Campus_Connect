"use client";

import React from "react";
import { Link } from "react-router-dom";

export function Navbar5() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Campus Connect</Link>
        <div className="hidden lg:flex gap-4">
          <Link to="/event-management" className="hover:text-gray-400">Events</Link>
          <Link to="/alumni-engagement" className="hover:text-gray-400">Networking</Link>
          <Link to="/campus-navigation" className="hover:text-gray-400">Map</Link>
        </div>
      </div>
    </nav>
  );
}
