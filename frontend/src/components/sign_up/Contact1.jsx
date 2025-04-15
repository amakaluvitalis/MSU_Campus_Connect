"use client";

import React, { useState } from "react";
import { Button, Checkbox } from "@relume_io/relume-ui";
import clsx from "clsx";

export function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.role) newErrors.role = "Please select a role.";
    if (!formData.terms) newErrors.terms = "You must accept the terms.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-blue-500 md:mb-4 dark:text-blue-400">
            Join
          </p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {submitted ? "Welcome!" : "Get Started"}
          </h2>
          <p className="md:text-md text-gray-600 dark:text-gray-300">
            {submitted
              ? "Your account has been created. Check your inbox!"
              : "Create your account and connect with the community."}
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto grid w-full max-w-md grid-cols-1 gap-6"
          >
            {/* Floating Label Input */}
            <div className="relative">
              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className={clsx(
                  "peer w-full rounded-md border px-4 pt-4 pb-2 transition-all duration-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white",
                  errors.name && "border-red-500"
                )}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600 dark:text-gray-400"
              >
                Name
              </label>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <input
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className={clsx(
                  "peer w-full rounded-md border px-4 pt-4 pb-2 transition-all duration-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white",
                  errors.email && "border-red-500"
                )}
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600 dark:text-gray-400"
              >
                Email
              </label>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <select
                id="role"
                value={formData.role}
                onChange={handleChange}
                className={clsx(
                  "w-full appearance-none rounded-md border bg-white px-4 py-3 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600",
                  errors.role && "border-red-500"
                )}
              >
                <option value="">Select your role</option>
                <option value="developer">ADMIN</option>
                <option value="designer">Student</option>
                <option value="product">Alumni</option>
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">{errors.role}</p>
              )}
            </div>

            <div className="flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, terms: checked })
                }
                className="transition-transform duration-200 ease-in-out checked:scale-110"
              />
              <label
                htmlFor="terms"
                className="cursor-pointer text-gray-600 dark:text-gray-300"
              >
                I accept the Terms
              </label>
            </div>
            {errors.terms && (
              <p className="mt-1 text-sm text-red-500">{errors.terms}</p>
            )}

            <div className="text-center">
            <Button
                  type="submit"
                  title={loading ? "Submitting..." : "Submit"}
                  disabled={loading}
                  className={clsx(
                    "w-full py-3 px-6 rounded-md text-white text-base font-semibold transition-all duration-300",
                    loading
                      ? "bg-blue-400 opacity-50 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  )}
                />

            </div>
          </form>
        ) : (
          <div className="mt-8 text-center animate-fade-in-up">
            <p className="text-lg font-medium text-green-600 dark:text-green-400">
               You're in! Welcome aboard!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
