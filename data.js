/*
  ARCHIVO DE CONTENIDO
  --------------------
  Para agregar un proyecto nuevo:
  1. Copia un objeto dentro de PROJECTS.
  2. Cambia title, category, description, tags y links.
  3. Guarda el archivo.
  No necesitas modificar index.html.
*/

const SITE = {
  github: "https://github.com/",
  linkedin: "#",
  email: "oswal_gomez@hotmail.com",
  cv: "#"
};

const PROJECTS = [
  {
    title: "Proyecto Final — Telecomunicaciones",
    category: "data",
    categoryLabel: "Proyecto final",
    description: "Análisis principal, dashboard, presentación y pruebas A/B reunidos en un proyecto integral.",
    tags: ["Python", "SQL", "Tableau", "Estadística"],
    featured: true,
    link: "https://github.com/OswaldoGomezBellota/portafolio-profesional/blob/main/proyectos/01-data-analytics-bi/telecomunicaciones/Proyecto_Final_Telecomunicaciones.ipynb"
  },
  {
    title: "Análisis de operadores ineficaces",
    category: "data",
    categoryLabel: "Data Analytics",
    description: "CallMeMaybe: análisis de llamadas para identificar operadores con oportunidades de mejora.",
    tags: ["Python", "Pandas", "SciPy", "Tableau"],
    featured: true,
    link: "#"
  },
  {
    title: "Showz — Marketing Analytics",
    category: "data",
    categoryLabel: "Marketing Analytics",
    description: "Análisis de adquisición, conversión y rentabilidad mediante cohortes, CAC, LTV y ROMI.",
    tags: ["Python", "Cohortes", "CAC", "LTV", "ROMI"],
    featured: true,
    link: "#"
  },
  {
    title: "Model Fitness — Retención",
    category: "data",
    categoryLabel: "Machine Learning",
    description: "Predicción de cancelación y segmentación de clientes para orientar estrategias de retención.",
    tags: ["Python", "Scikit-learn", "Clustering"],
    featured: true,
    link: "#"
  },
  {
    title: "Pruebas A/B y embudo",
    category: "data",
    categoryLabel: "Experimentación",
    description: "Priorización de hipótesis, análisis de conversión y pruebas A/A/B para apoyar decisiones.",
    tags: ["Python", "SciPy", "Statsmodels"],
    link: "#"
  },
  {
    title: "Análisis de datos de libros",
    category: "data",
    categoryLabel: "SQL",
    description: "Consultas relacionales para responder preguntas de negocio sobre libros, autores, reseñas y calificaciones.",
    tags: ["SQL", "PostgreSQL", "JOIN"],
    link: "#"
  },
  {
    title: "Dashboard de seguimiento",
    category: "bi",
    categoryLabel: "Business Intelligence",
    description: "Espacio reservado para futuros dashboards y proyectos de visualización.",
    tags: ["Power BI", "Tableau", "Dashboard"],
    link: "#"
  },
  {
    title: "Proyecto de transformación digital",
    category: "systems",
    categoryLabel: "Sistemas",
    description: "Aquí podrás documentar proyectos relacionados con sistemas, integraciones, información y transformación digital.",
    tags: ["Sistemas", "Procesos", "Transformación Digital"],
    link: "#"
  },
  {
    title: "Gestión de implementación de sistemas",
    category: "projects",
    categoryLabel: "Project Management",
    description: "Caso para documentar iniciativas de implementación, seguimiento, coordinación y gestión.",
    tags: ["PMI", "Gestión", "Seguimiento"],
    link: "#"
  }
];

const SKILLS = [
  {group:"Data Analytics", items:["SQL","Python","Pandas","NumPy","SciPy","Análisis estadístico","A/B Testing","Segmentación","Cohortes","Embudos"]},
  {group:"BI & Visualización", items:["Power BI","Tableau","Matplotlib","Seaborn","Dashboards","Storytelling de datos","Reporting"]},
  {group:"Datos & Sistemas", items:["SQL Server","PostgreSQL","Oracle","Gestión de información","Integraciones","Análisis de procesos"]},
  {group:"Gestión & Negocio", items:["Gestión de proyectos","PMI","Scrum","Gestión de riesgos","Transformación digital","Business Analysis"]}
];
