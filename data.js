/*
  ARCHIVO DE CONTENIDO
  --------------------
  Para agregar un proyecto nuevo:
  1. Copia un objeto dentro de PROJECTS.
  2. Define un id único.
  3. Cambia title, category, description, tags.
  4. Completa details con objetivo, resultados y entregables.
  5. Guarda el archivo.

  No necesitas modificar index.html ni script.js.
*/


/* =========================
   CONFIGURACIÓN DEL SITIO
========================= */

const SITE = {
  github: "https://github.com/OswaldoGomezBellota/portafolio-profesional",
  linkedin: "#",
  email: "oswal_gomez@hotmail.com",
  cv: "#"
};


/* =========================
   PROYECTOS
========================= */

const PROJECTS = [

  /* =========================================
     01. TELECOMUNICACIONES — NOTEBOOK
  ========================================== */

  {
    id: "telecom-notebook",

    title: "Telecomunicaciones — Análisis de operadores",

    category: "data",

    categoryLabel: "Data Analytics",

    description:
      "Análisis de llamadas para identificar operadores con señales combinadas de ineficiencia mediante indicadores de llamadas perdidas, tiempo de espera y volumen de llamadas salientes.",

    tags: [
      "Python",
      "Pandas",
      "SciPy",
      "SQL",
      "Jupyter Notebook"
    ],

    featured: true,

    details: {

      objective:
        "Identificar operadores con oportunidades de mejora a partir del comportamiento de las llamadas, utilizando indicadores relacionados con llamadas entrantes perdidas, tiempo de espera y volumen de llamadas salientes.",

      results: [
        "Se eliminaron 4,900 registros duplicados durante la limpieza de los datos.",
        "Después de la depuración se analizaron 49,002 registros de llamadas.",
        "El análisis consideró información de 1,092 operadores.",
        "Se identificaron 188 operadores como candidatos a revisión por presentar al menos dos señales de ineficiencia.",
        "Los criterios utilizados combinaron llamadas entrantes perdidas, tiempo promedio de espera y volumen de llamadas salientes.",
        "Se realizaron pruebas estadísticas para evaluar diferencias entre planes tarifarios."
      ],

      deliverables: [

        {
          label: "Ver Notebook en GitHub",
          url: "https://github.com/OswaldoGomezBellota/portafolio-profesional/blob/main/proyectos/01-data-analytics-bi/telecomunicaciones/Proyecto_Final_Telecomunicaciones.ipynb"
        }

      ]

    }
  },


  /* =========================================
     02. TELECOMUNICACIONES — TABLEAU
  ========================================== */

  {
    id: "telecom-tableau",

    title: "Telecomunicaciones — Dashboard",

    category: "bi",

    categoryLabel: "BI & Dashboards",

    description:
      "Dashboard orientado al seguimiento visual de los indicadores utilizados para analizar el desempeño de los operadores.",

    tags: [
      "Tableau",
      "Dashboard",
      "Business Intelligence",
      "Data Visualization"
    ],

    featured: true,

    details: {

      objective:
        "Transformar los resultados del análisis de llamadas en una herramienta visual que facilite el seguimiento, comparación y priorización de operadores.",

      results: [
        "Visualización de indicadores relacionados con llamadas perdidas y tiempos de espera.",
        "Presentación de información orientada al seguimiento operativo.",
        "Facilitación de la identificación y priorización de operadores que requieren revisión."
      ],

      deliverables: [

        {
          label: "Ver Dashboard en Tableau",
          url: "#"
        }

      ]

    }
  },


  /* =========================================
     03. TELECOMUNICACIONES — A/B
  ========================================== */

  {
    id: "telecom-ab",

    title: "Telecomunicaciones — Pruebas A/B",

    category: "data",

    categoryLabel: "Experimentación",

    description:
      "Análisis experimental complementario para evaluar diferencias y apoyar la toma de decisiones a partir de pruebas estadísticas.",

    tags: [
      "Python",
      "SciPy",
      "Estadística",
      "A/B Testing"
    ],

    featured: true,

    details: {

      objective:
        "Evaluar diferencias entre grupos mediante pruebas estadísticas para determinar si los cambios observados presentan evidencia suficiente para apoyar una decisión.",

      results: [
        "Se aplicaron pruebas estadísticas para comparar grupos.",
        "Se utilizaron niveles de significancia para evaluar los resultados.",
        "El análisis permitió complementar los indicadores descriptivos con evidencia estadística."
      ],

      deliverables: [

        {
          label: "Ver proyecto A/B",
          url: "#"
        }

      ]

    }
  },


  /* =========================================
     04. SHOWZ
  ========================================== */

  {
    id: "showz-marketing",

    title: "Showz — Marketing Analytics",

    category: "data",

    categoryLabel: "Marketing Analytics",

    description:
      "Análisis de adquisición, conversión y rentabilidad de fuentes de marketing mediante métricas de producto, cohortes y rentabilidad.",

    tags: [
      "Python",
      "Pandas",
      "Cohortes",
      "CAC",
      "LTV",
      "ROMI"
    ],

    featured: true,

    details: {

      objective:
        "Evaluar el desempeño de adquisición, conversión y rentabilidad de las diferentes fuentes de marketing.",

      results: [
        "Se analizaron datos de visitas, pedidos y gastos.",
        "Se calcularon métricas como DAU, WAU, MAU, sesiones, tiempo de conversión, AOV, LTV, CAC y ROMI.",
        "La fuente 10 registró el CAC más bajo con 4.38.",
        "La fuente 3 presentó el CAC más alto con 13.49 y un ROMI de -61.43%.",
        "Se recomendó analizar conjuntamente CAC, LTV y ROMI para orientar la asignación de inversión."
      ],

      deliverables: [

        {
          label: "Ver proyecto Showz",
          url: "#"
        }

      ]

    }
  },


  /* =========================================
     05. PRIORIZACIÓN DE HIPÓTESIS + A/B
  ========================================== */

  {
    id: "ab-hipotesis-tienda",

    title: "Priorización de hipótesis y análisis A/B",

    category: "data",

    categoryLabel: "Experimentación",

    description:
      "Priorización de hipótesis de negocio y evaluación del efecto de una variante sobre conversión e ingresos mediante pruebas A/B.",

    tags: [
      "Python",
      "Pandas",
      "SciPy",
      "Matplotlib",
      "A/B Testing"
    ],

    details: {

      objective:
        "Priorizar hipótesis de negocio y evaluar el efecto de una variante sobre indicadores de conversión e ingresos.",

      results: [
        "Se aplicaron los frameworks ICE y RICE a 9 hipótesis.",
        "Se analizaron ingresos acumulados, tamaño promedio de pedido y conversión.",
        "Se identificaron valores atípicos mediante percentiles 95 y 99.",
        "La conversión favoreció al grupo B con p = 0.038.",
        "No se encontró diferencia significativa en el tamaño promedio de pedido con p = 0.82.",
        "Se recomendó adoptar la variante B."
      ],

      deliverables: [

        {
          label: "Ver proyecto A/B",
          url: "#"
        }

      ]

    }
  },


  /* =========================================
     06. EMBUDO + A/A/B
  ========================================== */

  {
    id: "aaab-funnel",

    title: "Análisis de embudo y experimento A/A/B",

    category: "data",

    categoryLabel: "Experimentación",

    description:
      "Análisis del comportamiento de usuarios mediante un embudo de conversión y experimento A/A/B para evaluar el efecto de nuevas fuentes.",

    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Statsmodels",
      "Jupyter Notebook"
    ],

    details: {

      objective:
        "Entender el comportamiento de los usuarios y validar mediante experimentación el efecto de un cambio de fuentes en la aplicación.",

      results: [
        "Se analizaron más de 244 mil eventos y 7.5 mil usuarios.",
        "Se construyó un embudo desde la pantalla principal hasta el proceso de pago.",
        "La principal caída ocurrió entre la pantalla principal y ofertas, con 61.91% de conversión.",
        "Se ejecutaron 16 pruebas de hipótesis con corrección por comparaciones múltiples.",
        "No se observaron diferencias estadísticamente significativas entre las nuevas fuentes y los grupos de control."
      ],

      deliverables: [

        {
          label: "Ver proyecto A/A/B",
          url: "#"
        }

      ]

    }
  },


  /* =========================================
     07. MODEL FITNESS
  ========================================== */

  {
    id: "model-fitness",

    title: "Model Fitness — Predicción y segmentación",

    category: "data",

    categoryLabel: "Machine Learning",

    description:
      "Predicción de cancelación y segmentación de clientes para identificar grupos con distintos niveles de riesgo y orientar estrategias de retención.",

    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "SciPy",
      "Clustering"
    ],

    details: {

      objective:
        "Identificar factores asociados a la cancelación de membresías y encontrar segmentos de clientes con distintos niveles de riesgo.",

      results: [
        "Se analizaron 4,000 registros.",
        "Se desarrollaron modelos de regresión logística y Random Forest.",
        "Se aplicaron técnicas de K-Means y clustering jerárquico.",
        "Los modelos superaron 90% de accuracy.",
        "La segmentación identificó 5 grupos con distintos niveles de riesgo.",
        "Los resultados pueden utilizarse para orientar estrategias de retención."
      ],

      deliverables: [

        {
          label: "Ver proyecto Model Fitness",
          url: "#"
        }

      ]

    }
  },


  /* =========================================
     08. SISTEMA DE RECOMENDACIONES — A/B
  ========================================== */

  {
    id: "ab-recomendaciones",

    title: "Prueba A/B de sistema de recomendaciones",

    category: "data",

    categoryLabel: "Experimentación",

    description:
      "Evaluación de un nuevo sistema de recomendaciones mediante análisis exploratorio, embudo de conversión y prueba z de proporciones.",

    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "A/B Testing"
    ],

    details: {

      objective:
        "Evaluar si un nuevo sistema de recomendaciones mejoraba la conversión.",

      results: [
        "Se realizó análisis exploratorio de los datos.",
        "Se validó la participación de los usuarios.",
        "Se analizó el embudo de conversión.",
        "Se realizó análisis temporal de los eventos.",
        "Se aplicó una prueba z de proporciones.",
        "El grupo experimental no alcanzó la mejora esperada.",
        "Se identificaron factores que podían afectar la validez del experimento."
      ],

      deliverables: [

        {
          label: "Ver proyecto de recomendaciones",
          url: "#"
        }

      ]

    }
  },


  /* =========================================
     09. ANÁLISIS DE LIBROS — SQL
  ========================================== */

  {
    id: "books-sql",

    title: "Análisis de datos de libros",

    category: "data",

    categoryLabel: "SQL",

    description:
      "Consultas relacionales para responder preguntas de negocio sobre libros, autores, reseñas y calificaciones.",

    tags: [
      "SQL",
      "PostgreSQL",
      "JOIN",
      "GROUP BY"
    ],

    details: {

      objective:
        "Responder preguntas de negocio a partir de una base de datos relacional de libros, autores, reseñas y calificaciones.",

      results: [
        "Se construyeron consultas utilizando filtros y agregaciones.",
        "Se trabajó con relaciones entre diferentes tablas.",
        "Se generaron resultados reproducibles para explorar la base de datos.",
        "Los resultados permitieron transformar datos almacenados en información interpretable."
      ],

      deliverables: [

        {
          label: "Ver proyecto SQL",
          url: "#"
        }

      ]

    }
  },


  /* =========================================
     10. DASHBOARD BI
  ========================================== */

  {
    id: "dashboard-bi",

    title: "Dashboard de seguimiento",

    category: "bi",

    categoryLabel: "Business Intelligence",

    description:
      "Espacio reservado para documentar futuros dashboards y proyectos de visualización orientados al seguimiento y toma de decisiones.",

    tags: [
      "Power BI",
      "Tableau",
      "Dashboard"
    ],

    details: {

      objective:
        "Documentar soluciones de Business Intelligence orientadas al seguimiento de indicadores y comunicación de información.",

      results: [
        "Proyecto preparado para incorporar futuros dashboards y soluciones de visualización."
      ],

      deliverables: []

    }
  },


  /* =========================================
     11. TRANSFORMACIÓN DIGITAL
  ========================================== */

  {
    id: "transformacion-digital",

    title: "Proyecto de transformación digital",

    category: "systems",

    categoryLabel: "Sistemas",

    description:
      "Espacio para documentar proyectos relacionados con sistemas, integraciones, información y transformación digital.",

    tags: [
      "Sistemas",
      "Procesos",
      "Transformación Digital"
    ],

    details: {

      objective:
        "Documentar iniciativas relacionadas con sistemas, procesos, información y transformación digital.",

      results: [
        "Proyecto preparado para incorporar casos de transformación digital y sistemas."
      ],

      deliverables: []

    }
  },


  /* =========================================
     12. GESTIÓN DE IMPLEMENTACIÓN
  ========================================== */

  {
    id: "gestion-implementacion",

    title: "Gestión de implementación de sistemas",

    category: "projects",

    categoryLabel: "Project Management",

    description:
      "Caso para documentar iniciativas de implementación, seguimiento, coordinación y gestión de proyectos.",

    tags: [
      "PMI",
      "Gestión",
      "Seguimiento"
    ],

    details: {

      objective:
        "Documentar iniciativas de implementación y seguimiento de proyectos, incluyendo coordinación y gestión orientada a resultados.",

      results: [
        "Proyecto preparado para incorporar casos de gestión de implementación de sistemas."
      ],

      deliverables: []

    }
  }

];


/* =========================
   SKILLS
========================= */

const SKILLS = [

  {
    group: "Data Analytics",

    items: [
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "Análisis estadístico",
      "A/B Testing",
      "Segmentación",
      "Cohortes",
      "Embudos"
    ]
  },


  {
    group: "BI & Visualización",

    items: [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Dashboards",
      "Storytelling de datos",
      "Reporting"
    ]
  },


  {
    group: "Datos & Sistemas",

    items: [
      "SQL Server",
      "PostgreSQL",
      "Oracle",
      "Gestión de información",
      "Integraciones",
      "Análisis de procesos"
    ]
  },


  {
    group: "Gestión & Negocio",

    items: [
      "Gestión de proyectos",
      "PMI",
      "Scrum",
      "Gestión de riesgos",
      "Transformación digital",
      "Business Analysis"
    ]
  }

];
