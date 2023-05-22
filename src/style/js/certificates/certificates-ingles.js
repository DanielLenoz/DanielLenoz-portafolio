const containerCaruelIngles = document.querySelector(".container-ingles");

const elementesIngles = [
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/B1-requests-and-reflexive-pronouns.jpg",
    altDescription:"curso de B1 request and reflexive pronouns"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/B1-prefixes-and-compound-adjectives.jpg",
    altDescription:"curso de B1 prefixes and compound adjectives"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/B1-adjectives-and-passive-voice.jpg",
    altDescription:"curso de B1 adjectives and passive voice"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/B1-relative-pronouns-and-clauses.jpg",
    altDescription:"curso de B1 relative pronouns and clauses"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/B1-present-perfect-and-prepositions.jpg",
    altDescription:"curso de B1 present perfect and prepositions"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/B1-infinitive-and-transitive-verbs.jpg",
    altDescription:"curso de B1 infinitive and transitive verbs"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/B1-connectors-and-preferences.jpg",
    altDescription:"curso de B1 connectors and preferences"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/B1-expressions-of-time-and-quantity.jpg",
    altDescription:"curso de B1 expressions of time and quantity"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/shopping.jpg",
    altDescription:"curso de shopping"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/pronunciation.jpg",
    altDescription:"curso de pronunciation"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/for-networking.jpg",
    altDescription:"curso de for networking"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/basic-writing.jpg",
    altDescription:"curso de basic writing"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/vocabulary-and-expressions.jpg",
    altDescription:"curso de vocabulary and expressions"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/unsoled-mysteries.jpg",
    altDescription:"curso de unsoled mysteries"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/descriptions-and-comparatives.jpg",
    altDescription:"curso de descriptions and comparatives"
  },
  {
    certificatesImgSrc:
      "../src/img/img-cursos-ingles/A2-past-experiences-and-future-intentions.jpg",
    altDescription:"curso de A2 past experiences and future intentions"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/A2-conjunctions-and-superlatives.jpg",
    altDescription:"curso de A2 conjunctions and superlatives"
  },
  {
    certificatesImgSrc:
      "../src/img/img-cursos-ingles/A2-present-continuous-and-prepositions.jpg",
    altDescription:"curso de A2 present continuos and prepositions"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/A2-quantities-and-gerunds.jpg",
    altDescription:"curso de A2 quantities and gerunds"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/A2-adverbs-and-nouns.jpg",
    altDescription:"curso de A2 adverbs and nouns"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/A2-articles-and-model-verbs.jpg",
    altDescription:"curso de A2 articles and model verbs"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/A2-questions-and-answers.jpg",
    altDescription:"curso de A2 questions and answers"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/A1-dates,times-and-simple-expresiones.jpg",
    altDescription:"curso de A1 dates, times and simple expresiones"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/workshop-for-beginners.jpg",
    altDescription:"curso de workshop for beginners"
  },
  {
    certificatesImgSrc: "../src/img/img-cursos-ingles/A1-for-beginners.jpg",
    altDescription:"curso de A1 for beginners"
  },
  {
    certificatesImgSrc:
      "../src/img/img-cursos-ingles/A1-present-simple-and-common-vocabulary.jpg",
    altDescription:"curso de A1 present simple and common vocabulary"
  },
];

elementesIngles.forEach((data) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificates");

  const imgIngles = document.createElement("img");
  imgIngles.setAttribute("src", data.certificatesImgSrc);
  imgIngles.setAttribute("alt", data.altDescription);

  containerImg.appendChild(imgIngles);

  containerCaruelIngles.appendChild(containerImg);
});