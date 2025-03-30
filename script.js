document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-list");

    const PROJECTS = [
        {
            title: "DataForge",
            description: "Analyse, visualize, import and export your data from different to different formats like CSV, JSON and XLS.",
            image: "assets/data_forge_1.png",
            technologies: ["Django", "DRF", "React", "PostgreSQL", "JWT Auth", "Docker", "Jenkins", "Redis", "HTML", "CSS", "JavaScript", "Prometheus", "Graphana", "UnitTest"]
        },
        {
            title: "Luabla",
            description: "Learn languages, share and study your own decks of cards, or get them from community. Luabla is a bridge for whose want to enrole in the language learning travel with ease.",
            image: "assets/luabla_1.png",
            technologies: ["Django", "DRF", "FastAPI", "JWT Auth", "PostgreSQL", "MongoDB", "Redis", "HTML", "CSS", "JavaScript", "Swagger"]
        },
        {
            title: "Dogs and Cats Recognizer",
            description: "Leverage what ML models can do with visualization throught computer vision.",
            image: "assets/data_forge_1.png",
            technologies: ["TensorFlow", "Keras", "Pandas", "Numpy", "Skitlearn", "Ngrok", "HTML", "CSS", "JS"]
        }
    ];
    

    // Insert projects into the DOM
    PROJECTS.forEach((project) => {
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

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    // Observe elements
    document.querySelectorAll(".project, .projects-title").forEach(element => {
        observer.observe(element);
    });
});
