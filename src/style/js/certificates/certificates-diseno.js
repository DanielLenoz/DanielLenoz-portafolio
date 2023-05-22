const containerCaruelDiseno = document.querySelector(".container-diseno");

const elementesDiseno = [
  {
    certificatesImgSrc: "../src/img/img-cursos-diseno/sistemas-de-diseño.jpg",
    altDescription: "curso sistemas de diseño"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-diseno/diseño-para-programadores.jpg",
    altDescription: "curso diseño para programadores"
  },
];

elementesDiseno.forEach((data) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificates");

  const imgDiseno = document.createElement("img");
  imgDiseno.setAttribute("src", data.certificatesImgSrc);
  imgDiseno.setAttribute("alt", data.altDescription)

  containerImg.appendChild(imgDiseno);

  containerCaruelDiseno.appendChild(containerImg);
});
