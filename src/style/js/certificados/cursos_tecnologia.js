const containerCaruelTecnologia = document.querySelector(
  ".container-tecnologia"
);

const tecnologiaElementos = [
  {
    image: "../src/img/img-cursos-technologia/debugging-devtools.jpg",
    altDescription:"curso de debugging devtools",
  },
  {
    image: "../src/img/img-cursos-technologia/javaScript-engine-V8-navegador.jpg",
    altDescription:"curso de javascript engine v8 navegador",
  },
  {
    image:
      "../src/img/img-cursos-technologia/manipulacion-de-arrays-en-javaScript.jpg",
    altDescription:"curso de manipulacion de arrays en javaScript",
  },
  {
    image:
      "../src/img/img-cursos-technologia/programacion-orientada-a-objetos-con-javaScript2.jpg",
    altDescription:"curso de progrmacion orientada a objetos con javaScript2",
  },
  {
    image:
      "../src/img/img-cursos-technologia/programacion-orientada-a-objetos-con-javascript.jpg",
    altDescription:"curso de programacion orientada a objetos con javascript",
  },
  {
    image: "../src/img/img-cursos-technologia/programacion-orientada-a-objetos.jpg",
    altDescription:"curso de programacion orientada a objetos",
  },
  {
    image: "../src/img/img-cursos-technologia/closures-y-scope-en-javascript.jpg",
    altDescription:"curso de closures y scope en javascript",
  },
  {
    image: "../src/img/img-cursos-technologia/practico-de-JavaScript.jpg",
    altDescription:"curso de practico de javaScript",
  },
  {
    image: "../src/img/img-cursos-technologia/basico-Javascript.jpg",
    altDescription:"curso de basico javascript",
  },
  {
    image: "../src/img/img-cursos-technologia/animaciones-css.jpg",
    altDescription:"curso de animaciones css",
  },
  {
    image: "../src/img/img-cursos-technologia/transform-transition-css.jpg",
    altDescription:"curso de transform transition css",
  },
  {
    image: "../src/img/img-cursos-technologia/diseño-web-con-css-grid-flexbox.jpg",
    altDescription:"curso de diseño web con css grid flexbox",
  },
  {
    image: "../src/img/img-cursos-technologia/css-grid-layout.jpg",
    altDescription:"curso de css grid layout",
  },
  {
    image: "../src/img/img-cursos-technologia/maquetacion-en-css.jpg",
    altDescription:"curso de maquetacion en css",
  },
  {
    image: "../src/img/img-cursos-technologia/css-grid-basico.jpg",
    altDescription:"curso de css grid basico",
  },
  {
    image: "../src/img/img-cursos-technologia/maquetacion-mobile-first.jpg",
    altDescription:"curso de maquetacion mobile first",
  },
  {
    image: "../src/img/img-cursos-technologia/practico-de-html-y-css.jpg",
    altDescription:"curso de practivo de html y css",
  },
  {
    image: "../src/img/img-cursos-technologia/definitivo-de-html-y-css.jpg",
    altDescription:"curso de definitivo de html y css ",
  },
  {
    image: "../src/img/img-cursos-technologia/practico-de-frontend-developer.jpg",
    altDescription:"curso de practico de frontend developer",
  },
  {
    image: "../src/img/img-cursos-technologia/frontend-developer.jpg",
    altDescription:"curso de frontend developer",
  },
  {
    image: "../src/img/img-cursos-technologia/git-github.jpg",
    altDescription:"curso de git y github",
  },
  {
    image:
      "../src/img/img-cursos-technologia/introduccion-a-la-terminal-y-linea-de-comandos.jpg",
    altDescription:"curso de terminal y linea de comandos",
  },
  {
    image: "../src/img/img-cursos-technologia/prework-windows.jpg",
    altDescription:"curso de prework windows",
  },
  {
    image:
      "../src/img/img-cursos-technologia/fundamentos-de-ingenieria-de-software.jpg",
    altDescription:"curso de fundamentos de ingenieria de software",
  },
  {
    image: "../src/img/img-cursos-technologia/introduccion-a-la-web.jpg",
    altDescription:"curso de introduccion a la web",
  },
];

tecnologiaElementos.forEach((tecnologias) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificados");

  const imgtecnologia = document.createElement("img");
  imgtecnologia.setAttribute("src", tecnologias.image);
  imgtecnologia.setAttribute("alt", tecnologias.altDescription)

  containerImg.appendChild(imgtecnologia);

  containerCaruelTecnologia.appendChild(containerImg);
});
