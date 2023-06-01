const containerCaruelFinanzas = document.querySelector(".container-finanzas");

const search4 = (query) =>
  certificatesElements.filter((certificatesId) =>
    certificatesId.certificatesId.includes(query)
    );

search4("finanzas").map((data) => {
    containerCaruelFinanzas.appendChild(new Certificates(data))
})