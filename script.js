document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-list");
    const loadMoreButton = document.getElementById("load-more-projects-button");

    const PROJECTS = [
        {
            title: "REGAMSA Alarms Monitoring SaaS",
            description: "Ecosistema SaaS para gestión de dispositivos médicos con arquitectura serverless. Integra AWS IoT Core, pasarelas de pago (Openpay) y lógica de 'kill switch' para suspender servicios por impago. Frontend mobile‑first con Flutter, backend híbrido Python/AWS-Lambda y base de datos Aurora DSQL.",
            image: ["assets/regamsa_saas_1.png"],
            technologies: ["Flutter", "FastAPI", "AWS Lambda", "Aurora DSQL", "IoT Core", "Openpay", "TypeScript", "MQTT"]
        },
        {
            title: "REGAMSA ERP",
            description: "Custom ERP + CRM developed for REGAMSA, a growing company in Mexico specializing in the purchase, assembly, installation, and maintenance of medical gas networks for hospitals and clinics. Before this system, operations were scattered across multiple computers using Excel sheets and email-based communication between departments, leading to inefficiency and lack of synchronization. The new platform centralizes inventory, production, sales, and customer management, enabling real-time collaboration, financial tracking, and streamlined workflows. Designed with scalability in mind, it supports REGAMSA’s expansion plans into international markets while modernizing its administrative processes.",
            image: ["assets/regamsa_erp_1.jpeg", "assets/regamsa_erp_2.jpeg"],
            technologies: ["React Native", "FastAPI", "PostgreSQL", "OpenAI", "Typescript", "JWT", "SMTP", "REST", "AWS IoT Core", "AWS Lambda", "AWS API Gateway"]
        },
        {
            title: "Luabla",
            description: "Learn languages, share and study your own decks of cards, or get them from the community. Luabla is a bridge for those who want to enroll in the language learning journey with ease.",
            image: ["assets/luabla_3.png", "assets/luabla_2.png", "assets/luabla_1.png"],
            technologies: ["Django", "DRF", "FastAPI", "JWT Auth", "PostgreSQL", "MongoDB", "Redis", "HTML", "CSS", "JavaScript", "Swagger"]
        },
        {
            title: "Manufacturing ERP & CRM",
            description: "ERP + CRM for a computers/cellphones/laptops designing, assembling, testing, producing and selling processes management, plus customer and client management for financial tracking. This system is suitable for any other company or industry of manufacturing that uses components to assemble its final product.",
            image: ["assets/nss_project_3.png", "assets/nss_project_2.png", "assets/nss_project_4.png"],
            technologies: ["Vue3", "FastAPI", "PostgreSQL", "Redis", "Typescript", "JWT", "SMTP", "Poetry", "REST"]
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
        projectsContainer.innerHTML = ""; 

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

    renderProjects(displayedProjects);
});
