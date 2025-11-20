export const aboutCards = [
  {
    icon: "/assets/globe.svg",
    content:
      "To inspire and empower individuals and communities through innovative solutions and sustainable practices, fostering a better future for all.",
  },
  {
    icon: "/assets/bulb.svg",
    content:
      "To inspire and empower individuals and communities through innovative solutions and sustainable practices, fostering a better future for all.",
  },
  {
    icon: "/assets/clock-up-arrow.svg",
    content:
      "To inspire and empower individuals and communities through innovative solutions and sustainable practices, fostering a better future for all.",
  },
];

export const futureDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  {
    label: "Agenda",
    href: "/",
    subItems: [
      {
        label: "Agenda",
        href: "/",
      },
      { label: "Speakers", href: "/" },
      { label: "Previos editions", href: "/" },
    ],
  },
  {
    label: "Speakers",
    href: "/",
    subItems: [
      { label: "Publications", href: "/" },
      { label: "Report", href: "/" },
    ],
  },
  {
    label: "Travel",
    href: "/",
    subItems: [
      { label: "How to get AlUla", href: "/" },
      { label: "Acomodation", href: "/" },
      { label: "Side events", href: "/" },
    ],
  },
  { label: "Contact us", href: "/" },
];
