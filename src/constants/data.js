import { ali, anisha, richard, shanai } from "./index";

import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

export const navLinks = [
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "career",
    title: "Careers",
  },
  {
    id: "community",
    title: "Community",
  },
];

export const hero = {
  heading: "Bring everyone together to build better products.",
  subText:
    "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",
};

export const features = [
  {
    id: "01",
    title: "Track company-wide progress",
    content:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "02",
    title: "Advanced built-in reports",
    content:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "03",
    title: "Everything you need in one place",
    content:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export const testimonials = [
  {
    id: "testimonial-1",
    image: anisha,
    name: "Anisha Li",
    content:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    id: "testimonial-2",
    image: ali,
    name: "Ali Bravo",
    content:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    id: "testimonial-3",
    image: richard,
    name: "Richard Watts",
    content:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    id: "testimonial-4",
    image: shanai,
    name: "Shanai Gough",
    content:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: (
      <AiFillFacebook size={25} className="text-white hover:text-brightRed" />
    ),
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-2",
    icon: (
      <AiFillYoutube size={25} className="text-white hover:text-brightRed" />
    ),
    link: "https://www.youtube.com/",
  },
  {
    id: "social-media-3",
    icon: (
      <AiFillTwitterCircle
        size={25}
        className="text-white hover:text-brightRed"
      />
    ),
    link: "https://www.twitter.com/",
  },

  {
    id: "social-media-4",
    icon: <BsPinterest size={25} className="text-white hover:text-brightRed" />,
    link: "https://www.pinterest.com/",
  },
  {
    id: "social-media-5",
    icon: (
      <AiFillInstagram size={25} className="text-white hover:text-brightRed" />
    ),
    link: "https://www.instagram.com/",
  },
];
