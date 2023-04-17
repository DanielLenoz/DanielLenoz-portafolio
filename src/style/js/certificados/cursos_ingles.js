const containerCaruelIngles = document.querySelector(".container-ingles");

const inglesElementos = [
  {
    image: "../../src/img/img-cursos-ingles/B1-requests-and-reflexive-pronouns.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/B1-prefixes-and-compound-adjectives.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/B1-adjectives-and-passive-voice.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/B1-relative-pronouns-and-clauses.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/B1-present-perfect-and-prepositions.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/B1-infinitive-and-transitive-verbs.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/B1-connectors-and-preferences.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/B1-expressions-of-time-and-quantity.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/shopping.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/pronunciation.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/for-networking.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/basic-writing.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/vocabulary-and-expressions.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/unsoled-mysteries.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/descriptions-and-comparatives.jpg",
  },
  {
    image:
      "../../src/img/img-cursos-ingles/A2-past-experiences-and-future-intentions.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/A2-conjunctions-and-superlatives.jpg",
  },
  {
    image:
      "../../src/img/img-cursos-ingles/A2-present-continuous-and-prepositions.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/A2-quantities-and-gerunds.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/A2-adverbs-and-nouns.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/A2-articles-and-model-verbs.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/A2-questions-and-answers.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/A1-dates,times-and-simple-expresiones.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/workshop-for-beginners.jpg",
  },
  {
    image: "../../src/img/img-cursos-ingles/A1-for-beginners.jpg",
  },
  {
    image:
      "../../src/img/img-cursos-ingles/A1-present-simple-and-common-vocabulary.jpg",
  },
];

inglesElementos.forEach((ingles) => {
  const containerImg = document.createElement("figure");
  containerImg.classList.add("container_img--certificados");

  const imgIngles = document.createElement("img");
  imgIngles.setAttribute("src", ingles.image);

  containerImg.appendChild(imgIngles);

  containerCaruelIngles.appendChild(containerImg);
});
