const containerTech = document.querySelector(".container-tecnologia");

const productListTech = [];

productListTech.push({
  image: "../img/img-tecnologia/manipulacion-de-arrays-en-javaScript.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/programacion-orientada-a-objetos-con-javaScript2.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/programacion-orientada-a-objetos-con-javascript.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/programacion-orientada-a-objetos.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/closures-y-scope-en-javascript.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/practico-de-JavaScript.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/basico-Javascript.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/animaciones-css.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/transform-transition-css.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/diseño-web-con-css-grid-flexbox.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/css-grid-layout.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/maquetacion-en-css.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/css-grid-basico.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/maquetacion-mobile-first.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/practico-de-html-y-css.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/definitivo-de-html-y-css.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/practico-de-frontend-developer.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/frontend-developer.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/git-github.jpg",
});
productListTech.push({
  image:
    "../img/img-tecnologia/introduccion-a-la-terminal-y-linea-de-comandos.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/prework-windows.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/fundamentos-de-ingenieria-de-software.jpg.jpg",
});
productListTech.push({
  image: "../img/img-tecnologia/introduccion-a-la-web.jpg",
});

function certicicadosTech(arrTech) {
  for (cursosImg of arrTech) {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgTech = document.createElement("img");
    imgTech.setAttribute("src", cursosImg.image);

    containerImg.appendChild(imgTech);

    containerTech.appendChild(containerImg);
  }
}
certicicadosTech(productListTech);
