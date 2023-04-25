const containerProjectss = document.querySelector(".container_projects");

const projectsElements = [
  {
    projectsDirection: "projects-left",
    textDirection: "text-left",
    containerDescriptionDirection: "container_description--left",
    contactImgDirection: "contact_img-left",
    imgDirection: "img-left",
    brilloPosition: "brillo-left",
    linkesGithub: "https://github.com/DanielLenoz/DanielLenoz-portafolio",
    linksShare: "https://daniellenoz.github.io/DanielLenoz-portafolio/", 
    //** animacion scroll*/
    dataAos: "fade-up-right",
    //**contenido de los contenedores */
    subtitle: "Proyectos Destacados",
    title: "Portafolio",

    description:
      "Proyecto de portafolio v2 la segunda versión de una de mi creacion. siempre actualizando los proyectos para que sean la mejor version de sigo mismos",

    imgDescktop: "../src/img/img-projects/img-desktop/projecto-portafolio-desktop.jpg",
    imgIphone: "../src/img/img-projects/img-iphone/projecto-portafolio-iphone.jpg",
    altDescription: "proyecto portafolio",
  },
  {
    projectsDirection: "projects-right",
    textDirection: "text-right",
    containerDescriptionDirection: "container_description--right",
    contactImgDirection: "contact_img-right",
    imgDirection: "img-right",
    brilloPosition: "brillo-right",
    linkesGithub: "https://github.com/DanielLenoz/DanielLenoz-blog",
    linksShare: "https://daniellenoz.github.io/DanielLenoz-blog/", 
    //** animacion scroll*/
    dataAos: "flip-right",
    //**contenido de los contenedores */

    subtitle: "Proyectos Destacados",
    title: "Blog",

    description:
      "Projecto blog v2 la segunda versión de una de mis mejores creación, siempre se actualizan de contenido sobre blogs personales donde hablo de mis experiencias y creaciónes ",

    imgDescktop: "../src/img/img-projects/img-desktop/projecto-blog-desktop.jpg",
    imgIphone: "../src/img/img-projects/img-iphone/projecto-blog-iphone.jpg",
    altDescription:"proyecto blog",
  },
];

projectsElements.forEach((the) => {
  const contactProject = document.createElement("section");
  contactProject.classList.add("contact_project", the.projectsDirection);
  // contactProject.dataset.aos = 'fade-up-right';
  contactProject.setAttribute("data-aos", the.dataAos);

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
  figureImg.classList.add("img--projects")
  const pictureImg = document.createElement("picture");
  const sourceImg = document.createElement("source");
  sourceImg.setAttribute("media", "(min-width:945px)");
  sourceImg.setAttribute("srcset", the.imgDescktop);
  const img = document.createElement("img");
  img.setAttribute("src", the.imgIphone);
  img.setAttribute("alt", the.altDescription);
  pictureImg.append(sourceImg, img);
  figureImg.appendChild(pictureImg);

  const brillos = document.createElement("div");
  brillos.classList.add(the.brilloPosition);

  const containerIconsShare = document.createElement("section");
  containerIconsShare.classList.add("container_icons--share");
  const linkesGithub = document.createElement("a");
  linkesGithub.setAttribute('href', the.linkesGithub);
  linkesGithub.setAttribute("aria-label", "link del proyecto en github");
  const iconGithub = document.createElement("img");
  iconGithub.setAttribute("src", "../src/img/assets/icons-redes/github.svg");
  iconGithub.setAttribute("alt", "icon de github");
  linkesGithub.appendChild(iconGithub)

  const linksShare = document.createElement('a');
  linksShare.setAttribute('href', the.linksShare);
  linksShare.setAttribute("aria-label", "link para ver el proyecto")
  const iconShare = document.createElement("img");
  iconShare.setAttribute("src", "../src/img/assets/icons-redes/share.svg");
  iconShare.setAttribute("alt", "icon share")
  linksShare.appendChild(iconShare)
  containerIconsShare.append(linkesGithub, linksShare);

  //**concatenacion final left */

  containerImgProjects.append(figureImg, brillos, containerIconsShare);

  contactProject.append(containerTextProjects, containerImgProjects);

  containerProjectss.appendChild(contactProject);
});
