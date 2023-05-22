const containerCaruelExtra = document.querySelector(".container-extra");

const elementesExtra = [
  {
    certificatesImgSrc: "../src/img/img-cursos-extra/marca-personal.jpg",
    altDescription: "curso marca personal"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-extra/fundamentos-de-matematicas.jpg",
    altDescription: "curso fundamentos de matematicas"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-extra/optimizacion-perfil-de-linkedin.jpg",
    altDescription: "curso optimizacion perfil de linkedin"
  },
  {
    certificatesImgSrc:
      "../src/img/img-cursos-extra/estrategias-de-contenido-para-linkedin.jpg",
    altDescription: "curso estrategias de contenido para linkedin"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-extra/creacion-de-portafolio-cv.jpg",
    altDescription: "curso creacion de portafolio y CV"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-extra/pentateuco.jpg",
    altDescription: "curso pentateuco"
  },
];

elementesExtra.forEach((data) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificates");

  const imgExtra = document.createElement("img");
  imgExtra.setAttribute("src", data.certificatesImgSrc);
  imgExtra.setAttribute("alt", data.altDescription)

  containerImg.appendChild(imgExtra);

  containerCaruelExtra.appendChild(containerImg);
});