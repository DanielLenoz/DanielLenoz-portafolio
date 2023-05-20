const headerHome = document.querySelector("#home");

elementsNavarAndFooter.map((data) => {
  const navarMobile = new Navar(data);
  const navarElement = navarMobile.navarMobile();
  headerHome.appendChild(navarElement);
  console.log(navarMobile)
  console.log(headerHome)
});
elementsNavarAndFooter.map((data) => {
  const navarDesktop = new Navar(data);
  const navarElement = navarDesktop.navarDesktop();
  headerHome.appendChild(navarElement);
});
