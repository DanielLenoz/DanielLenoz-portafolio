const containerCaruelDiseno = document.querySelector(".container-diseno");

const disenoElementos = [
  {
    image: "../src/img/img-cursos-diseno/sistemas-de-diseño.jpg",
    altDescription: "curso sistemas de diseño"
  },
  {
    image: "../src/img/img-cursos-diseno/diseño-para-programadores.jpg",
    altDescription: "curso diseño para programadores"
  },
];

disenoElementos.forEach((disenos) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificates");

  const imgDiseno = document.createElement("img");
  imgDiseno.setAttribute("src", disenos.image);
  imgDiseno.setAttribute("alt", disenos.altDescription)

  containerImg.appendChild(imgDiseno);

  containerCaruelDiseno.appendChild(containerImg);
});
