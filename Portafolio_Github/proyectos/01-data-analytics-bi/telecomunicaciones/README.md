# 📞 Análisis de operadores ineficaces — CallMeMaybe

## 🎯 Problema de negocio

El objetivo del proyecto es identificar operadores que presentan señales de ineficiencia en la gestión de llamadas.

Se analizaron indicadores relacionados con:

- llamadas entrantes perdidas;
- tiempo de espera de los clientes;
- volumen de llamadas salientes.

El análisis busca generar información que permita priorizar operadores para revisión y plantear oportunidades de mejora operativa.

> **Nota:** La clasificación de un operador como ineficaz representa una señal para análisis y seguimiento, no una evaluación definitiva de su desempeño individual.

---

## 📊 Datos

El proyecto utiliza dos conjuntos de datos:

### Datos de llamadas

Contiene información sobre las llamadas realizadas y recibidas, incluyendo:

- operador;
- usuario;
- fecha;
- dirección de la llamada;
- llamadas internas;
- llamadas perdidas;
- cantidad de llamadas;
- duración de la llamada;
- duración total.

### Datos de clientes

Contiene información relacionada con:

- usuario;
- plan tarifario;
- fecha de inicio.

---

## 🧹 Preparación de datos

Durante la etapa de limpieza se realizaron diferentes procesos de preparación y validación de los datos.

Entre ellos:

- revisión de valores ausentes;
- identificación y eliminación de registros duplicados;
- análisis de variables relevantes;
- creación de métricas para evaluar el desempeño de los operadores.

Se identificaron y eliminaron **4,900 registros duplicados**, quedando **49,002 registros** para el análisis.

---

## 🔎 Metodología

Para identificar operadores con señales de ineficiencia se utilizaron tres criterios principales:

1. **Número de llamadas entrantes perdidas**
2. **Tiempo promedio de espera en llamadas entrantes**
3. **Número de llamadas salientes**

Se utilizaron percentiles para establecer los umbrales de evaluación.

Un operador fue considerado como candidato a ineficiencia cuando cumplía al menos **2 de los 3 criterios** establecidos.

---

## 📈 Resultados

El análisis permitió identificar:

- **1,092 operadores analizados**
- **188 operadores clasificados como ineficaces**
- **17.2%** de los operadores fueron identificados bajo los criterios establecidos.

Estos resultados permiten priorizar operadores para una revisión más detallada y orientar posibles acciones de mejora.

---

## 🧪 Análisis estadístico

También se realizaron pruebas estadísticas para evaluar diferencias entre planes tarifarios.

Se utilizaron:

- prueba de **Kruskal-Wallis**;
- prueba **Mann-Whitney** para comparaciones por pares;
- corrección de **Bonferroni** para comparaciones múltiples.

Los resultados mostraron diferencias estadísticamente significativas entre planes tarifarios para las variables relacionadas con:

- tiempo de espera;
- llamadas perdidas.

---

## 💡 Principales conclusiones

El análisis muestra que existen operadores que concentran diferentes señales asociadas con posibles problemas de eficiencia.

La combinación de llamadas perdidas, tiempos de espera y volumen de llamadas salientes permite construir un criterio de priorización más completo que analizar una sola métrica de forma aislada.

Los operadores identificados deberían ser considerados como candidatos para una revisión operativa más detallada.

---

## 🎯 Recomendaciones

A partir de los resultados se recomienda:

- priorizar la revisión de los operadores identificados;
- analizar las causas de las llamadas perdidas;
- revisar los tiempos de espera;
- evaluar la distribución de llamadas entre operadores;
- realizar seguimiento periódico de estos indicadores;
- utilizar un dashboard para facilitar el monitoreo y la toma de decisiones.

---

## 🛠️ Herramientas

- Python
- Jupyter Notebook
- Pandas
- NumPy
- SciPy
- Matplotlib
- Tableau
- Análisis estadístico
- Limpieza y preparación de datos

---

## 📁 Estructura del proyecto

```text
telecomunicaciones/
│
├── README.md
├── proyecto_final_telecomunicaciones.ipynb
│
└── data/
    ├── telecom_clients.csv
    └── telecom_dataset_new.csv