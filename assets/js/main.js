const animals = [
  {
    id: 1,
    title: "Baleia Azul",
    category: "mar aberto",
    img: "./assets/imgs/extinction2.png",
    desc: `<span>Características:</span> A baleia azul é o maior animal do planeta, podendo atingir até 30 metros de comprimento e pesar mais de 200 toneladas.`,
    habitat: `<span>Habitat:</span> Essas tartarugas podem ser encontradasem oceanos de todo o mundo, desde águas tropicais até aspolares. Elas frequentam áreas costeiras e oceânicas.`,
    threats: `<span>Ameaças:</span> A colisão com embarcações e a poluição sonora dos oceanos são ameaças significativas para essas majestosas criaturas.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Implementar zonas de proteção marinha e regulamentações para reduzir o tráfego de embarcações em áreas de alimentação.`,
  },
  {
    id: 2,
    title: "Orcinus Orca",
    category: "mar aberto",
    img: "./assets/imgs/extinction3.png",
    desc: `<span>Características:</span> A orca, também conhecida como baleia assassina, é um mamífero marinho de grande porte com uma aparência distintiva.`,
    habitat: `<span>Habitat:</span> Orcas são altamente adaptáveis e podem ser encontradas em todos os oceanos do mundo, desde águas costeiras até mar aberto.`,
    threats: `<span>Ameaças:</span> Poluição, captura para aquários, colisões com embarcações e escassez de presas são ameaças que afetam as populações de orcas.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Estabelecer áreas marinhas protegidas, regulamentar o turismo de observação de baleias e reduzir a poluição marinha.`,
  },
  {
    id: 3,
    title: "Tartaruga-de-Couro",
    category: "mar aberto",
    img: "./assets/imgs/extinction4.png",
    desc: `<span>Características:</span> A tartaruga-de-couro é a maior das tartarugas marinhas, caracterizada por sua carapaça flexível e pele com textura de couro.`,
    habitat: `<span>Habitat:</span> Essas tartarugas podem ser encontradas em oceanos de todo o mundo, desde águas tropicais até as polares. Elas frequentam áreas costeiras e oceânicas.`,
    threats: `<span>Ameaças:</span> Pesca acidental, ingestão de plástico, degradação de áreas de desova e mudanças climáticas.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Uso de dispositivos de exclusão em redes de pesca, limpeza dos oceanos, proteção de praias de desova e monitoramento de populações.`,
  },
  {
    id: 4,
    title: "Golfinho-Rotador",
    category: "mar aberto",
    img: "./assets/imgs/extinction5.png",
    desc: `<span>Características:</span> Ele é conhecido por seu corpo esbelto e pela coloração cinza-azulada nas costas que se estende em um padrão de "rotação" pelo corpo.`,
    habitat: `<span>Habitat:</span> Esses golfinhos são encontrados em águas tropicais e subtropicais ao redor do mundo, frequentemente em alto-mar.`,
    threats: `<span>Ameaças:</span> Captura acidental em redes de pesca, poluição marinha e perturbações sonoras submarinas representam ameaças significativas para esses golfinhos.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Implementar regulamentações para reduzir a captura acidental, promover práticas de pesca sustentável e reduzir a poluição dos oceanos.`,
  },
  {
    id: 5,
    title: "Foca-Monge-do-Havaí",
    category: "costa",
    img: "./assets/imgs/extinction6.png",
    desc: `<span>Características:</span> A foca-monge-do-Havaí é uma espécie de foca com uma pelagem dourada distintiva. Ela é uma das focas mais raras do mundo.`,
    habitat: `<span>Habitat:</span> Encontrada apenas nas ilhas havaianas, essa espécie costuma se reproduzir em praias remotas.`,
    threats: `<span>Ameaças:</span> A degradação do habitat, captura acidental em redes de pesca, doenças e poluição ameaçam gravemente essas focas.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Implementação de áreas marinhas protegidas, regulamentações para evitar capturas acidentais e esforços para minimizar a poluição costeira.`,
  },
];

/*=============== SHOW MENU ===============*/

const handleMenu = () => {
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  const navMenu = document.getElementById("nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
};

handleMenu();

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const removeMenu = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
};
navLink.forEach((link) => link.addEventListener("click", removeMenu));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== FILTER ANIMALS ===============*/
const buttonContainer = document.getElementById("button-container");
const cardContainer = document.getElementById("card-container");

function displayAnimalCategory(animalCategory) {
  let displayAnimal = animalCategory.map((animal) => {
    return `
        <div class="extinction__card">
          <div class="extinction__card-bg">
            <img
              src="./assets/imgs/extinction1.png"
              class="extinction__img-one"
              alt=""
            />
            <img
              src="${animal.img}"
              class="extinction__img-two"
              alt=""
            />
          </div>
          <div class="extinction__card-data">
            <h3 class="extinction__card-title">${animal.title}</h3>
            <h4 class="extinction__card-description">
              ${animal.desc}
            </h4>
            <h4 class="extinction__card-description">
              ${animal.habitat}
            </h4>
            <h4 class="extinction__card-description">
              ${animal.threats}
            </h4>
            <h4 class="extinction__card-description">
              ${animal.protection}
            </h4>
          </div>
        </div>
    `;
  });

  displayAnimal = displayAnimal.join("");
  cardContainer.innerHTML = displayAnimal;
}

function filterAnimals(category) {
  const filteredAnimals = animals.filter(
    (animal) => animal.category === category
  );
  displayAnimalCategory(filteredAnimals);
}

const categories = animals.reduce((values, item) => {
  if (!values.includes(item.category)) {
    values.push(item.category);
  }
  return values;
}, []);

const categoryBtns = categories
  .map((category) => {
    return `
      <button
        class="button"
        id="filter-btn"
        data-id="${category}"
      >
        ${category}
      </button>`;
  })
  .join("");

buttonContainer.innerHTML = categoryBtns;

// Defina a categoria padrão (mar aberto)
let currentCategory = "mar aberto";
filterAnimals(currentCategory);

// Adicione eventos de clique aos botões de categoria
const filterButtons = document.querySelectorAll("#filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.getAttribute("data-id");
    filterAnimals(currentCategory);
  });
});
