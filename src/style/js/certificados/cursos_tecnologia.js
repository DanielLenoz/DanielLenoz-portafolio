const containerCaruelTecnologia = document.querySelector('.container-tecnologia')

const tecnologiaElementos = [
    {
        image: "../../src/img/img-technologia/debugging-devtools.jpg"
    },
    {
        image: "../../src/img/img-technologia/javaScript-engine-V8-navegador.jpg"
    },
    {
        image: "../../src/img/img-technologia/manipulacion-de-arrays-en-javaScript.jpg"
    },
    {
        image: "../../src/img/img-technologia/programacion-orientada-a-objetos-con-javaScript2.jpg"
    },
    {
        image: "../../src/img/img-technologia/programacion-orientada-a-objetos-con-javascript.jpg"
    },
    {
        image: "../../src/img/img-technologia/programacion-orientada-a-objetos.jpg"
    },
    {
        image: "../../src/img/img-technologia/closures-y-scope-en-javascript.jpg"
    },
    {
        image: "../../src/img/img-technologia/practico-de-JavaScript.jpg"
    },
    {
        image: "../../src/img/img-technologia/basico-Javascript.jpg"
    },
    {
        image: "../../src/img/img-technologia/animaciones-css.jpg"
    },
    {
        image: "../../src/img/img-technologia/transform-transition-css.jpg"
    },
    {
        image: "../../src/img/img-technologia/diseño-web-con-css-grid-flexbox.jpg"
    },
    {
        image: "../../src/img/img-technologia/css-grid-layout.jpg"
    },
    {
        image: "../../src/img/img-technologia/maquetacion-en-css.jpg"
    },
    {
        image: "../../src/img/img-technologia/css-grid-basico.jpg"
    },
    {
        image: "../../src/img/img-technologia/maquetacion-mobile-first.jpg"
    },
    {
        image: "../../src/img/img-technologia/practico-de-html-y-css.jpg"
    },
    {
        image: "../../src/img/img-technologia/definitivo-de-html-y-css.jpg"
    },
    {
        image: "../../src/img/img-technologia/practico-de-frontend-developer.jpg"
    },
    {
        image: "../../src/img/img-technologia/frontend-developer.jpg"
    },
    {
        image: "../../src/img/img-technologia/git-github.jpg"
    },
    {
        image: "../../src/img/img-technologia/introduccion-a-la-terminal-y-linea-de-comandos.jpg"
    },
    {
        image: "../../src/img/img-technologia/rework-windows.jpg"
    },
    {
        image: "../../src/img/img-technologia/fundamentos-de-ingenieria-de-software.jpg.jpg"
    },
    {
        image: "../../src/img/img-technologia/introduccion-a-la-web.jpg"
    },
]

tecnologiaElementos.forEach((tecnologias) => {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgtecnologia = document.createElement("img");
    imgtecnologia.setAttribute("src", tecnologias.image);

    containerImg.appendChild(imgtecnologia);

    containerCaruelTecnologia.appendChild(containerImg);
})