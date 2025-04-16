import React, { useState, useEffect } from "react";

const Loader = () => {
  const [dotIndex, setDotIndex] = useState(0);

  const totalDots = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex((prev) => (prev + 1) % totalDots);
    }, 200); // speed of dot movement

    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    return [...Array(totalDots)].map((_, index) => (
      <span
        key={index}
        className={`text-3xl ${
          index === dotIndex ? "text-blue-600" : "text-gray-300"
        }`}
      >
        ●
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-1 mb-4">{renderDots()}</div>
    </div>
  );
};

export default Loader;
