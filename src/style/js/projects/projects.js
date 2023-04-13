const containerProjectss = document.querySelector(".container_projects");

const projectsElements = [
  {
    projectsDirection: "projects-left",
    textDirection: "text-left",
    containerDescriptionDirection: "container_description--left",
    contactImgDirection: "contact_img-left",
    imgDirection: "img-left",
    brilloPosition: "brillo-left",

    //**contenido de los contenedores */
    subtitle: "Proyectos Destacados",
    title: "Portafolio",

    description:
      "proyecto de portafolio v1 la primera versión de una de mis creacion. siempre actualizando los proyectos para que sean la mejor version de sigo mismos",

    imgDescktop: "../../src/img/img-desktop/portafolio-img-desktop.jpg",
    imgIphone: "../../src/img/img-iphone/portafolio-img-iphone.jpg",
  },
  {
    projectsDirection: "projects-right",
    textDirection: "text-right",
    containerDescriptionDirection: "container_description--right",
    contactImgDirection: "contact_img-right",
    imgDirection: "img-right",
    brilloPosition: "brillo-right",

    //**contenido de los contenedores */

    subtitle: "Proyectos Destacados",
    title: "Portafolio",

    description:
      "proyecto de portafolio v1 la primera versión de una de mis creacion. siempre actualizando los proyectos para que sean la mejor version de sigo mismos",

    imgDescktop: "../../src/img/img-desktop/portafolio-img-desktop.jpg",
    imgIphone: "../../src/img/img-iphone/portafolio-img-iphone.jpg",
  },
];

projectsElements.forEach((the) => {
  const contactProject = document.createElement("section");
  contactProject.classList.add("contact_project", the.projectsDirection);

  const containerTextProjects = document.createElement("article");
  containerTextProjects.classList.add(
    "container_text--projects",
    the.textDirection
  );
  const h3 = document.createElement("h3");
  h3.innerText = `${the.subtitle}`;
  const h1 = document.createElement("h1");
  h1.innerText = `${the.title}`;

  const containerDescriptionLeft = document.createElement("article");
  containerDescriptionLeft.classList.add(the.containerDescriptionDirection);
  const descriptionProjects = document.createElement("p");
  descriptionProjects.classList.add("description--projects");
  descriptionProjects.innerText = `${the.description}`;
  containerDescriptionLeft.appendChild(descriptionProjects);

  containerTextProjects.append(h3, h1, containerDescriptionLeft);
  //**--------------------------- */
  const containerImgProjects = document.createElement("article");
  containerImgProjects.classList.add(
    "container_img--projects",
    the.contactImgDirection
  );

  const figureImg = document.createElement("figure");
  figureImg.classList.add(the.imgDirection);
  const pictureImg = document.createElement("picture");
  const sourceImg = document.createElement("source");
  sourceImg.setAttribute("media", "(min-width:945px)");
  sourceImg.setAttribute("srcset", the.imgDescktop);
  const img = document.createElement("img");
  img.setAttribute("src", the.imgIphone);
  pictureImg.append(sourceImg, img);
  figureImg.appendChild(pictureImg);

  const brillos = document.createElement("div");
  brillos.classList.add(the.brilloPosition);

  const containerIconsShare = document.createElement("section");
  containerIconsShare.classList.add("container_icons--share");
  const iconGithub = document.createElement("img");
  iconGithub.setAttribute("src", "../../src/img/assets/icons-redes/github.svg");
  const iconShare = document.createElement("img");
  iconShare.setAttribute("src", "../../src/img/assets/icons-redes/share.svg");
  containerIconsShare.append(iconGithub, iconShare);

  //**concatenacion final left */

  containerImgProjects.append(figureImg, brillos, containerIconsShare);

  contactProject.append(containerTextProjects, containerImgProjects);

  containerProjectss.appendChild(contactProject);
});
