const containerProjectss = document.querySelector(".container_projects");

elementsProjects.map((data) => {
    containerProjectss.appendChild(new Projects(data));
})