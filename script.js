document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-list");
    const loadMoreButton = document.getElementById("load-more-projects-button");

    const PROJECTS = [
        {
            title: "DataForge",
            description: "Analyse, visualize, import and export your data from different to different formats like CSV, JSON and XLS.",
            image: "assets/data_forge_1.png",
            technologies: ["Django", "DRF", "React", "PostgreSQL", "JWT Auth", "Docker", "Jenkins", "Redis", "HTML", "CSS", "JavaScript", "Prometheus", "Graphana", "UnitTest"]
        },
        {
            title: "Luabla",
            description: "Learn languages, share and study your own decks of cards, or get them from community. Luabla is a bridge for those who want to enroll in the language learning journey with ease.",
            image: "assets/luabla_3.png",
            technologies: ["Django", "DRF", "FastAPI", "JWT Auth", "PostgreSQL", "MongoDB", "Redis", "HTML", "CSS", "JavaScript", "Swagger"]
        },
        {
            title: "Dogs and Cats Recognizer",
            description: "Leverage what ML models can do with visualization through computer vision.",
            image: "assets/data_forge_1.png",
            technologies: ["TensorFlow", "Keras", "Pandas", "Numpy", "Sklearn", "Ngrok", "HTML", "CSS", "JS"]
        },
        {
            title: "Books API",
            description: "A simple API to manage book collections.",
            image: "assets/luabla_2.png",
            technologies: ["FastAPI", "MongoDB", "Redis", "Docker", "Swagger"]
        },
        {
            title: "Products API",
            description: "An API to manage products using FastAPI and MongoDB.",
            image: "assets/luabla_1.png",
            technologies: ["FastAPI", "MongoDB", "Redis", "Docker"]
        },
        {
            title: "IDogs API",
            description: "A dog breed recognition API using machine learning.",
            image: "assets/email_logo.png",
            technologies: ["FastAPI", "TensorFlow", "PostgreSQL", "Docker"]
        }
    ];

    let displayedProjects = 3;

    function renderProjects(limit) {
        projectsContainer.innerHTML = ""; // Clear container

        PROJECTS.slice(0, limit).forEach((project) => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project");

            projectDiv.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
                    </div>
                </div>
            `;

            projectsContainer.appendChild(projectDiv);
        });

        applyObserver();

        if (displayedProjects >= PROJECTS.length) {
            loadMoreButton.style.display = "none"; // Hide button when all projects are displayed
        }
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

    loadMoreButton.addEventListener("click", () => {
        displayedProjects += 3;
        renderProjects(displayedProjects);
    });
});
