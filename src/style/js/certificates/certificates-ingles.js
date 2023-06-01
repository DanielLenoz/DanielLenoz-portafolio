const certificatesInlges = document.querySelector(".container-ingles");

const search = (query) =>
  certificatesElements.filter((certificatesId) =>
    certificatesId.certificatesId.includes(query)
    );

search("ingles").map((data) => {
  certificatesInlges.appendChild(new Certificates(data))
})