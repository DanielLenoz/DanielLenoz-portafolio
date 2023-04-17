// contenedor de footer
const footer = document.querySelector("footer");

//*modelo iphone */

const elementsHTMlIphones = [
  {
    imgLinkedin: "../../src/img/assets/icons-redes/linkedin.svg",
    imgGithub: "../../src/img/assets/icons-redes/github.svg",
    imgLogo: "../../src/img/assets/icons-redes/logo_daniel.svg",

    textFooter:
      "la organización es el principio de la planeación y el nacimiento de la creación",

    linkeHome: "home",
    textHome: "Home",

    linkeAbout: "about",
    textAbout: "About",

    linkeProjects: "projects",
    textProjects: "Projects",

    linkeContact: "contact",
    textContact: "Contact",
  },
];

elementsHTMlIphones.forEach((elIphone) => {
  //** container footer text
  const containerFooterText = document.createElement("section");
  containerFooterText.classList.add("container_footer--text");
  const footerText = document.createElement("p");
  footerText.classList.add("footer-text");
  footerText.innerText = `${elIphone.textFooter}`;

  containerFooterText.append(footerText);
  //** footer menu
  const footerMenu = document.createElement("section");
  footerMenu.classList.add("footer_menu");

  //*home
  const aShareLinkHome = document.createElement("a");
  aShareLinkHome.classList.add("share_link");
  aShareLinkHome.setAttribute("href", elIphone.linkeHome);
  aShareLinkHome.innerText = `${elIphone.textHome}`;

  //*about
  const aShareLinkAbout = document.createElement("a");
  aShareLinkAbout.classList.add("share_link");
  aShareLinkAbout.setAttribute("href", elIphone.linkeAbout);
  aShareLinkAbout.innerText = `${elIphone.textAbout}`;

  //*projects
  const aShareLinkProjects = document.createElement("a");
  aShareLinkProjects.classList.add("share_link");
  aShareLinkProjects.setAttribute("href", elIphone.linkeProjects);
  aShareLinkProjects.innerText = `${elIphone.textProjects}`;

  //*contact
  const aShareLinkContact = document.createElement("a");
  aShareLinkContact.classList.add("share_link");
  aShareLinkContact.setAttribute("href", elIphone.linkeContact);
  aShareLinkContact.innerText = `${elIphone.textContact}`;

  footerMenu.append(
    aShareLinkHome,
    aShareLinkAbout,
    aShareLinkProjects,
    aShareLinkContact
  );

  //** footer contact
  const footerContact = document.createElement("section");
  footerContact.classList.add("footer_contact");
  const contactText = document.createElement("p");
  contactText.classList.add("contact_text");
  contactText.innerText = `Contactame`;

  const containerIconsContact = document.createElement("article");
  containerIconsContact.classList.add("container_icons--contact");
  const imgLinkedin = document.createElement("img");
  imgLinkedin.setAttribute("src", elIphone.imgLinkedin);
  const imgGithub = document.createElement("img");
  imgGithub.setAttribute("src", elIphone.imgGithub);

  containerIconsContact.append(imgLinkedin, imgGithub);

  footerContact.append(contactText, containerIconsContact);
  //**footer property
  const footerProperty = document.createElement("section");
  footerProperty.classList.add("footer_property");
  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", elIphone.imgLogo);
  const propertyText = document.createElement("p");
  propertyText.classList.add("property_text");
  propertyText.innerText = `© 2023 Daniel`;

  footerProperty.append(imgLogo, propertyText);

  //**contatenacion del HTML */
  footer.append(containerFooterText, footerMenu, footerContact, footerProperty);
});
