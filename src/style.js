const styles = {
  boxWidth: "ml-auto mr-auto xl:max-w-[1200px] w-full",

  heading1:
    "text-secondary tracking-normal font-bold leading-tight sm:text-[2.8rem] md:text-[3rem] lg:text-[3.5rem] ss:text-[2.3rem] text-[2rem] lg:max-w-[80%] w-full",
  subHeading:
    "text-secondary font-bold leading-tight tracking-tight sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.7rem] text-[1.7rem] w-[90%]",
  paragraph: "font-normal text-primary text-[15px] ss:text-[16px]",

  flexCenter: "justify-center items-center",
  flexStart: "items-start justify-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-8 py-2",

  marginY: "sm:my-10 my-2",

  bgPattern:
    "absolute z-[-20] right-[-20%] top-[-5%] ss:right-[-15%] ss:top-[-15%] sm:right-[-13%] sm:top-[-20%] md:right-[-18%] md:top-[-22%] lg:right-[-11%]",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
