const containerDiseno = document.querySelector(".container-diseno");

const productListDiseno = [];

productListDiseno.push({
  image: "../img/img-diseño/sistemas-de-diseño.jpg",
});

productListDiseno.push({
  image: "../img/img-diseño/diseño-para-programadores.jpg",
});
function certicicadosDiseno(arrDiseno) {
  for (cursosImg of arrDiseno) {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgDiseno = document.createElement("img");
    imgDiseno.setAttribute("src", cursosImg.image);

    containerImg.appendChild(imgDiseno);

    containerDiseno.appendChild(containerImg);
  }
}

certicicadosDiseno(productListDiseno);
