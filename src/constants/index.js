import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flightFare,
  eltPipeline,
  cyberPulse,
  sqlProject,
  electricity,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Engineer Intern",
    company_name: "iConsult Collaborative",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
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
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Collaborated with UK startups to guide sentiment analysis using R (tidytext, afinn) and A/B testing via Brevo.",
      "Optimized email campaigns by analyzing emotional tone, subject lines, CTAs, and send-time performance.",
    ],
  },
  {
    title: "Cloud Infrastructure Engineer",
    company_name: "LTIMindtree",
    icon: shopify,
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

export { services, technologies, experiences, testimonials, projects };