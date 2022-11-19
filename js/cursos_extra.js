const containerExtra = document.querySelector(".container-extra");

const productListExtra = [];

productListExtra.push({
  image: "../img/img-cursos-extra/marca-personal.jpg",
});
productListExtra.push({
  image: "../img/img-cursos-extra/fundamentos-de-matematicas.jpg",
});
productListExtra.push({
  image: "../img/img-cursos-extra/optimizacion-perfil-de-linkedin.jpg",
});
productListExtra.push({
  image: "../img/img-cursos-extra/estrategias-de-contenido-para-linkedin.jpg",
});
productListExtra.push({
  image: "../img/img-cursos-extra/finanzas-personales.jpg",
});
productListExtra.push({
  image: "../img/img-cursos-extra/creacion-de-portafolio-cv.jpg",
});
productListExtra.push({
  image: "../img/img-cursos-extra/pentateuco.jpg",
});

function certicicadosExtra(arrExtra) {
  for (cursosImg of arrExtra) {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgExtra = document.createElement("img");
    imgExtra.setAttribute("src", cursosImg.image);

    containerImg.appendChild(imgExtra);

    containerExtra.appendChild(containerImg);
  }
}

certicicadosExtra(productListExtra);
