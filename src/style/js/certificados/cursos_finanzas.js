const containerCaruelFinanzas = document.querySelector(".container-finanzas");

const finanzasElementos = [
  {
    image: "../src/img/img-cursos-finanzas/crear-un-presupuesto-personal.jpg",
    altDescription: "curso crear un presupuesto personal"
  },
  {
    image: "../src/img/img-cursos-finanzas/presupuesto-y-flujo-de-caja.jpg",
    altDescription: "curso presupuesto y flujo de caja"
  },
  {
    image: "../src/img/img-cursos-finanzas/finanzas-personales.jpg",
    altDescription: "curso finanzas personales"
  },
  {
    image: "../src/img/img-cursos-finanzas/introduccion-a-educacion-financiera.jpg",
    altDescription: "curso introduccion a educacion financiera"
  },
];

finanzasElementos.forEach((finanzas) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificados");

  const imgFinanzas = document.createElement("img");
  imgFinanzas.setAttribute("src", finanzas.image);
  imgFinanzas.setAttribute("alt", finanzas.altDescription)

  containerImg.appendChild(imgFinanzas);

  containerCaruelFinanzas.appendChild(containerImg);
});
