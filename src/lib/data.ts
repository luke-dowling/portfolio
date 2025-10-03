import librixImageMobile from "@/images/librix-m.png";
import librixImageDesktop from "@/images/librix-d.png";
import rickImageMobile from "@/images/rick.jpeg";
import recordImageMobile from "@/images/record.jpg";
import type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: 0,
    title: "Librix",
    tagline: "Librix is a user based book exchange service.",
    description:
      "Librix is a user based book exchange service. We provide a REST API built with Express JS and MongoDB, for the storage of users, books, possible matches and chat intergration.",
    image_mobile: librixImageMobile,
    image_tablet: librixImageMobile,
    image_desktop: librixImageDesktop,
    techStack: ["MongoDb", "React Native", "Express"],
    url: "https://github.com/Final-Project-X",
  },
  {
    id: 1,
    title: "Rick Finder",
    tagline: "Because Google doesn’t have enough Ricks.",
    description: `It’s like Google, but only for "Rick and Morty" characters. Wanna know if a guy’s alive, dead, or... uh, "Schrödinger’s"? Boom—this app’s got you covered.`,
    image_mobile: rickImageMobile,
    image_tablet: rickImageMobile,
    image_desktop: rickImageMobile,
    techStack: ["React", "TypeScript", "RestAPI"],
    url: "https://github.com/Final-Project-X",
  },
  {
    id: 2,
    title: "Record Shop",
    tagline: "An e-commerce record shop for buying vinyl records.",
    description:
      "Record Shop brings the most dope records out there straight to your ears! The team think its about time some fake people were made and given some Records.",
    image_mobile: recordImageMobile,
    image_tablet: recordImageMobile,
    image_desktop: recordImageMobile,
    techStack: ["JavaScript", "Express", "Styled Components"],
    url: "https://github.com/Final-Project-X",
  },
];
