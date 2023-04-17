const containerCaruelDiseno = document.querySelector(".container-diseno");

const disenoElementos = [
  {
    image: "../src/img/img-cursos-diseno/sistemas-de-diseño.jpg",
  },
  {
    image: "../src/img/img-cursos-diseno/diseño-para-programadores.jpg",
  },
];

disenoElementos.forEach((disenos) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificados");

  const imgDiseno = document.createElement("img");
  imgDiseno.setAttribute("src", disenos.image);

  containerImg.appendChild(imgDiseno);

  containerCaruelDiseno.appendChild(containerImg);
});
