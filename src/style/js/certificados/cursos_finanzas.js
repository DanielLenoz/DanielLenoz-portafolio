const containerCaruelFinanzas = document.querySelector(".container-finanzas");

const finanzasElementos = [
  {
    image: "../src/img/img-cursos-finanzas/crear-un-presupuesto-personal.jpg",
  },
  {
    image: "../src/img/img-cursos-finanzas/presupuesto-y-flujo-de-caja.jpg",
  },
  {
    image: "../src/img/img-cursos-finanzas/finanzas-personales.jpg",
  },
  {
    image: "../src/img/img-cursos-finanzas/introduccion-a-educacion-financiera.jpg",
  },
];

finanzasElementos.forEach((finanzas) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificados");

  const imgExtra = document.createElement("img");
  imgExtra.setAttribute("src", finanzas.image);

  containerImg.appendChild(imgExtra);

  containerCaruelFinanzas.appendChild(containerImg);
});
