document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-list");
    const loadMoreButton = document.getElementById("load-more-projects-button");

    const PROJECTS = [
        {
            title: "REGAMSA Alarms Monitoring SaaS",
            description: "Ecosistema SaaS para gestión de dispositivos médicos con arquitectura serverless. Integra AWS IoT Core, pasarelas de pago (Openpay) y lógica de 'kill switch' para suspender servicios por impago. Frontend mobile‑first con Flutter, backend híbrido Python/AWS-Lambda y base de datos Aurora DSQL.",
            image: ["assets/regamsa_monitoring_1.jpeg", "assets/regamsa_monitoring_2.jpeg", "assets/regamsa_monitoring_3.jpeg"],
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

    // Load saved language
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});

const translations = {
    en: {
        // HERO
        hero_badge: "Fullstack · Cloud · Distributed Systems",
        hero_title_highlight: "Cloud & FullStack Engineer",
        hero_subtitle: `Software Engineer specializing in <strong>Distributed Systems</strong>, <strong>Cloud Integration</strong>, <strong>Full-Stack Development</strong>, and <strong>Process Automation</strong>. Proven experience delivering software solutions for the <b>medical industry</b>, <b>manufacturing industry</b>, and <b>SaaS systems</b>; covering <b>planning</b>, <b>development</b>, <b>testing</b>, and <b>deployment</b>.`,
        projects_btn: "Experience",
        resume_btn: "Resume",

        stats_cloud: "Cloud Projects",
        stats_experience: "Years of Experience",
        stats_systems: "Deployed Systems",

        // ABOUT
        about_title: "About me:",
        about_text: `Hi there!, I'm <strong>Marco</strong>. Over the past few years, I’ve worked in the medical device manufacturing sector. I have experience <strong>designing hybrid architectures</strong> that connect complete fullstack systems with the cloud and payment gateways.
        I specialize in automating industrial management processes and delivering solutions through SaaS models.`,
        availability: "OPEN TO WORK",

        // SKILLS
        skills_title: "Skills",
        cloud_title: "Cloud (AWS)",
        fullstack_title: "FullStack",
        softskills_title: "Soft Skills",
        devops_title: "DevOps & Tools",

        cloudskills_list_1: "AWS Lambda · AWS API Gateway  · AWS Event Bridge",
        cloudskills_list_2: "AWS SES · AWS Cognito · AWS IAM",
        cloudskills_list_3: "AWS Aurora DSQL · AWS DynamoDB · AWS S3",
        cloudskills_list_4: "AWS IoT · AWS CloudWatch · AWS SES",

        fullstackskills_list_1: "Python · FastAPI · Django · NodeJS",
        fullstackskills_list_2: "React · VueJs · Typescript · Javascript",
        fullstackskills_list_3: "PostgreSQL · MySQL · MongoDB · Redis",
        fullstackskills_list_4: "Flutter · Dart · React Native",

        softskills_list_1: "Teamwork · Communication · Planning",
        softskills_list_2: "Responsibility · Optimism · Adaptability",
        softskills_list_3: "Analysis · Focus · Problem Solving",
        softskills_list_4: "Speak the customer's language",

        devopsskills_list_1: "GitHub · Jira · Notion · SCRUM",
        devopsskills_list_2: "GitHub Actions · CI/CD Pipelines",
        devopsskills_list_3: "Unit Testing · TDD · PyTest",
        devopsskills_list_4: "Docker · Kubernetes · Linux Based Servers",

        // EXPERIENCE
        experience_title: "Experience",

        exp1_title: "IoT SaaS Ecosystem · REGAMSA Medical",
        exp1_date: "Nov 2025 — Present",
        exp1_role: "FullStack & Cloud Engineer — End-to-end architecture of a SaaS platform for connected medical devices.",
        exp1_1: "Integration of <strong>AWS IoT Core</strong> with payment gateways (Openpay/Facturapi) to automate subscriptions.",
        exp1_2: "Remote/local <strong>Kill Switch</strong> logic disabling IoT certificates and Mosquitto services on non-payment.",
        exp1_3: "WebViews + Webhooks for automated electronic invoicing (100% administrative workload reduction).",
        exp1_4: "Use of <strong>Aurora DSQL, Lambda and EventBridge</strong> for low-latency scaling.",

        exp2_title: "Industrial Process Optimization · REGAMSA Medical",
        exp2_date: "Jan 2026 — Present",
        exp2_role: "Software Engineer — Mobile-first ERP for manufacturing plant.",
        exp2_1: "End-to-end workflow from purchase order to final delivery, eliminating bottlenecks.",
        exp2_2: "Operational traffic-light system using MQTT + WebSockets for real-time monitoring.",
        exp2_3: "Hybrid backend: FastAPI (on-premise) + AWS Lambda, ensuring 24/7 availability.",

        // PROJECTS
        projects_title: "Projects",

        // EDUCATION
        education_title: "Education",
        education_degree: "Computer Systems Engineering · UVEG",
        education_date: "2023 — (Expected Jun 2026)",
        education_desc: "Continuous self-driven learning based on official documentation and real-world projects, combined with strong interpersonal skill development for professional environments.",

        // LANGUAGES
        languages_title: "Languages",
        english_level: "English · B2 (Conversational)",

        // CONTACT
        contact_title: "Let's Connect",
        contact_message: "Ready to collaborate on your next challenge.",

        // FOOTER
        footer: "Quality · Reliability · Security"
    },

    es: {
        // HERO
        hero_badge: "Fullstack · Nube · Sistemas Distribuidos",
        hero_title_highlight: "Ingeniero Cloud y FullStack",
        hero_subtitle: `Ingeniero de Software especializado en <strong>Sistemas Distribuidos</strong>, <strong>Integración Cloud</strong>, <strong>Desarrollo Full-Stack</strong> y <strong>Automatización de Procesos</strong>.
        Experiencia comprobada entregando soluciones de software para la <b>industria médica</b>, <b>industria de manufactura</b>, y sistemas <b>SaaS</b>; cubriendo <b>planeación</b>, <b>desarrollo</b>, <b>pruebas</b> y <b>despliegue</b>.`,
        projects_btn: "Experiencia",
        resume_btn: "CV",

        stats_cloud: "Proyectos Cloud",
        stats_experience: "Años de experiencia",
        stats_systems: "Sistemas desplegados",

        // ABOUT
        about_title: "Sobre mi:",
        about_text: `Hola, soy <strong>Marco</strong>. Durante los últimos años he trabajado en el sector de manufactura de dispositivos médicos. Tengo experiencia en <strong>diseñar arquitecturas híbridas</strong> que conectan sistemas fullstack completos con nube y pasarelas de pago.
        Me especializo en automatizar procesos de gestión industrial y entrega de soluciones mediante modelos SaaS.`,
        availability: "DISPONIBLE PARA TRABAJAR",

        // SKILLS
        skills_title: "Habilidades",
        cloud_title: "Cloud (AWS)",
        fullstack_title: "FullStack",
        softskills_title: "Habilidades Blandas",
        devops_title: "DevOps y Herramientas",

        cloudskills_list_1: "AWS Lambda · AWS API Gateway  · AWS Event Bridge",
        cloudskills_list_2: "AWS SES · AWS Cognito · AWS IAM",
        cloudskills_list_3: "AWS Aurora DSQL · AWS DynamoDB · AWS S3",
        cloudskills_list_4: "AWS IoT · AWS CloudWatch · AWS SES",

        fullstackskills_list_1: "Python · FastAPI · Django · NodeJS",
        fullstackskills_list_2: "React · VueJs · Typescript · Javascript",
        fullstackskills_list_3: "PostgreSQL · MySQL · MongoDB · Redis",
        fullstackskills_list_4: "Flutter · Dart · React Native",

        softskills_list_1: "Trabajo en equipo · Comunicación · Planeación",
        softskills_list_2: "Responsabilidad · Optimismo · Adaptabilidad",
        softskills_list_3: "Análisis · Enfoque · Resolución de problemas",
        softskills_list_4: "Hablar el lenguaje del cliente",

        devopsskills_list_1: "GitHub · Jira · Notion · SCRUM",
        devopsskills_list_2: "GitHub Actions · CI/CD Pipelines",
        devopsskills_list_3: "Unit Testing · TDD · PyTest",
        devopsskills_list_4: "Docker · Kubernetes · Linux Based Servers",

        // EXPERIENCE
        experience_title: "Experiencia",

        exp1_title: "Ecosistema IoT SaaS · REGAMSA Medical",
        exp1_date: "Nov 2025 — Actual",
        exp1_role: "FullStack & Cloud Engineer — Arquitectura completa de un SaaS para gestión de dispositivos médicos conectados.",
        exp1_1: "Integración de <strong>AWS IoT Core</strong> con pasarelas de pago (Openpay/Facturapi) para automatizar suscripciones.",
        exp1_2: "Lógica de <strong>Kill Switch</strong> remoto/local que desactiva certificados IoT y servicios Mosquitto ante impago.",
        exp1_3: "WebViews + Webhooks para facturación electrónica automatizada (100% reducción de carga administrativa).",
        exp1_4: "Uso de <strong>Aurora DSQL, Lambda y EventBridge</strong> para escalar con baja latencia.",

        exp2_title: "Optimización de Procesos Industriales · REGAMSA Medical",
        exp2_date: "Ene 2026 — Actual",
        exp2_role: "Software Engineer — ERP mobile-first para planta manufacturera.",
        exp2_1: "Flujo completo desde orden de compra hasta entrega final, eliminando cuellos de botella.",
        exp2_2: "Semáforo operacional con MQTT + WebSockets para monitoreo en tiempo real.",
        exp2_3: "Backend híbrido: FastAPI (on-premise) + AWS Lambda, con disponibilidad 24/7.",

        // PROJECTS
        projects_title: "Proyectos",

        // EDUCATION
        education_title: "Educación",
        education_degree: "Ingeniería en Sistemas Computacionales · UVEG",
        education_date: "2023 — (Esperado Jun 2026)",
        education_desc: "Formación continua autodidacta basada en documentación oficial y proyectos reales, complementada con el desarrollo de habilidades interpersonales para entornos profesionales.",

        // LANGUAGES
        languages_title: "Idiomas",
        english_level: "Inglés · B2 (Conversacional)",

        // CONTACT
        contact_title: "Conectemos",
        contact_message: "Listo para colaborar en tu próximo desafío.",

        // FOOTER
        footer: "Cálidad · Confiabilidad · Seguridad"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key];
    });
}
