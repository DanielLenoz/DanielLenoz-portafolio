const containerCaruelIngles = document.querySelector('.container-ingles')

const inglesElementos = [
    {
        image: "../../src/img/img-ingles/B1-relative-pronouns-and-clauses.jpg"
    }
]

inglesElementos.forEach((ingles) => {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgIngles = document.createElement("img");
    imgIngles.setAttribute("src", ingles.image);

    containerImg.appendChild(imgIngles);

    containerCaruelIngles.appendChild(containerImg);
})