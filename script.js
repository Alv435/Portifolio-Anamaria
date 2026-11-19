
const projects = [
    {
        name: "DevCafé",
        description: "Uma plataforma de produtividade para organizar tarefas, ideias e acompanhar a rotina.",
        image: "assets/images/devcafe.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        status: "Em desenvolvimento",
        github: "https://github.com/SEU-USUARIO/SEU-REPOSITORIO"
    },

    {
        name: "Projeto acadêmico",
        description: "Aplicação desenvolvida como parte dos estudos de Sistemas de Informação.",
        image: "",
        technologies: ["C#", "HTML", "CSS"],
        status: "Em desenvolvimento",
        github: "https://github.com/SEU-USUARIO/SEU-REPOSITORIO"
    }
];

const projectsGrid = document.getElementById("projects-grid");

projectsGrid.innerHTML = projects.map(project => `
    <article class="project-card">

        ${
            project.image
                ? `<img class="project-image"
                    src="${project.image}"
                    alt="Imagem do projeto ${project.name}">`
                : `<div class="project-image"></div>`
        }

        <div class="project-info">

            <h3>${project.name}</h3>

            <p>${project.description}</p>

            <div class="project-tags">
                ${project.technologies.map(tech =>
                    `<span>${tech}</span>`
                ).join("")}
            </div>

            <p>${project.status}</p>

            <a class="project-link"
               href="${project.github}"
               target="_blank"
               rel="noopener noreferrer">
                Ver no GitHub ↗
            </a>

        </div>
    </article>
`).join("");
