class Projects {
  constructor({
    projectDirection,
    textDirection,
    containerDescriptionDirection,
    contactImgDirection,
    imgDirection,
    brightnessPosition,
    githubLink,
    shareLink,
    dataAos,
    subtitle,
    title,
    description,
    desktopImg,
    iphoneImg,
    altDescription,
  }) {
    this.projectDirection = projectDirection;
    this.textDirection = textDirection;
    this.containerDescriptionDirection = containerDescriptionDirection;
    this.contactImgDirection = contactImgDirection;
    this.imgDirection = imgDirection;
    this.brightnessPosition = brightnessPosition;
    this.githubLink = githubLink;
    this.shareLink = shareLink;
    this.dataAos = dataAos;
    this.subtitle = subtitle;
    this.title = title;
    this.description = description;
    this.desktopImg = desktopImg;
    this.iphoneImg = iphoneImg;
    this.altDescription = altDescription;
    return this.creator();
  }
  creator() {
    const contactProject = document.createElement("section");
    contactProject.classList.add("contact_project", this.projectDirection);
    contactProject.setAttribute("data-aos", this.dataAos);

    const containerTextProjects = document.createElement("article");
    containerTextProjects.classList.add(
      "container_text--projects",
      this.textDirection
    );
    const h3 = document.createElement("h3");
    h3.innerText = `${this.subtitle}`;
    const h1 = document.createElement("h1");
    h1.innerText = `${this.title}`;

    const containerDescriptionLeft = document.createElement("article");
    containerDescriptionLeft.classList.add(this.containerDescriptionDirection);
    const descriptionProjects = document.createElement("p");
    descriptionProjects.classList.add("description--projects");
    descriptionProjects.innerText = `${this.description}`;
    containerDescriptionLeft.appendChild(descriptionProjects);

    containerTextProjects.append(h3, h1, containerDescriptionLeft);
    //**--------------------------- */
    const containerImgProjects = document.createElement("article");
    containerImgProjects.classList.add(
      "container_img--projects",
      this.contactImgDirection
    );

    const figureImg = document.createElement("figure");
    figureImg.classList.add(this.imgDirection);
    figureImg.classList.add("img--projects");
    const pictureImg = document.createElement("picture");
    const sourceImg = document.createElement("source");
    sourceImg.setAttribute("media", "(min-width:945px)");
    sourceImg.setAttribute("srcset", this.desktopImg);
    const img = document.createElement("img");
    img.setAttribute("src", this.iphoneImg);
    img.setAttribute("alt", this.altDescription);
    pictureImg.append(sourceImg, img);
    figureImg.appendChild(pictureImg);

    const brillos = document.createElement("div");
    brillos.classList.add(this.brightnessPosition);

    const containerIconsShare = document.createElement("section");
    containerIconsShare.classList.add("container_icons--share");
    const linkesGithub = document.createElement("a");
    linkesGithub.setAttribute("href", this.githubLink);
    linkesGithub.setAttribute("aria-label", "link del proyecto en github");
    const iconGithub = document.createElement("img");
    iconGithub.setAttribute("src", "../src/img/assets/icons-redes/github.svg");
    iconGithub.setAttribute("alt", "icon de github");
    linkesGithub.appendChild(iconGithub);

    const linksShare = document.createElement("a");
    linksShare.setAttribute("href", this.shareLink);
    linksShare.setAttribute("aria-label", "link para ver el proyecto");
    const iconShare = document.createElement("img");
    iconShare.setAttribute("src", "../src/img/assets/icons-redes/share.svg");
    iconShare.setAttribute("alt", "icon share");
    linksShare.appendChild(iconShare);
    containerIconsShare.append(linkesGithub, linksShare);

    //**concatenacion final left */

    containerImgProjects.append(figureImg, brillos, containerIconsShare);

    contactProject.append(containerTextProjects, containerImgProjects);

    return contactProject;
    // containerProjectss.appendChild(contactProject);
  }
}
