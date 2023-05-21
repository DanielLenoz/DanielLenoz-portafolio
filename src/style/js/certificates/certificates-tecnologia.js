const certificatesTecnologia = document.querySelector(
  ".container-tecnologia"
);

const search2 = (query) =>
  certificatesElements.filter((certificatesId) =>
    certificatesId.certificatesId.includes(query)
    );

search2("tecnologia").map((data) => {
    certificatesTecnologia.appendChild(new Certificates(data))
})
