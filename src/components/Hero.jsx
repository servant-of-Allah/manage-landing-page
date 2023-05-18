import React from "react";
import styles from "../style";
import { hero } from "../constants/data";
import { illustration, tabletPattern, simplifyDesktop } from "../constants";

const Hero = () => {
  return (
    <section
      className={`hero flex justify-between lg:gap-10 md:text-left md:flex-row flex-col-reverse text-center sm:gap-4 gap-2 ${styles.marginY} ${styles.paddingY}`}
    >
      <div
        className={`flex md:items-start flex-1 flex-col md:gap-8 ${styles.flexCenter} sm:gap-6 gap-3`}
      >
        <h1 className={`${styles.heading1}`}>{hero.heading}</h1>
        <p
          className={`md:max-w-[59%] sm:max-w-[80%] max-w-[90%] ${styles.paragraph}`}
        >
          {hero.subText}
        </p>
        <button
          type="button"
          className="w-max bg-primary hover:bg-opacity-[0.7] font-semiBold text-hover px-6 py-3 mt-3 rounded-full shadow-md shadow-red-400"
        >
          Get Started
        </button>
      </div>

      <div className={`flex ${styles.flexCenter}`}>
        <img src={illustration} alt="hero illustration svg" />
      </div>
    </section>
  );
};

export default Hero;
