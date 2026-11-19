
document.addEventListener("DOMContentLoaded", function () {

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

                            <span class="project-status">${project.status}</span>

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
    // BOTÃO DE TEMA
    // =====================================

    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.error("Botão de tema não encontrado. Verifique o id theme-toggle no HTML.");
        return;
    }

    function setTheme(theme) {
        const darkMode = theme === "dark";

        document.body.classList.toggle("dark-theme", darkMode);

        themeToggle.setAttribute("aria-checked", darkMode ? "true" : "false");

        themeToggle.setAttribute(
            "aria-label",
            darkMode ? "Ativar modo claro" : "Ativar modo escuro"
        );
    }

    // Recupera a preferência salva
    let currentTheme = "light";

    try {
        currentTheme = localStorage.getItem("portfolio-theme") || "light";
    } catch (error) {
        console.warn("Não foi possível acessar o armazenamento local.");
    }

    setTheme(currentTheme);

    // Alterna o tema ao clicar
    themeToggle.addEventListener("click", function () {
        const isDark = document.body.classList.contains("dark-theme");

        const newTheme = isDark ? "light" : "dark";

        setTheme(newTheme);

        try {
            localStorage.setItem("portfolio-theme", newTheme);
        } catch (error) {
            console.warn("Não foi possível salvar a preferência de tema.");
        }
    });

});
