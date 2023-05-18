import React from "react";
import { features } from "../constants/data";
import styles from "../style";

const Features = () => {
  return (
    <div className={`w-full flex flex-col gap-10`}>
      {features?.map((feature, index) => (
        <div
          key={feature.id}
          className="w-full flex flex-col items-start gap-4"
        >
          <div className="bg-hover md:bg-transparent flex gap-2 ss:gap-4 sm:gap-6 items-center w-full">
            <h2 className="bg-primary text-white font-bold text-[15px] ss-text-[16px] sm:text-[17px] py-2 px-6 rounded-full">
              {feature.id}
            </h2>
            <h2
              className={`text-secondary tracking-tight sm:tracking-normal text-[16px] ss:text-[17px] sm:text-[18px] font-bold`}
            >
              {feature.title}
            </h2>
          </div>

          <div>
            <p
              className={`text-left sm:max-w-[85%] relative md:left-[90px] w-[95%] ${styles.paragraph}`}
            >
              {feature.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
