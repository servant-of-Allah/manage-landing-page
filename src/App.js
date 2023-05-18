import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { tabletPattern } from "./constants";

const App = () => (
  <div className="w-[100vw] tracking-wide overflow-hidden app-main">
    <img
      className={`${styles.bgPattern}`}
      src={tabletPattern}
      alt="background-pattern"
    />
    <div className={`w-full ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`w-full ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`w-full pr-0 pl-6 ss:pr-6 sm:pl-16 sm:pr-16 mt-[30px]`}>
      <div className={`${styles.boxWidth} `}>
        <About />
      </div>
    </div>

    <div className={`w-full mt-8 md:mt-24 `}>
      <h2 className={`w-full text-center mb-[60px] ${styles.subHeading}`}>
        What they've said?
      </h2>
      <Testimonials />
    </div>

    <div
      id="career"
      className={`relative h-[250px] mt-[100px] md:mt-[200px] flex ${styles.flexCenter} bg-primary w-full ${styles.paddingX} simplify overflow-hidden`}
    >
      {/* bg pattern */}
      <img
        className={`w-[400px] opacity-[0.1] absolute z-[1] left-[-70%] ss:left-[-30%] ss:top-0 top-4 sm:left-[15%] sm:top-[-20px] sm:w-[500px]`}
        src={tabletPattern}
        alt="pattern svg"
      />
      <img
        className={`hidden md:block opacity-[0.1] absolute z-[1] right-[-15%] bottom-[50%] max-w-[500px]`}
        src={tabletPattern}
        alt="pattern svg"
      />
      {/* bg pattern */}
      <div
        className={`z-[100] flex gap-10 justify-between flex-col sm:flex-row ${styles.boxWidth}`}
      >
        <h2
          className={`tracking-wider sm:tracking-normal w-full px-10 text-center sm:text-left ${styles.subHeading} sm:max-w-[49%] sm:px-0 text-white`}
        >
          Simplify how your team works today.
        </h2>

        <div className="grid place-items-center">
          <button
            type="button"
            className="w-max bg-light hover:text-opacity-[0.5] font-semiBold text-brightRed px-6 py-3 rounded-full shadow-sm shadow-gray-500"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>

    <div className={`bg-footer w-full ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
        <p className="md:hidden text-primary text-center text-[15px] pb-[20px]">
          Copyright 2020. All rights reserved
        </p>
      </div>
    </div>
  </div>
);

export default App;
