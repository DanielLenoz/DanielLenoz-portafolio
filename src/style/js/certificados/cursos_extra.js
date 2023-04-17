const containerCaruelExtra = document.querySelector('.container-extra')

const extraElementos = [
    {
        image: "../../src/img/img-cursos-extra/marca-personal.jpg"
    },
    {
        image: "../../src/img/img-cursos-extra/fundamentos-de-matematicas.jpg"
    },
    {
        image: "../../src/img/img-cursos-extra/optimizacion-perfil-de-linkedin.jpg"
    },
    {
        image: "../../src/img/img-cursos-extra/estrategias-de-contenido-para-linkedin.jpg"
    },
    {
        image: "../../src/img/img-cursos-extra/creacion-de-portafolio-cv.jpg"
    },
    {
        image: "../../src/img/img-cursos-extra/pentateuco.jpg"
    },
]

extraElementos.forEach((extras) => {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgExtra = document.createElement("img");
    imgExtra.setAttribute("src", extras.image);

    containerImg.appendChild(imgExtra);

    containerCaruelExtra.appendChild(containerImg);
})