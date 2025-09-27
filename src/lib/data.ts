import librixImageMobile from "@/images/librix-m.png";
import librixImageDesktop from "@/images/librix-d-2.png";
import type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: 0,
    title: "Librix",
    tagline: "Librix is a user based book exchange service",
    description:
      "Librix is a user based book exchange service. We provide a REST API built with Express JS and MongoDB, for the storage of users, books, possible matches and chat intergration.",
    image_mobile: librixImageMobile,
    image_tablet: librixImageMobile,
    image_desktop: librixImageDesktop,
    techStack: ["React Native", "MongoDb", "Express"],
    url: "https://github.com/Final-Project-X",
  },
  {
    id: 1,
    title: "Example 2",
    tagline: "Librix is a user based book exchange service",
    description:
      "Librix is a user based book exchange service. We provide a REST API built with Express JS and MongoDB, for the storage of users, books, possible matches and chat intergration.",
    image_mobile: librixImageMobile,
    image_tablet: librixImageMobile,
    image_desktop: librixImageDesktop,
    techStack: ["React", "TypeScript", "Express"],
    url: "https://github.com/Final-Project-X",
  },
  {
    id: 2,
    title: "Example 3",
    tagline: "Librix is a user based book exchange service",
    description:
      "Librix is a user based book exchange service. We provide a REST API built with Express JS and MongoDB, for the storage of users, books, possible matches and chat intergration.",
    image_mobile: librixImageMobile,
    image_tablet: librixImageMobile,
    image_desktop: librixImageDesktop,
    techStack: ["TypeScript", "JavaScript", "Express"],
    url: "https://github.com/Final-Project-X",
  },
];
