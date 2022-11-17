const containerIngles = document.querySelector(".container-ingles");

const productListIngles = [];
productListIngles.push({
  image: "../img/img-ingles/B1-requests-and-reflexive-pronouns.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/B1-prefixes-and-compound-adjectives.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/B1-adjectives-and-passive-voice.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/B1-relative-pronouns-and-clauses.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/B1-present-perfect-and-prepositions.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/B1-infinitive-and-transitive-verbs.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/B1-connectors-and-preferences.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/B1-expressions-of-time-and-quantity.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/shopping.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/pronunciation.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/for-networking.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/basic-writing.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/vocabulary-and-expressions.jpg",
});

productListIngles.push({
  image: "../img/img-ingles/unsoled-mysteries.jpg",
});
productListIngles.push({
  image: "../imgimg-ingles/descriptions-and-comparatives.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A2-past-experiences-and-future-intentions.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A2-conjunctions-and-superlatives.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A2-present-continuous-and-prepositions.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A2-quantities-and-gerunds.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A2-adverbs-and-nouns.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A2-articles-and-model-verbs.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A2-questions-and-answers.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A1-dates,times-and-simple-expresiones.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/workshop-for-beginners.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A1-for-beginners.jpg",
});
productListIngles.push({
  image: "../img/img-ingles/A1-present-simple-and-common-vocabulary.jpg",
});

function certicicadosIngles(arrIngles) {
  for (cursosImg of arrIngles) {
    const containerImg = document.createElement("figure");
    containerImg.classList.add("container_img--certificados");

    const imgIngles = document.createElement("img");
    imgIngles.setAttribute("src", cursosImg.image);

    containerImg.appendChild(imgIngles);

    containerIngles.appendChild(containerImg);
  }
}
certicicadosIngles(productListIngles);
