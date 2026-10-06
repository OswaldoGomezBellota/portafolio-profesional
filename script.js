function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectGrid");
  const visible = PROJECTS.filter(p => filter === "all" || p.category === filter);
  grid.innerHTML = visible.map((p, i) => `
    <article class="project-card ${p.featured ? "featured" : ""}">
      <div class="project-top"><span>${String(i+1).padStart(2,"0")}</span><span>${escapeHTML(p.categoryLabel)}</span></div>
      <h3>${escapeHTML(p.title)}</h3>
      <p>${escapeHTML(p.description)}</p>
      <div class="tags">${p.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
      <a href="${p.link || "#"}" class="project-link">Ver proyecto →</a>
    </article>
  `).join("");
}

function renderSkills() {
  document.getElementById("skillGroups").innerHTML = SKILLS.map(group => `
    <article class="skill-group">
      <h3>${escapeHTML(group.group)}</h3>
      <div>${group.items.map(item => `<span>${escapeHTML(item)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderContact() {
  const links = document.getElementById("contactLinks");
  links.innerHTML = `
    <a href="mailto:${SITE.email}">${SITE.email} ↗</a>
    <a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>
    <a href="${SITE.github}" target="_blank" rel="noopener">GitHub ↗</a>
  `;
  document.getElementById("githubNav").href = SITE.github;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderContact();

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });

  document.querySelectorAll("[data-filter-link]").forEach(link => {
    link.addEventListener("click", () => {
      const filter = link.dataset.filterLink;
      setTimeout(() => {
        const btn = document.querySelector(`.filter[data-filter="${filter}"]`);
        if (btn) btn.click();
      }, 100);
    });
  });
});
