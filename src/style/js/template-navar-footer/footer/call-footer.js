const footerArea = document.querySelector("#footer");

const updatedElementsFooter = elementsNavarAndFooter.map((data) => {
  return {
    ...data,

    logoSrc: `.${data.logoSrc}`,
    linkedinSrc: `.${data.linkedinSrc}`,
    githubSrc: `.${data.githubSrc}`,

    homeLink: "../index.html",

    blogsLink: "./blogs.html",

    aboutLink: "./about.html",

    projectsLink: "./projects.html",
  };
});

updatedElementsFooter.map((data) => {
  const footerAreaAll = new Footer(data);
  const footerElement = footerAreaAll.createFooter();
  footerArea.appendChild(footerElement);
});
