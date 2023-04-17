const containerCaruelTecnologia = document.querySelector(
  ".container-tecnologia"
);

const tecnologiaElementos = [
  {
    image: "../../src/img/img-cursos-technologia/debugging-devtools.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/javaScript-engine-V8-navegador.jpg",
  },
  {
    image:
      "../../src/img/img-cursos-technologia/manipulacion-de-arrays-en-javaScript.jpg",
  },
  {
    image:
      "../../src/img/img-cursos-technologia/programacion-orientada-a-objetos-con-javaScript2.jpg",
  },
  {
    image:
      "../../src/img/img-cursos-technologia/programacion-orientada-a-objetos-con-javascript.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/programacion-orientada-a-objetos.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/closures-y-scope-en-javascript.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/practico-de-JavaScript.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/basico-Javascript.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/animaciones-css.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/transform-transition-css.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/diseño-web-con-css-grid-flexbox.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/css-grid-layout.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/maquetacion-en-css.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/css-grid-basico.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/maquetacion-mobile-first.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/practico-de-html-y-css.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/definitivo-de-html-y-css.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/practico-de-frontend-developer.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/frontend-developer.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/git-github.jpg",
  },
  {
    image:
      "../../src/img/img-cursos-technologia/introduccion-a-la-terminal-y-linea-de-comandos.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/rework-windows.jpg",
  },
  {
    image:
      "../../src/img/img-cursos-technologia/fundamentos-de-ingenieria-de-software.jpg.jpg",
  },
  {
    image: "../../src/img/img-cursos-technologia/introduccion-a-la-web.jpg",
  },
];

tecnologiaElementos.forEach((tecnologias) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificados");

  const imgtecnologia = document.createElement("img");
  imgtecnologia.setAttribute("src", tecnologias.image);

  containerImg.appendChild(imgtecnologia);

  containerCaruelTecnologia.appendChild(containerImg);
});
