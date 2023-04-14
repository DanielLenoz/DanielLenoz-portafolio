const containerCaruelDiseno = document.querySelector('.container-diseno')

const disenoElementos = [
    {
        image: "../../src/img/img-ingles/B1-relative-pronouns-and-clauses.jpg"
    }
]

disenoElementos.forEach((disenos) => {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgDiseno = document.createElement("img");
    imgDiseno.setAttribute("src", disenos.image);

    containerImg.appendChild(imgDiseno);

    containerCaruelDiseno.appendChild(containerImg);
})