const containerCaruelExtra = document.querySelector(".container-extra");

const search5 = (query) =>
  certificatesElements.filter((certificatesId) =>
    certificatesId.certificatesId.includes(query)
    );

search5("extra").map((data) => {
    containerCaruelExtra.appendChild(new Certificates(data))
})