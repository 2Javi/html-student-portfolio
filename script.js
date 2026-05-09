// ============================================
// PORTFOLIO SCRIPT
// ============================================

console.log("Portfolio script loaded ✅");


// ============================================
// DARK MODE TOGGLE
// ============================================
// Toggles a `dark-mode` class on <body>. The CSS
// variables in styles.css do all the visual work.

const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
        console.log(`Theme toggled → ${isDark ? "dark" : "light"}`);
    });
} else {
    console.warn("No #theme-toggle button found.");
}


// ============================================
// PROJECTS — rendered from a JS array
// ============================================
// To add a new project, just push another object
// into this array. The DOM is built from it below.

const projects = [
    {
        title: "Personal Portfolio",
        description:
            "This very page — built from scratch using semantic HTML, CSS Grid + custom properties, and vanilla JavaScript. My first lab in the cohort.",
        link: "#",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "RecipeGen",
        description: "Built during a hackathon with React and powered by Llama 4, this web app helps users turn ingredients into meal ideas. Users can upload pictures of ingredients or enter them as text, then receive dish suggestions tailored to their dietary restrictions.",
        link: "https://github.com/nlazaro/RecipeGenerator",
        tags: ["REACT.js", "Python3", "FASTApi", "Python"],
    },
    {
        title: "FiveWorks",
        description:
            "Led a team of five in my System Designs class to build a web and Android app that streamlines booking library rooms at my school. The Android app was built with Kotlin, the web app with React, and both platforms shared a Firebase database for real-time room availability and reservations.",
        link: "Coming soon",
        tags: ["REACT.js", "Kotlin", "FireBase"]
    },
    {
        title: "Name is still in the works",
        description:
            "My first video game built with Unity Engine and C# — a beat-em-up dungeon crawler roguelike game.",
        link: "#",
        tags: ["Unity", "C#"],
    },
    {
        title: "Name is still in the works",
        description:
            "A Demand-Side Platform (DSP) that facilitates real-time bidding using Python and FastAPI.",
        link: "#",
        tags: ["Python", "FastAPI"],
    }
];

const grid = document.querySelector("#projects-grid");

if (grid) {
    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const tagList = document.createElement("div");
        tagList.className = "project-card__tags";
        project.tags.forEach((label) => {
            const tag = document.createElement("span");
            tag.className = "project-card__tag";
            tag.textContent = label;
            tagList.appendChild(tag);
        });

        const link = document.createElement("a");
        link.className = "project-card__link";
        link.href = project.link;
        link.textContent = "View project →";

        card.append(title, description, tagList, link);
        grid.appendChild(card);
    });
}


// ============================================
// FOOTER YEAR
// ============================================

const yearEl = document.querySelector("#year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
