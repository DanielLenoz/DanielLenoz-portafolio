class Navar {
  constructor({
    openMenuImgSrc,
    closeMenuImgSrc,
    logoSrc,
    homeLink,
    homeText,
    aboutLink,
    aboutText,
    certificatesLink,
    certificatesText,
    projectsLink,
    projectsText,
    contactLink,
    contactText,
  }) {
    this.openMenuImgSrc = openMenuImgSrc;
    this.closeMenuImgSrc = closeMenuImgSrc;
    this.logoSrc = logoSrc;
    this.homeLink = homeLink;
    this.homeText = homeText;
    this.aboutLink = aboutLink;
    this.aboutText = aboutText;
    this.certificatesLink = certificatesLink;
    this.certificatesText = certificatesText;
    this.projectsLink = projectsLink;
    this.projectsText = projectsText;
    this.contactLink = contactLink;
    this.contactText = contactText;
  }

  navarMobile() {
    const navarMobile = document.createElement("nav");
    navarMobile.classList.add("navar--mobile");

    const menuIcon = document.createElement("div");
    menuIcon.classList.add("menu--icon");

    const imgOpen = document.createElement("img");
    imgOpen.classList.add("menu");
    imgOpen.setAttribute("src", this.openMenuImgSrc);
    imgOpen.setAttribute("alt", "menu cerrado");

    const imgClose = document.createElement("img");
    imgClose.classList.add("close");
    imgClose.classList.add("inactive");
    imgClose.setAttribute("src", this.closeMenuImgSrc);
    imgClose.setAttribute("alt", "menu abierto");

    const containerMenuMobile = document.createElement("div");
    containerMenuMobile.classList.add("container_menu-mobile");
    containerMenuMobile.classList.add("inactive");
    const brilloTop = document.createElement("div");
    brilloTop.classList.add("brillo-top");
    const redContainer = document.createElement("div");
    redContainer.classList.add("red_container");
    const brillobottom = document.createElement("div");
    brillobottom.classList.add("brillo-bottom");

    const contenidoHome = document.createElement("div");
    contenidoHome.classList.add("contenido");
    const aShareLinkHome = document.createElement("a");
    aShareLinkHome.classList.add("share_link");
    aShareLinkHome.setAttribute("href", this.homeLink);
    aShareLinkHome.setAttribute("aria-label", "devuelta a la pagina principal");
    aShareLinkHome.innerText = `${this.homeText}`;

    contenidoHome.appendChild(aShareLinkHome);

    const contenidoAbout = document.createElement("div");
    contenidoAbout.classList.add("contenido");
    const aShareLinkAbout = document.createElement("a");
    aShareLinkAbout.classList.add("share_link");
    aShareLinkAbout.setAttribute("href", this.aboutLink);
    aShareLinkAbout.setAttribute("aria-label", "area de solo About");
    aShareLinkAbout.innerText = `${this.aboutText}`;

    contenidoAbout.appendChild(aShareLinkAbout);

    const contenidoCertificates = document.createElement("div");
    contenidoCertificates.classList.add("contenido");
    const aShareLinkCertificates = document.createElement("a");
    aShareLinkCertificates.classList.add("share_link");
    aShareLinkCertificates.setAttribute("href", this.certificatesLink);
    aShareLinkCertificates.setAttribute("aria-label", "area de solo eventos");
    aShareLinkCertificates.innerText = `${this.certificatesText}`;

    contenidoCertificates.appendChild(aShareLinkCertificates);

    const contenidoProjects = document.createElement("div");
    contenidoProjects.classList.add("contenido");
    const aShareLinkProjects = document.createElement("a");
    aShareLinkProjects.classList.add("share_link");
    aShareLinkProjects.setAttribute("href", this.projectsLink);
    aShareLinkProjects.setAttribute("aria-label", "area de solo proyectos");
    aShareLinkProjects.innerText = `${this.projectsText}`;

    contenidoProjects.appendChild(aShareLinkProjects);

    const contenidoContact = document.createElement("div");
    contenidoContact.classList.add("contenido");
    const aShareLinkContact = document.createElement("a");
    aShareLinkContact.classList.add("share_link");
    aShareLinkContact.setAttribute("href", this.contactLink);
    aShareLinkContact.setAttribute("aria-label", "area de contacto");
    aShareLinkContact.innerText = `${this.contactText}`;

    contenidoContact.appendChild(aShareLinkContact);

    redContainer.append(
      contenidoHome,
      contenidoAbout,
      contenidoCertificates,
      contenidoProjects,
      contenidoContact
    );

    containerMenuMobile.append(brilloTop, redContainer, brillobottom);
    menuIcon.append(imgOpen, imgClose);

    navarMobile.append(menuIcon, containerMenuMobile);

    return navarMobile;
  }

  navarDesktop() {
    const navarDesktop = document.createElement("nav");
    navarDesktop.classList.add("navar--desktop");

    const containerMenuDesktop = document.createElement("div");
    containerMenuDesktop.classList.add("container_menu-desktop");
    const redContainer = document.createElement("div");
    redContainer.classList.add("red_container");

    const containerLogo = document.createElement("div");
    containerLogo.classList.add("container_logo");
    const imgLogo = document.createElement("img");
    imgLogo.setAttribute("src", this.logoSrc);
    imgLogo.setAttribute("alt", "logo de Daniel");
    const textLogo = document.createElement("p");
    textLogo.classList.add("text_logo");
    textLogo.innerText = "Blog";
    containerLogo.append(imgLogo, textLogo);

    const contenidoHome = document.createElement("div");
    contenidoHome.classList.add("contenido");
    const aShareLinkHome = document.createElement("a");
    aShareLinkHome.classList.add("share_link");
    aShareLinkHome.setAttribute("href", this.homeLink);
    aShareLinkHome.setAttribute("aria-label", "devuelta a la pagina principal");
    aShareLinkHome.innerText = `${this.homeText}`;

    contenidoHome.appendChild(aShareLinkHome);

    const contenidoAbout = document.createElement("div");
    contenidoAbout.classList.add("contenido");
    const aShareLinkAbout = document.createElement("a");
    aShareLinkAbout.classList.add("share_link");
    aShareLinkAbout.setAttribute("href", this.aboutLink);
    aShareLinkAbout.setAttribute("aria-label", "area de solo About");
    aShareLinkAbout.innerText = `${this.aboutText}`;

    contenidoAbout.appendChild(aShareLinkAbout);

    const contenidoCertificates = document.createElement("div");
    contenidoCertificates.classList.add("contenido");
    const aShareLinkCertificates = document.createElement("a");
    aShareLinkCertificates.classList.add("share_link");
    aShareLinkCertificates.setAttribute("href", this.certificatesLink);
    aShareLinkCertificates.setAttribute("aria-label", "area de solo eventos");
    aShareLinkCertificates.innerText = `${this.certificatesText}`;

    contenidoCertificates.appendChild(aShareLinkCertificates);

    const contenidoProjects = document.createElement("div");
    contenidoProjects.classList.add("contenido");
    const aShareLinkProjects = document.createElement("a");
    aShareLinkProjects.classList.add("share_link");
    aShareLinkProjects.setAttribute("href", this.projectsLink);
    aShareLinkProjects.setAttribute("aria-label", "area de solo proyectos");
    aShareLinkProjects.innerText = `${this.projectsText}`;

    contenidoProjects.appendChild(aShareLinkProjects);

    const contenidoContact = document.createElement("div");
    contenidoContact.classList.add("contenido");
    const aShareLinkContact = document.createElement("a");
    aShareLinkContact.classList.add("share_link");
    aShareLinkContact.setAttribute("href", this.contactLink);
    aShareLinkContact.setAttribute("aria-label", "area de contacto");
    aShareLinkContact.innerText = `${this.contactText}`;

    contenidoContact.appendChild(aShareLinkContact);

    redContainer.append(
      contenidoHome,
      contenidoAbout,
      contenidoCertificates,
      contenidoProjects,
      contenidoContact
    );

    containerMenuDesktop.appendChild(redContainer);
    navarDesktop.append(containerLogo, containerMenuDesktop);

    return navarDesktop;
  }
}
