const containerCaruelDiseno = document.querySelector(".container-diseno");

const search3 = (query) =>
  certificatesElements.filter((certificatesId) =>
    certificatesId.certificatesId.includes(query)
    );

search3("diseno").map((data) => {
    containerCaruelDiseno.appendChild(new Certificates(data))
})
