document.addEventListener("DOMContentLoaded", () => {
    const contactContainer = document.getElementById("contacts-list");
    
    const CONTACTMEDIA = [
        {   
            title: "GitHub",
            url: "https://github.com/MarcoA-Pozol/",
            image: "assets/github_logo.png",
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/marco-antonio-pozol-narciso-950106320/",
            image: "assets/linkedin_logo2.png",
        },
        {
            title: "Email",
            url: "mailto:marcoantoniopozolnarciso@gmail.com?subject=Contacto%20desde%20portfolio&body=Hola%20Marco,%20me%20interesa%20tu%20perfil",
            image: "assets/email_logo.png",
        }
    ];

    CONTACTMEDIA.forEach((contact) => {
        const contactDiv = document.createElement("div");
        contactDiv.classList.add("contact-option");

        contactDiv.innerHTML = `
            <a href="${contact.url}" target="_blank" title="${contact.title}">
                <img src="${contact.image}" alt="${contact.title}" class="contact-image">
                <span style="font-size: 0.8rem; color: #aaa;">${contact.title}</span>
            </a>    
        `;
        contactContainer.appendChild(contactDiv);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".contact-option, .contacts-title").forEach(element => {
        observer.observe(element);
    });
});