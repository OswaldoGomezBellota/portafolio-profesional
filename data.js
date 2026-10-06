/* ==================================================
   CONFIGURACIÓN DEL SITIO
=================================================== */

const SITE = {
  github: "https://github.com/OswaldoGomezBellota/portafolio-profesional",
  linkedin: "#",
  email: "oswal_gomez@hotmail.com",
  cv: "#"
};


/* ==================================================
   PROYECTOS
=================================================== */

const PROJECTS = [

  /* ==================================================
     01. TELECOMUNICACIONES
  ================================================== */

  {
    id: "callmemaybe",
    title: "Análisis de operadores ineficaces",
    category: "data",
    categoryLabel: "Data Analytics",

    description:
      "Análisis de llamadas para identificar operadores con oportunidades de mejora mediante indicadores de llamadas perdidas, tiempo de espera y llamadas salientes.",

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
        "Identificar operadores con oportunidades de mejora a partir de la información de llamadas, combinando indicadores de llamadas entrantes perdidas, tiempo de espera y volumen de llamadas salientes.",

      results: [
        "Se eliminaron 4,900 registros duplicados durante la limpieza de los datos.",
        "Después de la depuración se analizaron 49,002 registros de llamadas.",
        "El análisis consideró información de 1,092 operadores.",
        "Se identificaron 188 operadores para revisión por presentar al menos dos señales de ineficiencia.",
        "Los criterios combinaron llamadas entrantes perdidas, tiempo promedio de espera y volumen de llamadas salientes."
      ],

      evidence: {
        title: "Jupyter Notebook",
        type: ".html",

        previewUrl:
          "proyectos/01-data-analytics-bi/telecomunicaciones/Proyecto_Final_Telecomunicaciones.html",

        links: [
          {
            label: "Abrir Notebook en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/blob/main/proyectos/01-data-analytics-bi/telecomunicaciones/Proyecto_Final_Telecomunicaciones.ipynb"
          }
        ]
      }
    }
  },


  /* ==================================================
     02. SHOWZ
  ================================================== */

  {
    id: "showz",
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
        "Evaluar el desempeño de adquisición, conversión y rentabilidad de las fuentes de marketing.",

      results: [
        "Se analizaron datos de visitas, pedidos y gastos.",
        "Se calcularon DAU, WAU, MAU, sesiones, tiempo de conversión, AOV, LTV, CAC y ROMI.",
        "La fuente 10 registró el CAC más bajo con 4.38.",
        "La fuente 3 presentó el CAC más alto con 13.49 y un ROMI de -61.43%.",
        "Se recomendó analizar conjuntamente CAC, LTV y ROMI para orientar la asignación de inversión."
      ],

      evidence: {
        title: "Proyecto Showz",
        type: "ANALYTICS",
        links: []
      }
    }
  },


  /* ==================================================
     03. PRIORIZACIÓN DE HIPÓTESIS + A/B
  ================================================== */

  {
    id: "ab-tienda",

    title: "Priorización de hipótesis y prueba A/B",

    category: "data",
    categoryLabel: "Experimentación",

    description:
      "Priorización de hipótesis de negocio y evaluación del efecto de una variante sobre conversión e ingresos.",

    tags: [
      "Python",
      "Pandas",
      "SciPy",
      "Matplotlib",
      "A/B Testing"
    ],

    details: {
      objective:
        "Priorizar hipótesis de negocio y evaluar el efecto de una variante sobre conversión e ingresos mediante experimentación.",

      results: [
        "Se aplicaron ICE y RICE a 9 hipótesis.",
        "Se analizaron ingresos acumulados, tamaño promedio de pedido y conversión.",
        "Se identificaron valores atípicos mediante percentiles 95 y 99.",
        "La conversión favoreció al grupo B con p = 0.038.",
        "No se encontró diferencia significativa en el tamaño promedio de pedido con p = 0.82.",
        "Se recomendó adoptar la variante B."
      ],

      evidence: {
        title: "Jupyter Notebook",
        type: ".html",

        previewUrl:
          "proyectos/01-data-analytics-bi/priorizacion-hipotesis-ab/Proyecto_Hipotesis_AB.html",

        links: [
          {
            label: "Abrir Notebook en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/blob/main/proyectos/01-data-analytics-bi/priorizacion-hipotesis-ab/Proyecto_Hipotesis_AB.ipynb"
          },

          {
            label: "Ver proyecto en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/tree/main/proyectos/01-data-analytics-bi/priorizacion-hipotesis-ab"
          }
        ]
      }
    }
  },


  /* ==================================================
     04. A/A/B
  ================================================== */

  {
    id: "aaab",

    title: "Análisis de embudo y experimento A/A/B",

    category: "data",
    categoryLabel: "Experimentación",

    description:
      "Análisis del comportamiento de usuarios mediante un embudo de conversión y experimento A/A/B.",

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

      evidence: {
        title: "Jupyter Notebook",
        type: ".ipynb",
        links: []
      }
    }
  },


  /* ==================================================
     05. MODEL FITNESS
  ================================================== */

  {
    id: "model-fitness",

    title: "Model Fitness — Retención",

    category: "data",
    categoryLabel: "Machine Learning",

    description:
      "Predicción de cancelación y segmentación de clientes para orientar estrategias de retención.",

    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "SciPy",
      "Clustering"
    ],

    details: {
      objective:
        "Identificar factores asociados a la cancelación de membresías y segmentos con distintos niveles de riesgo.",

      results: [
        "Se analizaron 4,000 registros.",
        "Se desarrollaron modelos de regresión logística y Random Forest.",
        "Se aplicaron K-Means y clustering jerárquico.",
        "Los modelos superaron 90% de accuracy.",
        "La segmentación identificó 5 grupos con distintos niveles de riesgo."
      ],

      evidence: {
        title: "Model Fitness",
        type: "MACHINE LEARNING",
        links: []
      }
    }
  },


  /* ==================================================
     06. SISTEMA DE RECOMENDACIONES
  ================================================== */

  {
    id: "ab-recomendaciones",

    title: "Prueba A/B de sistema de recomendaciones",

    category: "data",
    categoryLabel: "Experimentación",

    description:
      "Evaluación de un nuevo sistema de recomendaciones mediante análisis exploratorio, embudo y prueba z de proporciones.",

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
        "Se realizó análisis exploratorio.",
        "Se validó la participación de los usuarios.",
        "Se analizó el embudo de conversión.",
        "Se realizó análisis temporal de los eventos.",
        "Se aplicó una prueba z de proporciones.",
        "El grupo experimental no alcanzó la mejora esperada."
      ],

      evidence: {
        title: "Prueba A/B de recomendaciones",
        type: "A/B",
        links: []
      }
    }
  },


  /* ==================================================
     07. LIBROS SQL
  ================================================== */

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
        "Se generaron resultados reproducibles para explorar la base de datos."
      ],

      evidence: {
        title: "Proyecto SQL",
        type: "SQL",
        links: []
      }
    }
  },


  /* ==================================================
     08. DASHBOARD TABLEAU
     PROYECTO INDEPENDIENTE
  ================================================== */

  {
    id: "tableau-dashboard",

    title: "Dashboard en Tableau",

    category: "bi",
    categoryLabel: "BI & Dashboards",

    description:
      "Proyecto independiente de visualización y Business Intelligence desarrollado en Tableau.",

    tags: [
      "Tableau",
      "Dashboard",
      "Business Intelligence",
      "Data Visualization"
    ],

    details: {
      objective:
        "Presentar información mediante visualizaciones interactivas que faciliten el análisis y la comunicación de indicadores.",

      results: [
        "Dashboard desarrollado en Tableau.",
        "Visualización interactiva de información."
      ],

      evidence: {
        title: "Dashboard en Tableau",
        type: "TABLEAU",

        previewUrl:
          "proyectos/01-data-analytics-bi/tableau-dashboard/assets/dashboard-tableau.png",

        links: [
          {
            label: "Ver dashboard interactivo en Tableau Public",

            url:
              "https://public.tableau.com/app/profile/oswaldo.gomez.bellota/viz/ProyFinal_Dashboard/Dashboard1?publish=yes"
          },

          {
            label: "Ver proyecto en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/tree/main/proyectos/01-data-analytics-bi/tableau-dashboard"
          }
        ]
      }
    }
  }

];


/* ==================================================
   SKILLS
=================================================== */

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
