const containerCaruelTecnologia = document.querySelector('.container-tecnologia')

const tecnologiaElementos = [
    {
        image: "../../src/img/img-ingles/B1-relative-pronouns-and-clauses.jpg"
    }
]

tecnologiaElementos.forEach((tecnologias) => {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgtecnologia = document.createElement("img");
    imgtecnologia.setAttribute("src", tecnologias.image);

    containerImg.appendChild(imgtecnologia);

    containerCaruelTecnologia.appendChild(containerImg);
})