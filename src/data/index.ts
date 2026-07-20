export const personal = {
  name: 'Joseph Oluwagbogo Aina',
  shortName: 'Joseph Aina',
  title: 'Certified Artificial Intelligence Engineer (CAIE™)',
  subtitle: 'Data Analyst · AI/ML Researcher · Certified AI Engineer (CAIE™)',
  email: 'olugbogoaina@gmail.com',
  phone: '+1 (410) 399-8883',
  github: 'https://github.com/Oluwagbogo',
  linkedin: 'https://linkedin.com/in/joseph-oluwagbogo-aina',
  googleScholar: 'https://scholar.google.com/citations?user=ef1Y6swAAAAJ&hl',
  bio: `Data analyst and AI/ML researcher with 6+ years turning large, messy datasets into decision-ready dashboards, reports, and models for government, healthcare, and financial-sector stakeholders. I'm currently interning as a Data Analyst at the Maryland Department of Transportation, delivering Governor's Office KPI reporting using Power BI and Alteryx-driven automation, while pursuing a PhD at Morgan State University (GPA 4.0/4.0) with 10+ peer-reviewed publications on explainable, bias-aware AI for healthcare — published in IEEE Access, Biomedical Signal Processing & Control, and Biological Psychiatry.`,
}

export const stats = [
  { label: 'Publications', value: 9, suffix: '+' },
  { label: 'GPA', value: 4.0, suffix: '/4.0', decimals: 1 },
  { label: 'Years Experience', value: 6, suffix: '+' },
  { label: 'Transit Records Analyzed', value: 150, suffix: 'M+' },
]

export const skills = {
  'Research Methods': [
    { name: 'Experimental Design & Hypothesis Testing', level: 95 },
    { name: 'Statistical Modeling & Analysis', level: 92 },
    { name: 'Bias Detection & Mitigation', level: 90 },
    { name: 'Scientific Writing & Publication', level: 93 },
  ],
  'AI & Machine Learning': [
    { name: 'Deep Learning (Transformers, CNNs)', level: 92 },
    { name: 'Explainable AI (XAI)', level: 90 },
    { name: 'Transfer Learning & Fine-tuning', level: 88 },
    { name: 'Computer Vision & Medical Imaging', level: 85 },
  ],
  'Data Analysis & Visualization': [
    { name: 'Python (NumPy, Pandas, Scikit-learn)', level: 95 },
    { name: 'SQL & Large-Scale Data Processing', level: 90 },
    { name: 'Power BI / Power Query / Tableau', level: 90 },
    { name: 'Alteryx & ETL Workflow Automation', level: 85 },
    { name: 'Matplotlib / Research Figures', level: 90 },
  ],
  'Research Infrastructure': [
    { name: 'TensorFlow / Keras / PyTorch', level: 90 },
    { name: 'Reproducible Research & Git', level: 90 },
    { name: 'HPC & Linux Environments', level: 85 },
    { name: 'Data Pipeline Design', level: 85 },
  ],
}

export const experience = [
  {
    role: 'Data Analyst Intern',
    org: 'Maryland Department of Transportation (MDOT)',
    location: 'MD, USA',
    period: 'Jul 2026 – Present',
    stack: 'Power BI · Power Query · Excel · Alteryx · Python',
    bullets: [
      'Deliver decision-ready KPI reporting for the Governor\'s Office by consolidating performance data across four MDOT modal administrations (MTA, TSO, SHA, MVA) into one presentation-ready report every reporting cycle, using integrated Power BI, Power Query, and Excel workflows.',
      'Freed analyst time for higher-value work by converting a fully manual, multi-step report build into a one-click automated run, designing an Alteryx workflow supported by Python scripting and Excel data modeling.',
    ],
  },
  {
    role: 'Operations Coordinator — RCMI IDC Center (Graduate Research Assistant)',
    org: 'Morgan State University',
    location: 'Baltimore, MD, USA',
    period: 'Oct 2025 – Present',
    stack: 'SQL · PHP · HTML · Excel · GitHub',
    bullets: [
      'Sustain on-time grant disbursement and awardee correspondence for an NIH/NIMHD-funded research center by coordinating end-to-end grant operations across multiple funding cycles.',
      'Increased data accessibility and accuracy for grant administration by designing and maintaining the center\'s relational database, adopted by administrative teams for awardee records, tracking, and compliance reporting.',
      'Reduced manual administrative workload and supported NIH compliance by automating administrative workflows and building the center\'s public website.',
    ],
  },
  {
    role: 'AI Research Scientist (Graduate Research Assistant)',
    org: 'Morgan State University',
    location: 'Baltimore, MD, USA',
    period: 'Aug 2022 – Oct 2025',
    stack: 'Research Methods · Python · Statistical Analysis · ML/DL · SQL · PowerBI',
    bullets: [
      'Designed novel ML/DL frameworks for breast cancer detection and clinical risk stratification using large-scale mammography datasets (EMBED); work accepted in Biomedical Signal Processing & Control (2026).',
      'Developed and published an explainable AI (XAI) system for mental disorder detection via facial emotion analysis — IEEE Access, vol. 12 (2024).',
      'Led bias mitigation research in psychiatric prediction by modeling racialized heteroskedasticity in ABCD neuroimaging data, in collaboration with Yale University; results published in Biological Psychiatry (2025).',
      'Designed and analyzed large-scale observational studies involving 150M+ transit records, producing policy-relevant insights through statistical modeling and interactive dashboards.',
      'Established automated data pipelines for multi-format ingestion (JSON, XML, live feeds), reducing analyst processing time by 60% and enabling reproducible research workflows.',
      'Authored and co-authored 10+ peer-reviewed papers; presented findings at IEEE ICMI 2025, IEEE CAI 2023, and IEEE BIBE 2023.',
    ],
  },
  {
    role: 'Data & Systems Engineer',
    org: 'Enterprise Business Info-Systems',
    location: 'Nigeria',
    period: 'Jul 2019 – Jul 2022',
    stack: 'Data Analysis · Dashboard Design · System Architecture · APIs',
    bullets: [
      'Designed and delivered data-driven dashboards for social and operational analytics, translating complex datasets into executive-ready insights for government and enterprise clients.',
      'Architected continuous deployment systems that increased platform reliability by 25%, ensuring research and operational data remained consistently accessible.',
    ],
  },
  {
    role: 'Data Analyst',
    org: 'Bank of Industry (Contract)',
    location: 'Nigeria',
    period: 'Sep 2020 – Dec 2021',
    stack: 'Statistical Analysis · ETL · Pentaho · Tableau · SQL',
    bullets: [
      'Performed end-to-end ETL and exploratory data analysis on large heterogeneous financial datasets, identifying patterns and anomalies for operational decision-making.',
      'Produced executive-level analytics reports and Tableau dashboards that directly informed strategic planning and resource allocation across multiple banking divisions.',
    ],
  },
]

export const education = [
  {
    degree: 'PhD — Computer and Electrical Systems Engineering',
    institution: 'Morgan State University',
    location: 'MD, USA',
    period: 'Jan 2024 – May 2027 (Expected)',
    gpa: '4.0 / 4.0',
    color: 'accent',
  },
  {
    degree: 'MSc — Advanced Computing',
    institution: 'Morgan State University',
    location: 'MD, USA',
    period: 'Aug 2022 – Dec 2023',
    gpa: '4.0 / 4.0',
    highlight: 'Big Data Analytics, Data Science & AI, Computer Vision',
    color: 'accent',
  },
  {
    degree: 'BSc — Economics',
    institution: 'University of Ilorin',
    location: 'Nigeria',
    period: 'Oct 2015 – Oct 2019',
    gpa: '3.51 / 4.0',
    color: 'purple',
  },
]

export const projects = [
  {
    title: 'Transformer-Based Breast Cancer Diagnosis',
    period: 'Jan 2025 – Present',
    tag: 'Active Research',
    tagColor: 'green',
    description: 'Designed a novel multi-modal transformer architecture combined with canonical correlation analysis (CCA) for early breast cancer detection. Improved diagnostic accuracy and model interpretability on large mammography cohorts — advancing equitable AI in radiology.',
    highlight: 'Presented at IEEE ICMI 2025 · Published in IEEE Xplore',
    tech: ['Transformer Architecture', 'Explainability (XAI)', 'Medical Imaging', 'Multi-modal Learning'],
    icon: '🧬',
  },
  {
    title: 'Algorithmic Bias in Psychiatric Prediction',
    period: 'Jan 2025 – Present',
    tag: 'Collaboration · Yale University',
    tagColor: 'blue',
    description: 'Led the ML modeling arm of a cross-institutional neuroimaging study with Yale University. Identified and mitigated racialized heteroskedasticity in psychiatric prediction models using the ABCD Study connectome dataset — advancing equitable mental health AI.',
    highlight: 'Published · Biological Psychiatry (2025)',
    tech: ['Neuroimaging Analysis', 'Algorithmic Fairness', 'Statistical Modeling', 'Connectome Data'],
    icon: '🧠',
  },
  {
    title: 'Explainable Mental Disorder Detection',
    period: 'Aug – Dec 2023',
    tag: 'Published · IEEE Access',
    tagColor: 'purple',
    description: 'Developed and published a hybrid transformer + XAI framework for predicting mental health risk from facial emotion recognition. The system produces clinician-interpretable explanations, bridging the gap between prediction performance and clinical trust.',
    highlight: 'IEEE Access, vol. 12, pp. 91410–91425 (2024)',
    tech: ['Explainable AI', 'Emotion Recognition', 'Clinical Interpretability', 'Transformers'],
    icon: '🤖',
  },
  {
    title: 'Transit Analytics & Policy Dashboard',
    period: 'Jan 2024 – Dec 2025',
    tag: 'Applied Research',
    tagColor: 'orange',
    description: 'Designed a large-scale analytical study of 150M+ transit records to surface patterns in route efficiency, delay propagation, and stop performance. Delivered interactive Power BI dashboards that translate complex findings into actionable policy insights.',
    highlight: 'Published · TRB Annual Meeting 2025',
    tech: ['Large-Scale Data Analysis', 'Statistical Modeling', 'Power BI', 'Policy Translation'],
    icon: '🚌',
  },
  {
    title: 'Real-Time Road Damage Detection',
    period: 'Aug 2023 – 2025',
    tag: 'Computer Vision',
    tagColor: 'red',
    description: 'Developed a real-time infrastructure assessment system using YOLOv8, enabling rapid identification of road damage at scale. The methodology demonstrates how computer vision can automate safety-critical inspections that traditionally require human field teams.',
    highlight: 'Published · ICTD 2025 (ASCE)',
    tech: ['Object Detection', 'Computer Vision', 'Real-Time Inference', 'Infrastructure AI'],
    icon: '🛣️',
  },
  {
    title: 'National Social Register Dashboard',
    period: 'Jul 2022',
    tag: 'Team Lead · 4 Engineers',
    tagColor: 'teal',
    description: 'Led a multidisciplinary team to design and deploy a scalable socio-economic data platform for Nigerian government clients, mapping household-level data for national welfare targeting and resource allocation decisions.',
    tech: ['Social Analytics', 'Data Visualization', 'Policy Dashboards', 'Team Leadership'],
    icon: '📊',
  },
]

export const publications = [
  // 2026
  {
    title: 'A cross data learning architecture for breast cancer classification using mammograms.',
    authors: 'Aina, J., O. Akinniyi, M. N. A. Mulla, J. W. Gichoya, H. Trivedi, T. J. Meeker, Md M. Rahman, and F. Khalifa.',
    venue: 'Biomedical Signal Processing and Control 123 (2026): 110592.',
    year: 2026,
    type: 'Journal',
    url: 'https://doi.org/10.1016/j.bspc.2026.110592',
  },
  // 2025
  {
    title: 'The role of AI for improved management of breast cancer: Enhanced diagnosis and health disparity mitigation.',
    authors: 'Akinniyi, Oluwatunmise, Jose Dixon, Joseph Aina, et al.',
    venue: 'Computer Methods and Programs in Biomedicine (2025).',
    year: 2025,
    type: 'Journal',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0169260725004535',
  },
  {
    title: 'Longitudinal and Geographic Trends in Perceived Racial Discrimination Among Adolescents in the United States: The Adolescent Brain Cognitive Development Study.',
    authors: 'Fields, Christopher T., Carmen Black, Amanda J. Calhoun, Matthew Rosenblatt, Joseph Aina, et al.',
    venue: 'Journal of Adolescent Health (2025).',
    year: 2025,
    type: 'Journal',
    url: 'https://www.jahonline.org/article/S1054-139X(25)00120-X/abstract',
  },
  {
    title: 'Racialized Heteroscedasticity as a Source of Algorithmic Bias in Psychiatric Prediction Models.',
    authors: 'Fields, Christopher, Matthew Rosenblatt, Joseph Aina, et al.',
    venue: 'Biological Psychiatry 97, no. 9 (2025): S45.',
    year: 2025,
    type: 'Journal',
    url: 'https://www.biologicalpsychiatryjournal.com/article/S0006-3223(25)00219-7/abstract',
  },
  {
    title: 'Optimizing Breast Cancer Detection With Transformer Models and Canonical Correlation Analysis.',
    authors: 'Aina, J., Emon, I. S., Mbaye, O. S., Rahman, A. C., Akinniyi, O., Mulla, M. N., ... & Khalifa, F.',
    venue: 'IEEE 4th International Conference on Computing and Machine Intelligence (ICMI), 2025, pp. 1–5.',
    year: 2025,
    type: 'Conference',
    url: 'https://ieeexplore.ieee.org/document/11141064',
  },
  {
    title: 'Real-Time Road Damage Detection Using YOLOv8.',
    authors: 'Aina, J. O., Haghi, N., Famewo, B., Efe, S., et al.',
    venue: 'International Conference on Transportation and Development (ICTD) 2025.',
    year: 2025,
    type: 'Conference',
    url: 'https://doi.org/10.1061/9780784486191.036',
  },
  {
    title: 'A Study on Maryland Transit Administration (MTA) Bus Services Stop-Level Reliability from an Equity Perspective Using Archived GTFS-RT Data.',
    authors: 'Tanvir, M. R., Aina, J. O., Chavis, C., Campbell, S., et al.',
    venue: 'Transportation Research Board Annual Meeting (TRB), Washington D.C., January 2025.',
    year: 2025,
    type: 'Conference',
    url: 'https://doi.org/10.13140/RG.2.2.36113.75361',
  },
  // 2024
  {
    title: 'A Hybrid Learning-Architecture for Mental Disorder Detection Using Emotion Recognition.',
    authors: 'J. Aina, O. Akinniyi, M. M. Rahman, V. Odero-Marah and F. Khalifa.',
    venue: 'IEEE Access, vol. 12, pp. 91410–91425, 2024.',
    year: 2024,
    type: 'Journal',
    url: 'https://doi.org/10.1109/ACCESS.2024.3421376',
  },
  // 2023
  {
    title: 'Ensemble and Transformer Models for Infectious Disease Prediction.',
    authors: 'B. I. Adeika, J. Aina, T. Ibirinde, T. Adeyemi, M. M. Rahman and S. Pramanik.',
    venue: '2023 IEEE 23rd International Conference on Bioinformatics and Bioengineering (BIBE), Dayton, OH, USA, pp. 377–384.',
    year: 2023,
    type: 'Conference',
    url: 'https://doi.org/10.1109/BIBE60311.2023.00068',
  },
  {
    title: 'Mental Disorder Detection System Through Emotion Recognition.',
    authors: 'J. Aina.',
    venue: 'Dissertation, Morgan State University (2023).',
    year: 2023,
    type: 'Thesis',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11270886/',
  },
  {
    title: 'Machine Learning prediction of ultimate strain of CFRP/GFRP-RC column with lap spliced rebars subjected to cyclic loads.',
    authors: 'J. Aina, N. Haghi and S. Efe.',
    venue: '2023 IEEE Conference on Artificial Intelligence (CAI), Santa Clara, CA, USA, pp. 175–176.',
    year: 2023,
    type: 'Conference',
    url: 'https://doi.org/10.1109/CAI54212.2023.00083',
  },
]



