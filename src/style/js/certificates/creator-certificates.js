class Certificates {
  constructor({ certificatesImgSrc, altDescription, certificatesId }) {
    this.certificatesImgSrc = certificatesImgSrc;
    this.altDescription = altDescription;
    this.certificatesId = certificatesId;
    return this.createCertificates();
  }

  createCertificates() {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificates");
    containerImg.id = this.certificatesId;

    const certificatesImg = document.createElement("img");
    certificatesImg.setAttribute("src", this.certificatesImgSrc);
    certificatesImg.setAttribute("alt", this.altDescription);

    containerImg.appendChild(certificatesImg);

    return containerImg;
  }
}
