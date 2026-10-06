/* ==================================================
   CONFIGURACIÓN DEL SITIO
================================================== */

const SITE = {
  github: "https://github.com/OswaldoGomezBellota/portafolio-profesional",
  linkedin: "https://www.linkedin.com/in/oswaldo-alexander-gomez-bellota-512520163",
  email: "oswal_gomez@hotmail.com",
  cv: "#"
};


/* ==================================================
   PROYECTOS
================================================== */

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

        title: "Jupyter Notebook",
        type: ".html",

        previewUrl:
          "proyectos/01-data-analytics-bi/showz-marketing-analytics/Proyecto_Showz_Analisis_Marketing.html",

        links: [
          {
            label: "Abrir proyecto HTML",

            url:
              "https://oswaldogomezbellota.github.io/portafolio-profesional/proyectos/01-data-analytics-bi/showz-marketing-analytics/Proyecto_Showz_Analisis_Marketing.html"
          },

          {
            label: "Abrir Notebook en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/blob/main/proyectos/01-data-analytics-bi/showz-marketing-analytics/Proyecto_Showz_Analisis_Marketing.ipynb"
          },

          {
            label: "Ver proyecto en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/tree/main/proyectos/01-data-analytics-bi/showz-marketing-analytics"
          }
        ]
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

    title: "A/A/B — Análisis de embudo y experimento",

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
      "Jupyter Notebook",
      "A/A/B Testing"
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
        type: ".html",

        previewUrl:
          "proyectos/01-data-analytics-bi/aab-Analisis-de-embudo-experimento/Proyecto_AAAB_Analisis_Embudo_Experimento.html",

        links: [
          {
            label: "Abrir Notebook en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/blob/main/proyectos/01-data-analytics-bi/aab-Analisis-de-embudo-experimento/Proyecto_AAAB_Analisis_Embudo_Experimento.ipynb"
          },

          {
            label: "Ver proyecto en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/tree/main/proyectos/01-data-analytics-bi/aab-Analisis-de-embudo-experimento"
          }
        ]
      }
    }
  },


  /* ==================================================
     05. MODEL FITNESS
  ================================================== */

  {
    id: "model-fitness",

    title: "Model Fitness — Predicción y estrategia de retención",

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

        title: "Jupyter Notebook",
        type: ".html",

        previewUrl:
          "proyectos/01-data-analytics-bi/model-fitness-retencion/Proyecto_Model_Fitness_Retencion.html",

        links: [
          {
            label: "Abrir Notebook en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/blob/main/proyectos/01-data-analytics-bi/model-fitness-retencion/Proyecto_Model_Fitness_Retencion.ipynb"
          },

          {
            label: "Ver proyecto en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/tree/main/proyectos/01-data-analytics-bi/model-fitness-retencion"
          }
        ]
      }
    }
  },


  /* ==================================================
     06. VIDEOJUEGOS — ICE
  ================================================== */

  {
    id: "videojuegos-ice",

    title: "Análisis de videojuegos — ICE",

    category: "data",
    categoryLabel: "Data Analytics",

    description:
      "Análisis de ventas y comportamiento del mercado de videojuegos para identificar plataformas, géneros y tendencias relevantes para orientar la estrategia comercial de ICE hacia 2017.",

    tags: [
      "Python",
      "Pandas",
      "Estadística",
      "Análisis de datos",
      "Jupyter Notebook"
    ],

    featured: true,

    details: {

      objective:
        "Analizar el comportamiento histórico de las ventas de videojuegos, identificar plataformas con potencial para 2017, estudiar diferencias por género y región, y evaluar hipótesis estadísticas sobre las calificaciones de los usuarios.",

      results: [
        "El análisis del periodo 2010-2016 permitió comparar el comportamiento de las principales plataformas y géneros del mercado.",
        "Entre 2015 y 2016, PS4 registró 188.15 millones de ventas y XOne 86.29 millones, destacando entre las plataformas con mejores ventas recientes.",
        "La prueba de hipótesis entre las calificaciones de usuarios de XOne y PC obtuvo p = 4.248e-06, por lo que se rechazó H0 y se concluyó que las medias son diferentes.",
        "La prueba entre las calificaciones de los géneros Action y Sports obtuvo p = 0.0570, por lo que no se rechazó H0.",
        "El análisis mostró diferencias regionales en las preferencias de géneros, por lo que la estrategia comercial debe considerar el comportamiento específico de cada mercado.",
        "El proyecto utiliza el análisis de datos y las pruebas estadísticas como base para orientar la estrategia comercial de ICE hacia 2017."
      ],

      evidence: {

        title: "Proyecto de análisis de videojuegos",
        type: ".html",

        previewUrl:
          "proyectos/01-data-analytics-bi/videojuegos-analisis-ice/Proyecto_Videojuegos_Analisis_ICE.html",

        links: [
          {
            label: "Abrir proyecto HTML",

            url:
              "https://oswaldogomezbellota.github.io/portafolio-profesional/proyectos/01-data-analytics-bi/videojuegos-analisis-ice/Proyecto_Videojuegos_Analisis_ICE.html"
          },

          {
            label: "Abrir Notebook en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/blob/main/proyectos/01-data-analytics-bi/videojuegos-analisis-ice/Proyecto_Videojuegos_Analisis_ICE.ipynb"
          },

          {
            label: "Ver proyecto en GitHub",

            url:
              "https://github.com/OswaldoGomezBellota/portafolio-profesional/tree/main/proyectos/01-data-analytics-bi/videojuegos-analisis-ice"
          }
        ]
      }
    }
  },


  /* ==================================================
     07. DASHBOARD TABLEAU
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
================================================== */

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
