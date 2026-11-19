
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // RENDERIZAÇÃO DOS PROJETOS
    // =====================================

    const projectsGrid = document.getElementById("projects-grid");
    const projects = window.portfolioProjects || [];

    if (projectsGrid) {
        if (projects.length === 0) {
            projectsGrid.textContent = "Nenhum projeto cadastrado ainda.";
        } else {
            projectsGrid.innerHTML = projects.map(project => {

                const technologies = (project.technologies || [])
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

                            <span class="project-status">
                                ${project.status}
                            </span>

                            <div class="project-links">
                                ${githubLink}
                                ${demoLink}
                            </div>
                        </div>
                    </article>
                `;
            }).join("");
        }
    }

    // =====================================
    // MODO CLARO E ESCURO
    // =====================================

    const themeToggle = document.getElementById("theme-toggle");

    function applyTheme(theme) {
        const isDark = theme === "dark";

        document.body.classList.toggle("dark-theme", isDark);

        if (themeToggle) {
            themeToggle.setAttribute("aria-checked", String(isDark));

            themeToggle.setAttribute(
                "aria-label",
                isDark ? "Ativar modo claro" : "Ativar modo escuro"
            );
        }
    }

    // Recupera o tema salvo

    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem("portfolio-theme") || "light";
    } catch (error) {
        console.warn("Não foi possível recuperar a preferência de tema.");
    }

    // Aplica o tema inicial

    applyTheme(savedTheme);

    // Alterna o tema ao clicar

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {

            const newTheme = document.body.classList.contains("dark-theme")
                ? "light"
                : "dark";

            applyTheme(newTheme);

            try {
                localStorage.setItem("portfolio-theme", newTheme);
            } catch (error) {
                console.warn("Não foi possível salvar a preferência de tema.");
            }
        });
    }

});
