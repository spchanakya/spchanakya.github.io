export const techStack = [
  { name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", type: "language" },
  { name: "Embedded C", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-plain.svg", type: "language" },
  { name: "Linux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", type: "language" },
  { name: "C++", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", type: "language" },
  { name: "MatLab", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg", type: "language" },
  { name: "MySQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", type: "database" },
  { name: "MongoDB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", type: "database" },
  { name: "PostgreSQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", type: "database" },
  { name: "Streamlit", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg", type: "framework" },
  { name: "Grafana", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", type: "visualization" },
  { name: "Apache Echarts", link: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/Echarts.svg", type: "visualization" },
  { name: "PowerBI", link: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/PowerBI.svg", type: "visualization" },
  { name: "MLOps", link: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/MLOPs.svg", type: "tool" },
  { name: "Azure", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", type: "cloud" },
  { name: "AWS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", type: "cloud" },
  { name: "Apache Airflow", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg", type: "tool" },
  { name: "MLFlow", link: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/MLFlow.svg", type: "tool" },
  { name: "Prometheus", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original-wordmark.svg", type: "tool" },
  { name: "SageMaker", link: "https://github.com/spchanakya/spchanakya.github.io/blob/main/Assets/Sagemaker.svg", type: "tool" },
  { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", type: "tool" },
  { name: "Terraform", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", type: "tool" },
  { name: "Github Actions", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", type: "tool" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", type: "tool" },
  { name: "Scikit-Learn", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikitlearn-original.svg", type: "library" },
  { name: "TensorFlow", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", type: "library" },
  { name: "PyTorch", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", type: "library" },
  { name: "LangChain", link: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/Langchain.svg", type: "library" },
  { name: "NumPy", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", type: "library" },
  { name: "Pandas", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", type: "library" }
];


export const contactLinks = [
{ name: 'Instagram', url: 'https://img.icons8.com/doodle/40/000000/instagram-new--v2.png', link: 'https://www.instagram.com/pranava_chanakya/' },
{ name: 'Github', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link :'https://github.com/spchanakya'},
{ name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/pranava-chanakya/'}
]

// =================
// API Configuration 
// =================
// 🚀 CHANGE CHATBOT ENDPOINT URL HERE! 🚀

// Environment-specific URLs
const CHATBOT_URLS = {
  LOCAL: 'https://noncombinative-marinda-freckly.ngrok-free.dev'
};

export const API_CONFIG = {
  // 🔧 Change this line to switch environments:
  // Use CHATBOT_URLS.LOCAL, CHATBOT_URLS.PRODUCTION, or CHATBOT_URLS.STAGING
  CHATBOT_BASE_URL: CHATBOT_URLS.LOCAL,
  
  CHATBOT_ENDPOINTS: {
    CHAT: '/chat',
    HEALTH: '/health',
    SYSTEM_PROMPT: '/system-prompt'
  },
  
  // Full URLs (automatically constructed - don't change these)
  get CHATBOT_CHAT_URL() {
    return `${this.CHATBOT_BASE_URL}${this.CHATBOT_ENDPOINTS.CHAT}`;
  },
  get CHATBOT_HEALTH_URL() {
    return `${this.CHATBOT_BASE_URL}${this.CHATBOT_ENDPOINTS.HEALTH}`;
  },
  get CHATBOT_SYSTEM_PROMPT_URL() {
    return `${this.CHATBOT_BASE_URL}${this.CHATBOT_ENDPOINTS.SYSTEM_PROMPT}`;
  }
}



export const serviceData = [
  {
    name: 'Machine Learning and MLOps',
    desc: `I build and deploy innovative algorithms leveraging AI and ML, focusing on LLM-enabled GenAI Apps. I stay current with AI innovations and showcase my work on my portfolio website. Using industry-standard MLOps tools, I ensure detailed tracking, logging, and monitoring of model performance, providing optimized solutions and KPI metrics to prevent model drift.`,
    img: "https://img.icons8.com/?size=100&id=fTkqveCX0blI&format=png&color=000000"
  },
  {
    name: 'Data Science',
    desc: `Expertised in building data-driven insights by building end-to-end pipelines that encompass 
    business understanding, ETL processes, data wrangling, cleaning, feature engineering, 
    and exploratory data analysis (EDA). Built business visualization Dashboards of key performance 
    indicators (KPIs) to facilitate informed business decisions.`,
    img: "https://img.icons8.com/?size=100&id=izgFdRB2AEqe&format=png&color=000000"
  },

  {
    name: 'Embedded (Electronics)',
    desc: `Employing industry tools for MLOps, providing detailed tracking and logging of 
    artifacts and evaluation metrics. Building data-driven pipelines to deploy and monitor model 
    performance. Additionally, offering KPI metrics and optimized solutions to prevent model drift.`,
    img: "https://img.icons8.com/?size=100&id=oaoTa6nA7qv3&format=png&color=00fff0"
  },


]