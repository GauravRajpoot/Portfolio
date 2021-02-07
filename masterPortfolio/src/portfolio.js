/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gaurav Rajpoot",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Gaurav Rajpoot",
  logo_name: "Gaurav Rajpoot",
  nickname: "explorer | enthusiastic",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1l_qZGR-iz7lJu3DEZ_kJ_N5z12cxZMx5/edit?rtpof=true",
  portfolio_repository: "https://github.com/GauravRajpoot/DSA-Practice",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/GauravRajpoot",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gaurav-rajpoot-4a6b64141/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:gaurav27rajpoot@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/GauravR78245358",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Machine learning and Deep learning projects",
        "⚡ End to end model development with deployment on various platform",
        "⚡ Exploring NLP and Computer vission",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "vscode-icons:file-type-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "",
            color: "#084c61",
          },
        },
        {
          skillName: "Tensorflow",
          //Use Iconify 
          //simple icons
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web and mobile Automation",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience in web automation using selenim web driver",
        "⚡ Experience in api testing using Rest assured and halding json response and request",
        "⚡ Experience in windows app based testing using Winapp driver",
        "⚡ Worked with Git, Jenkins and Maven to generate build and reports",
        "⚡ Experience in mobile based testing using Appium",
      ],
      softwareSkills: [
        {
          skillName: "Selenium",
          fontAwesomeClassname: "logos:selenium",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Appium",
          fontAwesomeClassname: "logos:appium",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Cucumber",
          fontAwesomeClassname: "logos:cucumber",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Rest Assured",
          fontAwesomeClassname: "mdi:api",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "vscode-icons:file-type-maven",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "fa-brands:git-alt",
          style: {
            backgroundColor: "transparent",
            color: "#E34F26",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Creating testing showcase using docker and kubernetes",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "cib:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "ABES Institute of Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "Abesit-logo.png",
      alt_name: "ABESIT",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science.",
        "⚡ I have been awared appreciation certificate from director of ABESIT for all round excelence",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://abesit.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Complete Python",
      subtitle: "-  Jose Portilla",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6DQLLPZT/",
      alt_name: "Udemy",
      color_code: "white",
    },
    {
      title: "Docker and Kubernetes: The Complete Guide",
      subtitle: "-   Stephen Grider",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-12d51f28-ad92-45eb-8e90-97bbdb941d77/",
      alt_name: "Udemy",
      color_code: "white",
    },
    {
      title: " Deep Learning and Computer Vision A-Z™: OpenCV, SSD & GANs",
      subtitle: "-   Hadelin de Ponteves, Kirill Eremenko",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-GG2E3UMJ/",
      alt_name: "Udemy",
      color_code: "white",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Smart India Hackathon",
      subtitle: "- Self",
      logo_path: "SIH.png",
      certificate_link:
        "https://drive.google.com/file/d/12UyRf3sIy23uR0UCJZk6DsYeUkC2l1Ra/view?usp=sharing",
      alt_name: "Google",
      color_code: "white",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Nagarro",
          company_url: "https://www.nagarro.com/",
          logo_path: "Nagarro.png",
          duration: "March 2019 - PRESENT",
          location: "Haryana, Gurgaon",
          description:
            "I am working as a Automation developer. The projects involve all platform automation such as web,mobile and windows to deliver significant quality product. I am currently working in a R&D team which provide framework and all technical support to all other teams in their project.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "CEBS Worldwide",
          company_url:
            "https://www.cebsworldwide.com/",
          logo_path: "CEBS.png",
          duration: "March 2018 - July 2018",
          location: "Noida",
          description:
            "CEBS is a global IT company dedicated to providing E-Business solutions to worldwide customers in many verticals like Retail, BFSI, Airlines, Manufacturing, Telecom and Government, I have made some supervissed and unsupervised machine learning projects.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Hackathon",
      experiences: [
        {
          title: "Smart India Hackathon",
          company: "Government of India",
          company_url: "https://www.sih.gov.in/",
          logo_path: "SIH.png",
          duration: "June 2018 - July 2018",
          location: "MP, Indore",
          description:
            "We have been given a problem statement under Ministry of child and women welfare for creche.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gaurav.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "www.google.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "DSM Sugar Mill Rajpura, Badaun",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/bDJq66S9in3n2iSB6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8376838922",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
