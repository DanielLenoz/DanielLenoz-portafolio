const containerCaruelExtra = document.querySelector('.container-extra')

const extraElementos = [
    {
        image: "../../src/img/img-ingles/B1-relative-pronouns-and-clauses.jpg"
    }
]

extraElementos.forEach((extras) => {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgExtra = document.createElement("img");
    imgExtra.setAttribute("src", extras.image);

    containerImg.appendChild(imgExtra);

    containerCaruelExtra.appendChild(containerImg);
})