import {
  mobile,
  backend,
  creator,
  web,
  docker,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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

const experiences = [
  {
    title: "Data Engineer Intern",
    company_name: "iConsult Collaborative",
    icon: iconsult, // Changed from starbucks
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      // ... your points ...
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Syracuse University",
    icon: syracuse, // Changed from tesla
    iconBg: "#E6DEDD",
    date: "January 2024 - May 2024",
    points: [
      // ... your points ...
    ],
  },
  {
    title: "Cloud Infrastructure Engineer",
    company_name: "LTIMindtree",
    icon: ltimindtree, // Changed from shopify
    iconBg: "#383E56",
    date: "July 2022 - June 2023",
    points: [
      // ... your points ...
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

export { services, technologies, experiences, testimonials, projects };