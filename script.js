document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-list");
    const loadMoreButton = document.getElementById("load-more-projects-button");

    const PROJECTS = [
        {
            title: "Manufacturing ERP & CRM",
            description: "ERP + CRM for a computers/cellphones/laptops designing, assembling, testing, producing and selling processes management, plus customer and client management for financial tracking. This system is suitable for any other company or industry of manufacturing that uses components to assemble its final product.",
            image: ["assets/nss_project_3.png", "assets/nss_project_2.png", "assets/nss_project_4.png"],
            technologies: ["Vue3", "FastAPI", "PostgreSQL", "Redis", "Typescript", "JWT", "SMTP", "Poetry", "REST"]
        },
        {
            title: "Luabla",
            description: "Learn languages, share and study your own decks of cards, or get them from the community. Luabla is a bridge for those who want to enroll in the language learning journey with ease.",
            image: ["assets/luabla_3.png", "assets/luabla_2.png", "assets/luabla_1.png"],
            technologies: ["Django", "DRF", "FastAPI", "JWT Auth", "PostgreSQL", "MongoDB", "Redis", "HTML", "CSS", "JavaScript", "Swagger"]
        },
        {
            title: "DataForge",
            description: "Analyse, visualize, import and export your data between formats like CSV, JSON, and XLS. Ideal for fast visualization and chart generation for analysis.",
            image: ["assets/dataforge2.png", "assets/dataforge1.png"],
            technologies: ["Django", "DRF", "React", "PostgreSQL", "JWT Auth", "Docker", "Jenkins", "Redis", "HTML", "CSS", "JavaScript", "Prometheus", "Graphana", "UnitTest"]
        },
        {
            title: "ETL Population Dataset",
            description: "Application of each ETL process step for exploratory and analytical data science over a USA population dataset for pattern identification and comparative analysis.",
            image: ["assets/avg_salary_sum_salary_plots.png"],
            technologies: ["Python", "Excel", "SQL", "PowerBI", "PostgreSQL", "Pandas", "Matplotlib", "Seaborn"]
        },
    ];

    let displayedProjects = 6;

    function renderProjects(limit) {
        projectsContainer.innerHTML = ""; // Clear container

        PROJECTS.slice(0, limit).forEach((project, index) => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project");

            const imageContainerId = `project-image-${index}`;

            projectDiv.innerHTML = `
                <div class="project-image-container">
                    <img src="${project.image[0]}" alt="${project.title}" class="project-image" id="${imageContainerId}">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
                    </div>
                </div>
            `;

            projectsContainer.appendChild(projectDiv);

            // Start carousel only if there are multiple images
            if (project.image.length > 1) {
                startImageCarousel(imageContainerId, project.image);
            }
        });

        applyObserver();

        if (displayedProjects >= PROJECTS.length) {
            loadMoreButton?.style && (loadMoreButton.style.display = "none");
        }
    }

    function startImageCarousel(imageId, images) {
        let index = 0;
        const imageElement = document.getElementById(imageId);

        setInterval(() => {
            index = (index + 1) % images.length;
            imageElement.classList.add("fade-out");

            setTimeout(() => {
                imageElement.src = images[index];
                imageElement.classList.remove("fade-out");
                imageElement.classList.add("fade-in");
            }, 300);

            setTimeout(() => {
                imageElement.classList.remove("fade-in");
            }, 1000);
        }, 5000);
    }

    function applyObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); 
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll(".project").forEach(element => {
            observer.observe(element);
        });
    }

    // Initial rendering
    renderProjects(displayedProjects);
});
