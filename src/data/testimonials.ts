export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The Jupiter Technology team built the CareerLink Africa platform from the ground up in under 8 weeks. The codebase is clean, performance is excellent, and they stayed communicative throughout. CareerLink wouldn't exist without them.",
    name: "Dorothy Osima",
    role: "Co-Founder & COO, CareerLink Africa",
    image: "/testimonials/dorothy-osima.jpeg",
  },
  {
    quote:
      "We needed a hiring platform that could handle background checks, interview scheduling, and payroll — all in one. The Jupiter Technology team understood the brief immediately and cut our time-to-hire by 60%.",
    name: "Gibson Kimata",
    role: "Founder, Hireqo",
    image: "/testimonials/gibson-kimata.png",
  },
];
