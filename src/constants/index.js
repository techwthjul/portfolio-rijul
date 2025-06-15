import {
  mobile,
  backend,
  creator,
  web,
  docker,
  git,
  threejs,
  flightFare,
  eltPipeline,
  cyberPulse,
  sqlProject,
  electricity,
  // Data science tech imports
  aws,
  azure,
  databricks,
  mongodb,
  pandas,
  powerbi,
  python,
  snowflake,
  spark,
  sql,
  tableau,
  // Company imports
  iconsult,
  syracuse,
  ltimindtree,
  bachelors,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Engineer",
    icon: web,
  },
  {
    title: "MLOps and Cloud Native Enthusiast",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Travel+Tech Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Databricks",
    icon: databricks,
  },
  {
    name: "Snowflake",
    icon: snowflake,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Spark",
    icon: spark,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const education = [
  {
    degree: "Master of Science in Information Systems Specialization in Data Science",
    school_name: "Syracuse University, New York, USA",
    icon: syracuse,
    iconBg: "#E6DEDD",
    date: "Graduated - May 2025",
    gpa: "3.78/4.0",
    courses: [
      "Introduction to Data Science (R Programming)",
      "Database Management System (SQL, NoSQL)",
      "Cloud Management (AWS, Azure)",
      "Applied Machine Learning (Python, PySpark)",
      "Business Analysis (Excel, Tableau, PowerBI)",
    ],
  },
  {
    degree: "Bachelor of Engineering in Electronics Engineering",
    school_name: "University of Mumbai, Mumbai, India",
    icon: bachelors, // Changed from iconsult to bachelors
    iconBg: "#383E56",
    date: "Graduated - August 2022",
    gpa: "3.4/4.0",
    courses: [
      "Data Structures & Algorithms",
      "Database Management System",
      "Object Oriented Programming",
      "Electrical Networking Systems",
    ],
  },
];

const experiences = [
  {
    title: "Data Engineer Intern",
    company_name: "iConsult Collaborative",
    icon: syracuse,
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      "Leveraged user engagement data and predictive modeling to segment customers and implement targeted retention strategies.",
      "Conducted A/B testing on segmented customer cohorts to optimize retention strategies, resulting in a 15% reduction in churn rate.",
      "Built an ETL data pipeline for a subscription-based service provider using Airflow and AWS, reducing manual work by 40%.",
      "Used NLP techniques for text classification and sentiment analysis of customer feedback, which was integrated into a Tableau dashboard with alerts for high-priority tickets, cutting response time by 30%.",
      "Collaborated with cross-functional teams to recommend KPI-driven reports and streamline data science models within Agile framework"
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Syracuse University",
    icon: syracuse,
    iconBg: "#E6DEDD",
    date: "January 2024 - May 2024",
    points: [
      "Collaborated with UK startups to guide sentiment analysis using R (tidytext, afinn) and A/B testing via Brevo.",
      "Optimized email campaigns by analyzing emotional tone, subject lines, CTAs, and send-time performance.",
    ],
  },
  {
    title: "Cloud Infrastructure Engineer",
    company_name: "LTIMindtree",
    icon: ltimindtree,
    iconBg: "#383E56",
    date: "July 2022 - June 2023",
    points: [
      "Built and maintained scalable cloud infrastructure on Microsoft Azure, provisioning resources for secure data storage, compute, and networking across hybrid environments.",
      "Developed ETL pipelines using Azure Databricks to support real-time and batch processing for enterprise data warehousing.",
      "Implemented messaging workflows with Apache Kafka to enable seamless microservices data streaming in EMS.",
      "Orchestrated complex workflows using Airflow DAGs and modularized transformations with dbt.",
    ],
  },
];

const testimonials = [
  {
    videoUrl: "https://www.youtube.com/watch?v=0OOGlrK5_HM",
    thumbnail: "https://img.youtube.com/vi/0OOGlrK5_HM/0.jpg",
    title: "ELT Pipeline using Airflow, DBT, Snowflake and Cosmos",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=BHulUrbyDXo",
    thumbnail: "https://img.youtube.com/vi/BHulUrbyDXo/0.jpg",
    title: "A Day in Life of a Master's Student",
  },
];

const projects = [
  {
    name: "Airflow + DBT + Snowflake ELT Pipeline",
    description:
      "Cloud-based ELT pipeline orchestrated using Airflow and DBT for automated transformation and testing on Snowflake with Cosmos-triggered CI/CD runs.",
    tags: [
      { name: "Airflow", color: "blue-text-gradient" },
      { name: "DBT", color: "green-text-gradient" },
      { name: "Snowflake", color: "pink-text-gradient" },
    ],
    image: eltPipeline,
    source_code_link: "https://github.com/techwthjul/airflow-dbt-snowflake-pipeline",
  },
  {
    name: "CyberPulse: Predictive Threat Detection",
    description:
      "ML-powered cybersecurity threat detection tool analyzing 40K+ logs using XGBoost for real-time anomaly detection (AUC 0.92).",
    tags: [
      { name: "XGBoost", color: "orange-text-gradient" },
      { name: "Cybersecurity", color: "green-text-gradient" },
      { name: "Anomaly Detection", color: "pink-text-gradient" },
    ],
    image: cyberPulse,
    source_code_link: "https://github.com/techwthjul/ML-CyberPulse-ThreatDetection",
  },
  {
    name: "Dynamic Flight Fare Prediction",
    description:
      "Predicts and classifies flight ticket prices using tree-based models like XGBoost and Random Forest (R²: 0.9551, AUC: 0.9882).",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Pricing", color: "green-text-gradient" },
      { name: "XGBoost", color: "pink-text-gradient" },
    ],
    image: flightFare,
    source_code_link: "https://github.com/techwthjul/Dynamic_Pricing_ML-Project",
  },
  {
    name: "Electricity Consumption Forecast App",
    description:
      "Interactive R Shiny app for forecasting electricity use based on environmental and property features, with real-time visual insights.",
    tags: [
      { name: "R Shiny", color: "blue-text-gradient" },
      { name: "Energy Forecasting", color: "green-text-gradient" },
      { name: "Visualization", color: "pink-text-gradient" },
    ],
    image: electricity,
    source_code_link: "https://github.com/techwthjul/Electricity-Consumption-Prediction-App-Using-Shiny-and-R-Programming-",
  },
  {
    name: "SQL App for Student Job Allocation",
    description:
      "SQL-based automation app using views, stored procedures, and PowerApps UI to assign jobs to unplaced students efficiently.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "PowerApps", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    image: sqlProject,
    source_code_link: "https://github.com/techwthjul/Student_Employment_App_SQL",
  },
];

const certifications = [
  {
    name: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2024",
    credential: "Your-Credential-ID",
    image: aws,
    verify_link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/92H9V7KDN14EQH3D", // Add your actual verification link
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    organization: "Microsoft",
    date: "2024",
    credential: "Your-Credential-ID",
    image: azure,
    verify_link: "https://www.credly.com/badges/5f532ece-9b52-4387-8c6d-62c70b3b29d1/linked_in_profile", // Add your actual link
  },
  {
    name: "Microsoft Azure Administrator Associate",
    organization: "Microsoft",
    date: "2024",
    credential: "Your-Credential-ID",
    image: azure,
    verify_link: "https://www.credly.com/badges/dcc7f7fe-c808-4cc0-97dd-3bafd09c9c2f/linked_in_profile", // Add your actual link
  },
  {
    name: "Tableau Desktop Specialist",
    organization: "Tableau",
    date: "2024",
    credential: "Your-Credential-ID",
    image: tableau,
    verify_link: "https://www.credly.com/badges/d855bcd0-eb4d-4fbd-a05b-572632b2d5c5/linked_in_profile", // Add your actual link
  },
  {
    name: "Databricks Data Engineer Associate",
    organization: "Databricks",
    date: "Pursuing",
    credential: "In Progress",
    image: databricks,
    verify_link: "#", // No link for in-progress certification
  },
];

const blogs = [
  {
    title: "Building Scalable ETL Pipelines with Apache Airflow and DBT",
    description:
      "A comprehensive guide on implementing production-ready data pipelines using modern data stack tools. Learn how to orchestrate complex workflows and ensure data quality.",
    tags: [
      {
        name: "DataEngineering",
        color: "blue-text-gradient",
      },
      {
        name: "Airflow",
        color: "green-text-gradient",
      },
      {
        name: "DBT",
        color: "pink-text-gradient",
      },
    ],
    image: eltPipeline,
    blog_link: "https://medium.com/@rijulu17ugawekar", // Update when you publish this article
    date: "Jan 2024",
    read_time: "8 min read",
  },
  {
    title: "Real-time Threat Detection using Machine Learning",
    description:
      "Exploring how XGBoost and feature engineering can be used to build an effective cybersecurity threat detection system with high accuracy.",
    tags: [
      {
        name: "MachineLearning",
        color: "blue-text-gradient",
      },
      {
        name: "Cybersecurity",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: cyberPulse,
    blog_link: "https://medium.com/@rijulu17ugawekar", // Update when you publish this article
    date: "Dec 2023",
    read_time: "6 min read",
  },
  {
    title: "Dynamic Pricing Strategies in Aviation using ML",
    description:
      "An in-depth analysis of how machine learning models can optimize airline pricing strategies based on demand patterns and seasonality.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Pricing",
        color: "green-text-gradient",
      },
      {
        name: "Aviation",
        color: "pink-text-gradient",
      },
    ],
    image: flightFare,
    blog_link: "https://medium.com/@rijulu17ugawekar", // Update when you publish this article
    date: "Nov 2023",
    read_time: "10 min read",
  },
];

export { services, technologies, education, experiences, testimonials, projects, certifications, blogs };
