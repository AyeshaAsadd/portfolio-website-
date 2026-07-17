// ==========================================================================
// STATE MODEL / CONFIGURATION (Updated with Ayesha's Full Profile)
// ==========================================================================
const portfolioData = {
    engineerName: "Ayesha Asad",
    role: "Web Developer & Frontend Intern",
    bio: "An ICS graduate with a deep passion for engineering modern web experiences. Currently working as an intern at Neuro Five Solutions, blending core web development skills with insights into AI applications for businesses.",
    contactEmail: "ayeshaxasadd@gmail.com",
    navigation: [
        { name: "// skills", target: "#skills" },
        { name: "// projects", target: "#projects" },
        { name: "// certifications", target: "#certifications" }
    ],
    skills: [
        "HTML5 / CSS3", "JavaScript (ES6+)", "Web Designing", 
        "C Language", "Database Basics", "WordPress", 
        "AI for Business", "Branding & Design Simulation"
    ],
    projects: [
        {
            title: "Neuro Five Intern Deployments",
            description: "Building, refining, and deploying responsive user interfaces and frontend modules during my active industry internship.",
            tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            link: "https://github.com"
        },
        {
            title: "C & Database Integration Lab",
            description: "A foundational laboratory system designed to demonstrate programmatic structure logic alongside basic database querying.",
            tags: ["C Language", "SQL Basics", "Logic Architecture"],
            link: "https://github.com"
        },
        {
            title: "Custom Neon UI Portfolio",
            description: "A highly responsive, lightning-fast component-based portfolio styled with a sleek high-contrast cyber theme.",
            tags: ["CSS Variables", "DOM Manipulation", "Clean Code"],
            link: "https://github.com"
        }
    ],
    certifications: [
        "Build a Free Website with WordPress",
        "AI for Beginners & Business Professionals",
        "Branding and Design Simulation"
    ]
};

// ==========================================================================
// PORTFOLIO MODULE COMPONENTS
// ==========================================================================
function Navbar(data) {
    return `
        <header class="header-nav">
            <div class="container nav-wrapper">
                <a href="#" class="nav-logo">&lt;${data.engineerName} /&gt;</a>
                <ul class="nav-links">
                    ${data.navigation.map(item => `<li><a href="${item.target}">${item.name}</a></li>`).join('')}
                </ul>
                <a href="mailto:${data.contactEmail}" class="btn btn-primary" style="padding: 0.4rem 1rem; font-size: 0.85rem;">Ping</a>
            </div>
        </header>
    `;
}

function Hero(data) {
    return `
        <section class="hero-section">
            <div class="container">
                <span class="mono-tag">SYSTEM INITIALIZED // INTERN @ NEURO FIVE SOLUTIONS</span>
                <h1>Building Dynamic Web Layouts with AI Integration.</h1>
                <p>${data.bio}</p>
                <a href="#projects" class="btn btn-primary">Execute Project Logs</a>
            </div>
        </section>
    `;
}

function SkillsSection(data) {
    return `
        <section id="skills" class="projects-section" style="padding-top: 0;">
            <div class="container">
                <h2 class="section-title">Technical Matrix</h2>
                <div class="project-tags" style="gap: 0.75rem; max-width: 800px;">
                    ${data.skills.map(skill => `<span class="badge" style="font-size: 0.9rem; padding: 0.4rem 1rem;">${skill}</span>`).join('')}
                </div>
            </div>
        </section>
    `;
}

function ProjectCard(project) {
    return `
        <article class="project-card">
            <div class="project-meta">
                <div style="margin-bottom: 1rem; font-size: 1.2rem; color: var(--brand-accent);">⚡ [ONLINE]</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <div>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">SRC_CODE ↗</a>
            </div>
        </article>
    `;
}

function Projects(data) {
    return `
        <section id="projects" class="projects-section">
            <div class="container">
                <h2 class="section-title">Active Deployments</h2>
                <div class="projects-grid">
                    ${data.projects.map(p => ProjectCard(p)).join('')}
                </div>
            </div>
        </section>
    `;
}

function CertificationsSection(data) {
    return `
        <section id="certifications" class="projects-section">
            <div class="container">
                <h2 class="section-title">Verified Credentials</h2>
                <div style="display: flex; flex-direction: column; gap: var(--pad-sm);">
                    ${data.certifications.map(cert => `
                        <div style="background: var(--bg-card); border-left: 3px solid var(--brand-accent); padding: var(--pad-sm); border-radius: 4px;">
                            <h4 style="font-family: var(--ff-mono); color: var(--text-primary); font-size: 1rem;">📜 ${cert}</h4>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function Footer(data) {
    return `
        <footer class="footer-section">
            <div class="container">
                <p>// SYSTEM STABLE // CONTACT: <a href="mailto:${data.contactEmail}" style="color: var(--brand-accent); text-decoration: none;">${data.contactEmail}</a></p>
            </div>
        </footer>
    `;
}

// ==========================================================================
// CORE DOM RENDERER
// ==========================================================================
function App() {
    const root = document.getElementById('app');
    root.innerHTML = `
        ${Navbar(portfolioData)}
        ${Hero(portfolioData)}
        ${SkillsSection(portfolioData)}
        ${Projects(portfolioData)}
        ${CertificationsSection(portfolioData)}
        ${Footer(portfolioData)}
    `;
}

document.addEventListener('DOMContentLoaded', App);