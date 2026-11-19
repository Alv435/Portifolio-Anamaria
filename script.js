
document.addEventListener("DOMContentLoaded", () => {
    const projectsGrid = document.getElementById("projects-grid");
    const projects = window.portfolioProjects || [];

    if (!projectsGrid) return;

    if (projects.length === 0) {
        projectsGrid.innerHTML = "<p>Nenhum projeto cadastrado ainda.</p>";
        return;
    }

    projectsGrid.innerHTML = projects.map(project => {
        const technologies = project.technologies
            .map(tech => `<span class="project-tech">${tech}</span>`)
            .join("");

        const image = project.image
            ? `<img src="${project.image}" alt="Imagem do projeto ${project.name}">`
            : "";

        const githubLink = project.github
            ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`
            : "";

        const demoLink = project.demo
            ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Visualizar projeto</a>`
            : "";

        return `
            <article class="project-card">
                ${image}

                <div class="project-content">
                    <span class="project-category">${project.category}</span>

                    <h3>${project.name}</h3>

                    <p>${project.description}</p>

                    <div class="project-technologies">
                        ${technologies}
                    </div>

                    <span class="project-status">${project.status}</span>

                    <div class="project-links">
                        ${githubLink}
                        ${demoLink}
                    </div>
                </div>
            </article>
        `;
    }).join("");
});
