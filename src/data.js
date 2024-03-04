import {
  cisco,
  deloitte,
  okta,
  volvo,
  walmart,
  brainstorm,
  diagramming,
  mapping,
  meeting,
  planning,
  research,
  scrum,
  notion,
  figma,
  adobe,
  temis,
  ux,
  marketing,
  product,
  engineering,
  consultant,
  agile,
  sales,
  miro,
  agileLogo,
  analytics,
  asana,
  autocad,
  freecad,
  jira,
  labview,
  matlab,
  monday,
  python,
  semrush,
  slack,
  zoom,
} from "./assets";

export const TRUSTED = [
  { name: "Cisco", image: cisco },
  { name: "Deloitte", image: deloitte },
  { name: "Okta", image: okta },
  { name: "Volvo", image: volvo },
  { name: "Walmart", image: walmart },
];

export const FEATURETEXT = [
  {
    title: "Free Forever",
    description:
      "Our plan to give you unlimited team member, 3 boards and 300+ experts-made templates. Signing up with your work email lets you bring in your team faster. See our Pricing plan for more features.",
    keypoint: "Pricing plan",
  },
  {
    title: "Easy Integration",
    description:
      "Miro has 100+ powerful integration with tools you already use like G Suit, Slack and Jira. So your workflow is seamless.View the full list in our Marketplace.",
    keypoint: "Marketplace",
  },
  {
    title: "Security first",
    description:
      "We treat your data like your would - with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center",
    keypoint: "Trust Center",
  },
];

export const BUILDWORKTEST = {
  brainstorm: {
    title: "Brainstorming",
    description:
      "Unleash creating ideas and build on them with the help of sticky notes,images,mind maps, videos, drawing capabilities - the list goes on.",
    image: brainstorm,
  },
  diagramming: {
    title: "Diagramming",
    description:
      "Diagramming is a visual method of representing information, concepts, and relationships. It allows individuals to take complex information and present it in a simplified, visual format that is easy to understand",
    image: diagramming,
  },
  mapping: {
    title: "Mapping",
    description:
      "The activity or process of creating a picture or diagram that represents something: data mapping. the mapping of supply chains.",
    image: mapping,
  },
  meeting: {
    title: "Meetings & Workshops",
    description:
      "A planned occasion when people come together, either in person or online (= using the internet), to discuss something: We're having a meeting on Thursday to discuss the problem.",
    image: meeting,
  },
  planning: {
    title: "Strategic Planning",
    description:
      "The control of urban development by a local government authority, from which a licence must be obtained to build a new property or change an existing one.",
    image: planning,
  },
  research: {
    title: "Research & Design",
    description:
      "The systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.",
    image: research,
  },
  scrum: {
    title: "Scrum Events",
    description:
      "There are five Scrum events (the Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective), each with their own purpose, time constraints and participants..",
    image: scrum,
  },
};

export const BUILDTEAMTEXT = {
  ux: {
    list: [
      "Build low-fi wireframes",
      "Involve stakeholders in the design process",
      "Run engaging design workshops",
    ],
    logo: [notion, figma, adobe, temis],
    image: ux,
  },
  marketing: {
    list: [
      "Tap into your network",
      "Take advantage of the market and media",
      "Repeat business is built on trust",
      "Using creative and expert content",
    ],
    logo: [analytics, slack, semrush],
    image: marketing,
  },
  product: {
    list: [
      "Understanding and representing user needs",
      "Monitoring the market ",
      "Defining a vision for a product",
      "Aligning stakeholders around the vision",
    ],
    logo: [miro, jira, asana],
    image: product,
  },
  engineering: {
    list: [
      "Innovation and Creativity",
      "Interdisciplinary Nature",
      "Ethical and Sustainable Considerations",
    ],
    logo: [autocad, python, matlab, labview, freecad],
    image: engineering,
  },
  consultant: {
    list: [
      "Client-Centric Approach",
      "Data-Driven Decision-Making",
      "Change Management and Implementation",
      "Measurable Outcomes and Return on Investment ",
    ],
    logo: [monday, slack],
    image: consultant,
  },
  agile: {
    list: [
      "Guidance in Agile Practices",
      "Facilitation of Agile Events",
      "Continuous Improvement and Adaptation",
      "Team and Individual Development",
    ],
    logo: [agileLogo],
    image: agile,
  },
  sales: {
    list: [
      "Effective Communication Skills",
      "Understanding Customer Needs and likings",
      "Resilience and Persistence",
    ],
    logo: [analytics, zoom],
    image: sales,
  },
};
