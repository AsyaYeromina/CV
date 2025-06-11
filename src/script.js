// Project data
const projects = [
  {
    title: "Brain Games",
    technologies: "Node.js, JavaScript, CLI interfaces",
    image:
      "https://camo.githubusercontent.com/95df219b2b7b9c1fb7a72f40d3ef7916cd89e9c422420089cbb9bc13d9a9d918/68747470733a2f2f61736369696e656d612e6f72672f612f3432373831392e737667",
    description: [
      "Set of 5 interactive console games (quiz) using Node.js.",
      "Implemented user input handling, game logic, and scoring system.",
    ],
    demoUrl: null,
    codeUrl: "https://github.com/AsyaYeromina/frontend-project-lvl1",
  },
  {
    title: "2048 Puzzle Game",
    technologies: "JavaScript, HTML5, CSS3",
    image:
      "https://github.com/AsyaYeromina/new_2048/raw/main/src/images/reference.png",
    description: [
      "Browser-based version of the popular 2048 puzzle game.",
      "Implemented game mechanics, UI interactions, and local scoring tracking.",
    ],
    demoUrl: "https://asyayeromina.github.io/new_2048/",
    codeUrl: "https://github.com/AsyaYeromina/new_2048",
  },
  {
    title: "Chrome Extension",
    technologies: "React, Zustand, REST API, Chrome Extension API",
    image:
      "https://placehold.co/600x400/000000/FFF?text=Private+repository+for+Chrome+extension",
    description: [
      "Chrome extension for Amazon sellers. Allows adding products to track in tracking App: Amazon Product Page Detection, Integration with tracking App, Displaying the product data (statuses, notifications, charts, etc.) on Amazon Product Page",
      "All the functionality is implemented in React and Zustand",
    ],
    demoUrl: null,
    codeUrl: null,
  },
];

// Function to create project cards
function createProjectCards() {
  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    // Create project card
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    // Create project header
    const projectHeader = document.createElement("div");
    projectHeader.className = "project-header";

    const projectTitle = document.createElement("h3");
    projectTitle.className = "project-title";
    projectTitle.textContent = project.title;

    const projectTech = document.createElement("div");
    projectTech.className = "project-tech";
    projectTech.textContent = project.technologies;

    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectTech);

    // Create project content
    const projectContent = document.createElement("div");
    projectContent.className = "project-content";

    const projectImage = document.createElement("div");
    projectImage.className = "project-image";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    projectImage.appendChild(img);

    const projectDescription = document.createElement("div");
    projectDescription.className = "project-description";
    project.description.forEach((line) => {
      const lineElement = document.createElement("p");
      lineElement.textContent = line;
      projectDescription.appendChild(lineElement);
    });

    projectContent.appendChild(projectImage);
    projectContent.appendChild(projectDescription);

    // Create project footer
    const projectFooter = document.createElement("div");
    projectFooter.className = "project-footer";

    // Demo button
    if (project.demoUrl) {
      const demoLink = document.createElement("a");
      demoLink.href = project.demoUrl;
      demoLink.target = "_blank";
      demoLink.className = "btn";
      demoLink.textContent = "Demo";
      projectFooter.appendChild(demoLink);
    } else {
      const demoButton = document.createElement("button");
      demoButton.className = "btn";
      demoButton.textContent = "Demo";
      demoButton.disabled = true;
      projectFooter.appendChild(demoButton);
    }

    // Code button
    if (project.codeUrl) {
      const codeLink = document.createElement("a");
      codeLink.href = project.codeUrl;
      codeLink.target = "_blank";
      codeLink.className = "btn";

      const codeIcon = document.createElement("i");
      codeIcon.className = "fab fa-github";

      codeLink.appendChild(codeIcon);
      codeLink.appendChild(document.createTextNode("Code"));

      projectFooter.appendChild(codeLink);
    } else {
      const codeButton = document.createElement("button");
      codeButton.className = "btn";
      codeButton.disabled = true;

      const codeIcon = document.createElement("i");
      codeIcon.className = "fab fa-github";

      codeButton.appendChild(codeIcon);
      codeButton.appendChild(document.createTextNode("Code"));

      projectFooter.appendChild(codeButton);
    }

    // Assemble the card
    projectCard.appendChild(projectHeader);
    projectCard.appendChild(projectContent);
    projectCard.appendChild(projectFooter);

    // Add to container
    projectsContainer.appendChild(projectCard);
  });
}

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  createProjectCards();
});
