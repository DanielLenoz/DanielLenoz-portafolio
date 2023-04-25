const containerCaruelExtra = document.querySelector(".container-extra");

const extraElementos = [
  {
    image: "../src/img/img-cursos-extra/marca-personal.jpg",
    altDescription: "curso marca personal"
  },
  {
    image: "../src/img/img-cursos-extra/fundamentos-de-matematicas.jpg",
    altDescription: "curso fundamentos de matematicas"
  },
  {
    image: "../src/img/img-cursos-extra/optimizacion-perfil-de-linkedin.jpg",
    altDescription: "curso optimizacion perfil de linkedin"
  },
  {
    image:
      "../src/img/img-cursos-extra/estrategias-de-contenido-para-linkedin.jpg",
    altDescription: "curso estrategias de contenido para linkedin"
  },
  {
    image: "../src/img/img-cursos-extra/creacion-de-portafolio-cv.jpg",
    altDescription: "curso creacion de portafolio y CV"
  },
  {
    image: "../src/img/img-cursos-extra/pentateuco.jpg",
    altDescription: "curso pentateuco"
  },
];

extraElementos.forEach((extras) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificados");

  const imgExtra = document.createElement("img");
  imgExtra.setAttribute("src", extras.image);
  imgExtra.setAttribute("alt", extras.altDescription)

  containerImg.appendChild(imgExtra);

  containerCaruelExtra.appendChild(containerImg);
});
