import React from "react";
import styles from "../style";
import Features from "./Features";
import { tabletPattern } from "../constants";

const About = () => {
  return (
    <article
      id="about"
      className="relative flex gap-12 py-10 md:text-left md:flex-row flex-col md:justify-between items-start text-center about"
    >
      <img
        className={`hidden md:block absolute w-[55%] z-[-1] top-[50%] left-[-45%]`}
        src={tabletPattern}
        alt="pattern svg"
      />
      <div
        className={`flex flex-1 md:${styles.flexStart} flex-col gap-6 ${styles.flexCenter}`}
      >
        <h3 className={`${styles.subHeading}`}>
          What's different about Manage?
        </h3>
        <p
          className={`md:max-w-[60%] sm:max-w-[80%] max-w-[95%] ${styles.paragraph}`}
        >
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="flex-1">
        <Features />
      </div>
    </article>
  );
};

export default About;
