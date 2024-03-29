import React from "react";
import { Link, NavLink } from "react-router-dom";
import { meeting } from "../assets";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Footer";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color="193, 11, 111"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export const ContactUs = () => {
  return (
    <>
    <div>
      <Cursor />
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 ">
          <svg
            className="absolute left-0 hidden h-full  transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="black"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={meeting}
            alt="Contact Us"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-2 mb-12 text font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-100">
              <NavLink className={"hover:underline"} to="/">HOME</NavLink> / CONTACT
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-5xl sm:leading-none">
              Get in Touch{" "}
            </h2>
            <p className="pr-5 mt-10 text-base  md:text-lg">
              Schedule a call with us by filling out the details below and
              choose a meeting time that suits you.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 ">
        
        <iframe
          src="https://koalendar.com/e/meet-with-satyam-kumar"
          title="Schedule a Call"
          className="w-full h-[100vh] "
          frameBorder="0"
        ></iframe>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
