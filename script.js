/* ==================================================
   UTILIDADES
=================================================== */

function escapeHTML(value) {

  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char])
  );

}



/* ==================================================
   PROYECTOS
=================================================== */

function renderProjects(filter = "all") {

  const grid =
    document.getElementById("projectGrid");


  const visible =
    PROJECTS.filter(project => {

      return (
        filter === "all" ||
        project.category === filter
      );

    });


  grid.innerHTML =
    visible.map((project, index) => `

      <article
        class="project-card
        ${project.featured ? "featured" : ""}"
      >


        <div class="project-top">

          <span>
            ${String(index + 1).padStart(2, "0")}
          </span>


          <span>
            ${escapeHTML(
              project.categoryLabel
            )}
          </span>

        </div>


        <h3>
          ${escapeHTML(
            project.title
          )}
        </h3>


        <p>
          ${escapeHTML(
            project.description
          )}
        </p>


        <div class="tags">

          ${project.tags.map(tag => `

            <span>
              ${escapeHTML(tag)}
            </span>

          `).join("")}

        </div>


        <a
          href="#project-detail"
          class="project-link"
          data-project-id="${escapeHTML(
            project.id
          )}"
        >
          Ver proyecto →
        </a>


      </article>

    `).join("");


  attachProjectLinks();

}



/* ==================================================
   ABRIR DETALLE
=================================================== */

function openProjectDetail(projectId) {

  const project =
    PROJECTS.find(
      item => item.id === projectId
    );


  if (!project) {
    return;
  }


  const projectsSection =
    document.getElementById(
      "proyectos"
    );


  const detailSection =
    document.getElementById(
      "project-detail"
    );


  /*
    INFORMACIÓN IZQUIERDA
  */

  document.getElementById(
    "projectDetailCategory"
  ).textContent =
    project.categoryLabel;


  document.getElementById(
    "projectDetailTitle"
  ).textContent =
    project.title;


  document.getElementById(
    "projectDetailDescription"
  ).textContent =
    project.description;


  document.getElementById(
    "projectDetailObjective"
  ).textContent =
    project.details?.objective ||
    "Información pendiente de documentar.";



  /*
    RESULTADOS
  */

  const results =
    project.details?.results || [];


  const resultsContainer =
    document.getElementById(
      "projectDetailResults"
    );


  if (results.length) {

    resultsContainer.innerHTML = `

      <ul>

        ${results.map(result => `

          <li>
            ${escapeHTML(result)}
          </li>

        `).join("")}

      </ul>

    `;

  } else {

    resultsContainer.innerHTML = `
      <p>
        Información pendiente de documentar.
      </p>
    `;

  }



  /*
    HERRAMIENTAS
  */

  document.getElementById(
    "projectDetailTags"
  ).innerHTML =

    project.tags.map(tag => `

      <span>
        ${escapeHTML(tag)}
      </span>

    `).join("");



  /*
    EVIDENCIA DERECHA
  */

  const evidence =
    project.details?.evidence;


  const evidenceTitle =
    document.getElementById(
      "projectDetailEvidenceTitle"
    );


  const evidenceType =
    document.getElementById(
      "projectDetailEvidenceType"
    );


  const preview =
    document.getElementById(
      "projectDetailPreview"
    );


  const links =
    document.getElementById(
      "projectDetailLinks"
    );


  if (!evidence) {

    evidenceTitle.textContent =
      "Evidencia del proyecto";


    evidenceType.textContent =
      "PROYECTO";


    preview.innerHTML = `

      <div class="project-preview-placeholder">

        <div class="preview-icon">
          Proyecto
        </div>

        <h4>
          Evidencia pendiente
        </h4>

        <p>
          La evidencia principal de este proyecto
          será incorporada posteriormente.
        </p>

      </div>

    `;


    links.innerHTML = "";

  } else {

    evidenceTitle.textContent =
      evidence.title ||
      "Evidencia principal";


    evidenceType.textContent =
      evidence.type ||
      "PROYECTO";


    /*
      PREVIEW
    */

if (evidence.previewUrl) {

  const isImage =
    /\.(png|jpg|jpeg|webp|gif)$/i.test(
      evidence.previewUrl
    );

  if (isImage) {

    preview.innerHTML = `
      <div class="project-image-preview">
        <img
          src="${escapeHTML(evidence.previewUrl)}"
          alt="${escapeHTML(
            evidence.title ||
            "Vista previa del proyecto"
          )}"
        />
      </div>
    `;

  } else {

    preview.innerHTML = `
      <iframe
        src="${escapeHTML(evidence.previewUrl)}"
        title="${escapeHTML(
          evidence.title ||
          "Vista previa del proyecto"
        )}"
        loading="lazy"
      ></iframe>
    `;

  }

} else {

      preview.innerHTML = `

        <div class="project-preview-placeholder">

          <div class="preview-icon">
            ${escapeHTML(
              evidence.type ||
              "Proyecto"
            )}
          </div>

          <h4>
            ${escapeHTML(
              evidence.title ||
              "Evidencia principal"
            )}
          </h4>

          <p>
            Abre el entregable para consultar
            el contenido completo.
          </p>

        </div>

      `;

    }


    /*
      ENLACES
    */

    if (
      evidence.links &&
      evidence.links.length
    ) {

      links.innerHTML =

        evidence.links.map(link => `

          <a
            href="${escapeHTML(
              link.url
            )}"
            target="_blank"
            rel="noopener"
            class="project-detail-link"
          >
            ${escapeHTML(
              link.label
            )} ↗
          </a>

        `).join("");

    } else {

      links.innerHTML = "";

    }

  }



  /*
    MOSTRAR DETALLE
  */

  projectsSection.hidden = true;

  detailSection.hidden = false;


  window.location.hash =
    `proyecto=${project.id}`;


  detailSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}



/* ==================================================
   ENLACES DE PROYECTOS
=================================================== */

function attachProjectLinks() {

  document
    .querySelectorAll(
      "[data-project-id]"
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          event.preventDefault();


          openProjectDetail(
            link.dataset.projectId
          );

        }
      );

    });

}



/* ==================================================
   VOLVER A PROYECTOS
=================================================== */

function closeProjectDetail() {

  const projectsSection =
    document.getElementById(
      "proyectos"
    );


  const detailSection =
    document.getElementById(
      "project-detail"
    );


  detailSection.hidden = true;

  projectsSection.hidden = false;


  window.location.hash =
    "proyectos";


  projectsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}



/* ==================================================
   SKILLS
=================================================== */

function renderSkills() {

  document.getElementById(
    "skillGroups"
  ).innerHTML =

    SKILLS.map(group => `

      <article class="skill-group">

        <h3>
          ${escapeHTML(
            group.group
          )}
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



/* ==================================================
   CONTACTO
=================================================== */

function renderContact() {

  const links =
    document.getElementById(
      "contactLinks"
    );


  links.innerHTML = `

    <a
      href="mailto:${SITE.email}"
    >
      ${escapeHTML(
        SITE.email
      )} ↗
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


  document.getElementById(
    "githubNav"
  ).href =
    SITE.github;

}



/* ==================================================
   FILTROS
=================================================== */

function setupFilters() {

  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(".filter")
            .forEach(btn => {

              btn.classList.remove(
                "active"
              );

            });


          button.classList.add(
            "active"
          );


          renderProjects(
            button.dataset.filter
          );

        }
      );

    });

}



/* ==================================================
   ENLACES DESDE SOBRE MÍ
=================================================== */

function setupDomainLinks() {

  document
    .querySelectorAll(
      "[data-filter-link]"
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

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

        }
      );

    });

}



/* ==================================================
   HASH
=================================================== */

function handleHash() {

  const hash =
    window.location.hash;


  if (
    hash.startsWith(
      "#proyecto="
    )
  ) {

    const projectId =
      hash.replace(
        "#proyecto=",
        ""
      );


    openProjectDetail(
      projectId
    );

  }

}



/* ==================================================
   INICIALIZACIÓN
=================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProjects();

    renderSkills();

    renderContact();

    setupFilters();

    setupDomainLinks();


    document
      .getElementById(
        "backToProjects"
      )
      .addEventListener(
        "click",
        closeProjectDetail
      );

     window.addEventListener(
      "hashchange",
      handleHash
    );
    handleHash();
  }
);
