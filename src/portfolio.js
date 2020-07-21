import emoji from "react-easy-emoji";

const greeting = {
  username: "Serhii Lashchivskyi",
  title: "Hi all, I'm Serhii",
  subTitle: emoji(
    "An enthusiastic Front-End Developer 🚀  with little experience creating web applications using HTML5/ CSS3/ JavaScript/ React + Redux, Redux-Thunk, Redux-Form, HOC, React-Hooks, Axios, Flux-Flow (Ui <Bll <Dal) and some other cool libraries and environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Y65Aw6dDtKyJCptUswKhhY30lGk3oZlP/view?usp=sharing",
};

const skillsSection = {
  title: "What i do..",
  subTitle: "I use the following technologies:",
  skills: [
    emoji("⚡ Familiar with Scrum / Waterfall / Kanban methodologies"),
    emoji("⚡ Used the following programs: Trello / Miro / Jira / Slack"),
    emoji("⚡ I plan to study NodeJS / ReactNative in the near future"),
    emoji("⚡ I will be happy to get into a production company"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "react/redux",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "HTML 5",
      progressPercentage: "71%",
    },
    {
      Stack: "CSS 3",
      progressPercentage: "65%",
    },
    {
      Stack: "JS",
      progressPercentage: "66%",
    },
    {
      Stack: "React/Redux",
      progressPercentage: "70%",
    },
  ],
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Business Owner",
      company: "FRENCH CREPERIE",
      companylogo: require("./img/crepperie.jpg"),
      date: "06/2017 – 11/2019",
      desc: "Duties",
      descBullets: [
        "Selection and training of staff",
        "Drawing up a work schedule",
        "Financial Statements",
        "Cooperation with suppliers",
        "Advertising, Marketing",
        "Analysis of statistical data",
      ],
    },
    {
      role: "Sales Manager.",
      company: "I R M A",
      companylogo: require("./img/Irma.png"),
      date: "02/2016 – 06/2017",
      desc: "Duties",
      descBullets: [
        "Initial contact with the client",
        "Presentation of company services",
        "Negotiation",
        "Preparation of commercial offers",
        "Preparation and signing of a contract",
        "Re-attracting customers to collaborate.",
      ],
    },
    {
      role: "Sales Manager.",
      company: "ISTUDIO",
      companylogo: require("./img/istudio.jpg"),
      date: "06/2015 – 01/2016",
      desc: "Duties",
      descBullets: [
        "Customer service",
        "Order processing",
        "Attracting new customers",
        "Cash control",
        "Inventory",
      ],
    },
  ],
};

const education = {
  viewExperiences: true,
  experience: [
    {
      role: "React.js",
      company: "ITEA",
      companylogo: require("./img/itea.png"),
      date: "16.06.2020 – 18.07.2020",
      desc: "Description",
      descBullets: [
        "Configure the first React component using NPM, Babel, Webpack",
        "Working with props/state components",
        "JSX",
        "React Router",
        "Component + AJAX life cycle, work with axios module",
        "Redux",
        "Dynamic rendering",
        "Working with forms",
        "Using Promises",
        "Deploy the application",
      ],
    },
    {
      role: "JAVASCRIPT FUNDAMENTALS",
      company: "SoftServe",
      companylogo: require("./img/softServe.jpg"),
      date: "09/2019 – 11/2019",
      desc: "Description",
      descBullets: ["HTML5", "CSS3", "JavaScript (ES2018)"],
    },
    {
      role: "Magister degree",
      company: "Lviv Institute of Economics and Tourism",
      companylogo: require("./img/liet.jpg"),
      date: "2010 – 2015",
      desc: "Faculty of Management, Commodity Science and Business",
    },
  ],
};

// const contactInfo = {
//   title: emoji("Contact Me ☎️"),
//   subtitle:
//     "My Inbox is open for all.",
//   number: "+380681552207",
//   email_address: "Lashchivskyi@gmail.com",
// };

export { greeting, skillsSection, techStack, workExperiences, education };
