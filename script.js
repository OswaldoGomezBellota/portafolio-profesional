function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}


/* =========================
   PROYECTOS
========================= */

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectGrid");

  const visible = PROJECTS.filter(
    project => filter === "all" || project.category === filter
  );

  grid.innerHTML = visible.map((project, index) => `
    <article class="project-card ${project.featured ? "featured" : ""}">

      <div class="project-top">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <span>${escapeHTML(project.categoryLabel)}</span>
      </div>

      <h3>
        ${escapeHTML(project.title)}
      </h3>

      <p>
        ${escapeHTML(project.description)}
      </p>

      <div class="tags">
        ${project.tags.map(tag => `
          <span>${escapeHTML(tag)}</span>
        `).join("")}
      </div>

      <a
        href="#project-detail"
        class="project-link"
        data-project-id="${escapeHTML(project.id || "")}"
      >
        Ver proyecto →
      </a>

    </article>
  `).join("");

  attachProjectLinks();
}


/* =========================
   DETALLE DE PROYECTO
========================= */

function openProjectDetail(projectId) {

  const project = PROJECTS.find(
    item => item.id === projectId
  );

  if (!project) {
    return;
  }

  const projectsSection = document.getElementById("proyectos");
  const detailSection = document.getElementById("project-detail");

  const title = document.getElementById("projectDetailTitle");
  const description = document.getElementById("projectDetailDescription");
  const objective = document.getElementById("projectDetailObjective");
  const results = document.getElementById("projectDetailResults");
  const tags = document.getElementById("projectDetailTags");
  const links = document.getElementById("projectDetailLinks");


  /* Título */

  title.textContent = project.title;


  /* Descripción */

  description.textContent = project.description;


  /* Objetivo */

  objective.textContent =
    project.details?.objective ||
    "Información del objetivo pendiente de documentar.";


  /* Resultados */

  const projectResults = project.details?.results || [];

  if (projectResults.length > 0) {

    results.innerHTML = `
      <ul>
        ${projectResults.map(result => `
          <li>${escapeHTML(result)}</li>
        `).join("")}
      </ul>
    `;

  } else {

    results.innerHTML = `
      <p>
        Resultados pendientes de documentar.
      </p>
    `;

  }


  /* Herramientas */

  tags.innerHTML = project.tags.map(tag => `
    <span>${escapeHTML(tag)}</span>
  `).join("");


  /* Entregables */

  const deliverables = project.details?.deliverables || [];

  if (deliverables.length > 0) {

    links.innerHTML = deliverables.map(deliverable => `
      <a
        href="${escapeHTML(deliverable.url)}"
        target="_blank"
        rel="noopener"
        class="project-detail-link"
      >
        ${escapeHTML(deliverable.label)} ↗
      </a>
    `).join("");

  } else {

    links.innerHTML = `
      <p>
        Entregables pendientes de documentar.
      </p>
    `;

  }


  /* Mostrar detalle */

  projectsSection.hidden = true;
  detailSection.hidden = false;


  /* Actualizar hash */

  window.location.hash = `proyecto=${project.id}`;


  /* Ir al inicio del detalle */

  detailSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* =========================
   ENLACES DE PROYECTOS
========================= */

function attachProjectLinks() {

  document
    .querySelectorAll("[data-project-id]")
    .forEach(link => {

      link.addEventListener("click", event => {

        event.preventDefault();

        const projectId = link.dataset.projectId;

        openProjectDetail(projectId);

      });

    });
}


/* =========================
   VOLVER A PROYECTOS
========================= */

function closeProjectDetail() {

  const projectsSection = document.getElementById("proyectos");
  const detailSection = document.getElementById("project-detail");

  detailSection.hidden = true;
  projectsSection.hidden = false;

  window.location.hash = "proyectos";

  projectsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* =========================
   SKILLS
========================= */

function renderSkills() {

  document.getElementById("skillGroups").innerHTML =
    SKILLS.map(group => `
      <article class="skill-group">

        <h3>
          ${escapeHTML(group.group)}
        </h3>

        <div>
          ${group.items.map(item => `
            <span>
              ${escapeHTML(item)}
            </span>
          `).join("")}
        </div>

      </article>
    `).join("");
}


/* =========================
   CONTACTO
========================= */

function renderContact() {

  const links = document.getElementById("contactLinks");

  links.innerHTML = `
    <a href="mailto:${SITE.email}">
      ${SITE.email} ↗
    </a>

    <a
      href="${SITE.linkedin}"
      target="_blank"
      rel="noopener"
    >
      LinkedIn ↗
    </a>

    <a
      href="${SITE.github}"
      target="_blank"
      rel="noopener"
    >
      GitHub ↗
    </a>
  `;

  document.getElementById("githubNav").href = SITE.github;
}


/* =========================
   FILTROS
========================= */

function setupFilters() {

  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.addEventListener("click", () => {

        document
          .querySelectorAll(".filter")
          .forEach(btn => {
            btn.classList.remove("active");
          });

        button.classList.add("active");

        renderProjects(
          button.dataset.filter
        );

      });

    });
}


/* =========================
   ENLACES DE DOMINIOS
========================= */

function setupDomainLinks() {

  document
    .querySelectorAll("[data-filter-link]")
    .forEach(link => {

      link.addEventListener("click", () => {

        const filter =
          link.dataset.filterLink;

        setTimeout(() => {

          const button =
            document.querySelector(
              `.filter[data-filter="${filter}"]`
            );

          if (button) {
            button.click();
          }

        }, 100);

      });

    });
}


/* =========================
   INICIALIZACIÓN
========================= */

document.addEventListener("DOMContentLoaded", () => {

  renderProjects();

  renderSkills();

  renderContact();

  setupFilters();

  setupDomainLinks();


  /* Botón volver */

  document
    .getElementById("backToProjects")
    .addEventListener("click", closeProjectDetail);

});
