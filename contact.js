document.addEventListener("DOMContentLoaded", () => {
    const contactContainer = document.getElementById("contacts-list");
    
    // Contact 
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
            url: "mailto:your@email.com?subject=Hello&body=I%20want%20to%20contact%20you.",
            image: "assets/email_logo.png",
        }
    ];
    

    // Insert projects into the DOM
    CONTACTMEDIA.forEach((contact) => {
        const contactDiv = document.createElement("div");
        contactDiv.classList.add("contact-option");

        contactDiv.innerHTML = `
            <a href="${contact.url}"  target="_blank">
                <img src="${contact.image}" alt="${contact.title}" class="contact-image">
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
    }, {threshold: 0.2});

    // Observe elements
    document.querySelectorAll(".contact-option, .contacts-title").forEach(element => {
        observer.observe(element);
    });
});