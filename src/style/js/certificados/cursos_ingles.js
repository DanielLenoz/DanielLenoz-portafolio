const containerCaruelIngles = document.querySelector(".container-ingles");

const inglesElementos = [
  {
    image: "../src/img/img-cursos-ingles/B1-requests-and-reflexive-pronouns.jpg",
    altDescription:"curso de B1 request and reflexive pronouns"
  },
  {
    image: "../src/img/img-cursos-ingles/B1-prefixes-and-compound-adjectives.jpg",
    altDescription:"curso de B1 prefixes and compound adjectives"
  },
  {
    image: "../src/img/img-cursos-ingles/B1-adjectives-and-passive-voice.jpg",
    altDescription:"curso de B1 adjectives and passive voice"
  },
  {
    image: "../src/img/img-cursos-ingles/B1-relative-pronouns-and-clauses.jpg",
    altDescription:"curso de B1 relative pronouns and clauses"
  },
  {
    image: "../src/img/img-cursos-ingles/B1-present-perfect-and-prepositions.jpg",
    altDescription:"curso de B1 present perfect and prepositions"
  },
  {
    image: "../src/img/img-cursos-ingles/B1-infinitive-and-transitive-verbs.jpg",
    altDescription:"curso de B1 infinitive and transitive verbs"
  },
  {
    image: "../src/img/img-cursos-ingles/B1-connectors-and-preferences.jpg",
    altDescription:"curso de B1 connectors and preferences"
  },
  {
    image: "../src/img/img-cursos-ingles/B1-expressions-of-time-and-quantity.jpg",
    altDescription:"curso de B1 expressions of time and quantity"
  },
  {
    image: "../src/img/img-cursos-ingles/shopping.jpg",
    altDescription:"curso de shopping"
  },
  {
    image: "../src/img/img-cursos-ingles/pronunciation.jpg",
    altDescription:"curso de pronunciation"
  },
  {
    image: "../src/img/img-cursos-ingles/for-networking.jpg",
    altDescription:"curso de for networking"
  },
  {
    image: "../src/img/img-cursos-ingles/basic-writing.jpg",
    altDescription:"curso de basic writing"
  },
  {
    image: "../src/img/img-cursos-ingles/vocabulary-and-expressions.jpg",
    altDescription:"curso de vocabulary and expressions"
  },
  {
    image: "../src/img/img-cursos-ingles/unsoled-mysteries.jpg",
    altDescription:"curso de unsoled mysteries"
  },
  {
    image: "../src/img/img-cursos-ingles/descriptions-and-comparatives.jpg",
    altDescription:"curso de descriptions and comparatives"
  },
  {
    image:
      "../src/img/img-cursos-ingles/A2-past-experiences-and-future-intentions.jpg",
    altDescription:"curso de A2 past experiences and future intentions"
  },
  {
    image: "../src/img/img-cursos-ingles/A2-conjunctions-and-superlatives.jpg",
    altDescription:"curso de A2 conjunctions and superlatives"
  },
  {
    image:
      "../src/img/img-cursos-ingles/A2-present-continuous-and-prepositions.jpg",
    altDescription:"curso de A2 present continuos and prepositions"
  },
  {
    image: "../src/img/img-cursos-ingles/A2-quantities-and-gerunds.jpg",
    altDescription:"curso de A2 quantities and gerunds"
  },
  {
    image: "../src/img/img-cursos-ingles/A2-adverbs-and-nouns.jpg",
    altDescription:"curso de A2 adverbs and nouns"
  },
  {
    image: "../src/img/img-cursos-ingles/A2-articles-and-model-verbs.jpg",
    altDescription:"curso de A2 articles and model verbs"
  },
  {
    image: "../src/img/img-cursos-ingles/A2-questions-and-answers.jpg",
    altDescription:"curso de A2 questions and answers"
  },
  {
    image: "../src/img/img-cursos-ingles/A1-dates,times-and-simple-expresiones.jpg",
    altDescription:"curso de A1 dates, times and simple expresiones"
  },
  {
    image: "../src/img/img-cursos-ingles/workshop-for-beginners.jpg",
    altDescription:"curso de workshop for beginners"
  },
  {
    image: "../src/img/img-cursos-ingles/A1-for-beginners.jpg",
    altDescription:"curso de A1 for beginners"
  },
  {
    image:
      "../src/img/img-cursos-ingles/A1-present-simple-and-common-vocabulary.jpg",
    altDescription:"curso de A1 present simple and common vocabulary"
  },
];

inglesElementos.forEach((ingles) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificados");

  const imgIngles = document.createElement("img");
  imgIngles.setAttribute("src", ingles.image);
  imgIngles.setAttribute("alt", ingles.altDescription);

  containerImg.appendChild(imgIngles);

  containerCaruelIngles.appendChild(containerImg);
});
