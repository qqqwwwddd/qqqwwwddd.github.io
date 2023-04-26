/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "PARK JEONG IN",
  title: "안녕하세요,",
  subTitle: emoji("도전하며 성장하는 풀스택 개발자 박정인 입니다 👩🏻‍💻"),
  resumeLink:
    "https://drive.google.com/file/d/1dtuXQZH61OH4QBSZ9zPYiX6ah3dAPq5v/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/qqqwwwddd",
  tistory: "https://qqqwwwddd1.tistory.com",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "qqqwwwddd1@gmail.com",
  notion:
    "https://lightning-pocket-e85.notion.site/Full-stack-29b8aba83cdd455593de7e925ebb4138",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "",
  skills: [
    emoji(
      "⚡ 혼자 보다 함께 하는 것에 더 큰 의미를 두고 소통하는 과정을 좋아합니다"
    ),
    emoji("⚡ 실패하는 것을 두려워 하지 않고 끈기 있게 도전합니다."),
    emoji("⚡ 끊임없이 새로운 것을 배우고 성장하는 개발자가 되고싶습니다.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },

    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }

    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "동명대학교",
      subHeader: emoji(" 유통경영학과 졸업 🎓"),
      duration: emoji("🗓️ 2015.03 ~ 2020.02")
    },
    {
      schoolName: "그린컴퓨터아카데미",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: emoji(
        "자바 & 파이썬 활용 빅데이터 개발 실무자 양성 과정 수료 📚"
      ),
      duration: emoji("🗓️ 8개월 과정")
      // desc: "",
      // descBullets: [
      //   "Lorem  dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "부산정보산업진흥원",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: emoji("더존 비즈온 Web FullStack 개발자 양성 과정 수료 📚"),
      duration: emoji("🗓️ 6개월 과정 ")
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java ",
      progressPercentage: "75%"
    },
    {
      Stack: "HTML",
      progressPercentage: "75%"
    },
    {
      Stack: "CSS",
      progressPercentage: "75%"
    },
    {
      Stack: "JavaScript ", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {Stack: "React", progressPercentage: "70%"},
    {
      Stack: "DataBase",
      detail: emoji("💡 MariaDB 💡 MySQL")
    },
    {
      Stack: "ETC",
      detail: emoji(" 💡 Git 💡 Notion  💡 Figma ")
    },
    {
      Stack: "TOOLS",
      detail: emoji("💡 Visual Studio Code 💡 STS 💡 Eclipse ")
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
// };

// Some big projects you have worked on

const bigProjects = {
  title: "PROJECTS",
  subtitle: " 교육 과정 중 진행했던 프로젝트 입니다 ",
  projects: [
    {
      image: require("./assets/images/pixabay.png"),
      projectName: emoji("💻 pixabay 클론 코딩"),
      projectDesc: "React 학습을 위한 토이 프로젝트 ",
      footerLink: [
        {
          name: emoji("Github ❤︎"),
          url: "https://github.com/qqqwwwddd/fixabayClone.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/untacttour.png"),
      projectName: "✈️ Untactour ",
      projectDesc: "비대면 온라인 해외 여행 컨텐츠 쇼핑몰 프로젝트",
      footerLink: [
        {
          name: emoji("Github ❤︎"),
          url: "https://github.com/qqqwwwddd/untact-tour.git"
        }
      ]
    },
    {
      image: require("./assets/images/goco.png"),
      projectName: emoji("💼 GoCompany"),
      projectDesc: "그룹웨어(전자결재/일정관리) SpringBoot & React 프로젝트",
      footerLink: [
        {
          name: emoji("Github ❤︎"),
          url: "https://github.com/douzone-PCHR"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

const blogSection = {
  title: "BLOG",
  subtitle: emoji("클릭 시 페이지로 이동 합니다 👆"),
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://lightning-pocket-e85.notion.site/qqqwwwddd-8287efb3d20043b6824ab684a8b61bb7",
      image: require("../src/assets/images/notion.png"),
      title: "Notion",
      description: "프로젝트 진행 상황 기록 및 수업 내용 기록"
    },
    {
      url: "https://qqqwwwddd1.tistory.com/",
      image: require("../src/assets/images/tistoryLogo.png"),
      title: "Tistory",
      description: "개인 공부 기록 "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("CONTACT ME ☎️"),
  subtitle: "Let's Talk",
  number: "+82 10-5233-4330",
  email_address: "qqqwwwddd1@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  // workExperiences,
  openSource,
  bigProjects,
  // achievementSection,
  blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable
};
