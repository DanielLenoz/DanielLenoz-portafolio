const headerNavar = document.querySelector("#navar");

const updateelementsNavar = elementsNavarAndFooter.map((data) => {
  return {
    ...data,
    openMenuImgSrc: `.${data.openMenuImgSrc}`,
    closeMenuImgSrc: `.${data.closeMenuImgSrc}`,

    logoSrc: `.${data.logoSrc}`,

    homeLink: "../index.html",

    blogsLink: "./blogs.html",

    aboutLink: "./about.html",

    projectsLink: "./projects.html",
  };
});

updateelementsNavar.map((data) => {
  const navarMobileArea = new Navar(data);
  const navarElementArea = navarMobileArea.navarMobile();
  headerNavar.appendChild(navarElementArea);
});
updateelementsNavar.map((data) => {
  const navarDesktopArea = new Navar(data);
  const navarElementArea = navarDesktopArea.navarDesktop();
  headerNavar.appendChild(navarElementArea);
});
