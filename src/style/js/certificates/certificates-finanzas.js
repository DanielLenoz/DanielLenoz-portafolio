const containerCaruelFinanzas = document.querySelector(".container-finanzas");

const elementesFinanzas = [
  {
    certificatesImgSrc: "../src/img/img-cursos-finanzas/crear-un-presupuesto-personal.jpg",
    altDescription: "curso crear un presupuesto personal"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-finanzas/presupuesto-y-flujo-de-caja.jpg",
    altDescription: "curso presupuesto y flujo de caja"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-finanzas/finanzas-personales.jpg",
    altDescription: "curso finanzas personales"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-finanzas/introduccion-a-educacion-financiera.jpg",
    altDescription: "curso introduccion a educacion financiera"
  },
];

elementesFinanzas.forEach((data) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificates");

  const imgFinanzas = document.createElement("img");
  imgFinanzas.setAttribute("src", data.certificatesImgSrc);
  imgFinanzas.setAttribute("alt", data.altDescription)

  containerImg.appendChild(imgFinanzas);

  containerCaruelFinanzas.appendChild(containerImg);
});