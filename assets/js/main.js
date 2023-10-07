const animals = [
  {
    id: 1,
    class: "card-one",
    title: "Baleia Azul",
    category: "água salgada",
    img: "./assets/imgs/extinction2.png",
    desc: `<span>Características:</span> A baleia azul é o maior animal do planeta, podendo atingir até 30 metros de comprimento e pesar mais de 200 toneladas.`,
    habitat: `<span>Habitat:</span> Essas tartarugas podem ser encontradasem oceanos de todo o mundo, desde águas tropicais até aspolares. Elas frequentam áreas costeiras e oceânicas.`,
    threats: `<span>Ameaças:</span> A colisão com embarcações e a poluição sonora dos oceanos são ameaças significativas para essas majestosas criaturas.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Implementar zonas de proteção marinha e regulamentações para reduzir o tráfego de embarcações em áreas de alimentação.`,
  },
  {
    id: 2,
    class: "card-two",
    title: "Orcinus Orca",
    category: "água salgada",
    img: "./assets/imgs/extinction3.png",
    desc: `<span>Características:</span> A orca, também conhecida como baleia assassina, é um mamífero marinho de grande porte com uma aparência distintiva.`,
    habitat: `<span>Habitat:</span> Orcas são altamente adaptáveis e podem ser encontradas em todos os oceanos do mundo, desde águas costeiras até mar aberto.`,
    threats: `<span>Ameaças:</span> Poluição, captura para aquários, colisões com embarcações e escassez de presas são ameaças que afetam as populações de orcas.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Estabelecer áreas marinhas protegidas, regulamentar o turismo de observação de baleias e reduzir a poluição marinha.`,
  },
  {
    id: 3,
    class: "card-three",
    title: "Tartaruga-de-Couro",
    category: "água salgada",
    img: "./assets/imgs/extinction4.png",
    desc: `<span>Características:</span> A tartaruga-de-couro é a maior das tartarugas marinhas, caracterizada por sua carapaça flexível e pele com textura de couro.`,
    habitat: `<span>Habitat:</span> Essas tartarugas podem ser encontradas em oceanos de todo o mundo, desde águas tropicais até as polares. Elas frequentam áreas costeiras e oceânicas.`,
    threats: `<span>Ameaças:</span> Pesca acidental, ingestão de plástico, degradação de áreas de desova e mudanças climáticas.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Uso de dispositivos de exclusão em redes de pesca, limpeza dos oceanos, proteção de praias de desova e monitoramento de populações.`,
  },
  {
    id: 4,
    class: "card-four",
    title: "Golfinho-Rotador",
    category: "água salgada",
    img: "./assets/imgs/extinction5.png",
    desc: `<span>Características:</span> Ele é conhecido por seu corpo esbelto e pela coloração cinza-azulada nas costas que se estende em um padrão de "rotação" pelo corpo.`,
    habitat: `<span>Habitat:</span> Esses golfinhos são encontrados em águas tropicais e subtropicais ao redor do mundo, frequentemente em alto-mar.`,
    threats: `<span>Ameaças:</span> Captura acidental em redes de pesca, poluição marinha e perturbações sonoras submarinas representam ameaças significativas para esses golfinhos.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Implementar regulamentações para reduzir a captura acidental, promover práticas de pesca sustentável e reduzir a poluição dos oceanos.`,
  },
  {
    id: 5,
    class: "card-five",
    title: "Foca-Monge-do-Havaí",
    category: "água salgada",
    img: "./assets/imgs/extinction6.png",
    desc: `<span>Características:</span> A foca-monge-do-Havaí é uma espécie de foca com uma pelagem dourada distintiva. Ela é uma das focas mais raras do mundo.`,
    habitat: `<span>Habitat:</span> Encontrada apenas nas ilhas havaianas, essa espécie costuma se reproduzir em praias remotas.`,
    threats: `<span>Ameaças:</span> A degradação do habitat, captura acidental em redes de pesca, doenças e poluição ameaçam gravemente essas focas.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Implementação de áreas marinhas protegidas, regulamentações para evitar capturas acidentais e esforços para minimizar a poluição costeira.`,
  },
  {
    id: 6,
    class: "card-six",
    title: "Lambari",
    category: "água doce",
    img: "./assets/imgs/extinction7.png",
    desc: `<span>Características:</span> O lambari é um pequeno peixe de água doce que varia em tamanho e coloração, mas geralmente apresenta um corpo prateado ou dourado e é conhecido por suas escamas brilhantes. `,
    habitat: `<span>Habitat:</span> Esses peixes são encontrados em rios, riachos e lagos de toda a América do Sul, e também em algumas partes da América Central.`,
    threats: `<span>Ameaças:</span> Embora o lambari não esteja necessariamente ameaçado de extinção em escala global, as populações locais podem ser afetadas pela degradação do habitat, poluição da água e pesca excessiva.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Devido à destruição de seu habitat natural devido ao desmatamento e desenvolvimento humano, bem como à poluição da água e à introdução de espécies invasoras.`,
  },
  {
    id: 7,
    class: "card-seven",
    title: "Peixe-da-Amazônia",
    category: "água doce",
    img: "./assets/imgs/extinction8.png",
    desc: `<span>Características:</span> O peixe-da-Amazônia, também conhecido como pirarucu, é um dos maiores peixes de água doce do mundo, com uma carapaça escamosa e coloração acinzentada.`,
    habitat: `<span>Habitat:</span> Eles habitam a bacia Amazônica, principalmente em rios e lagos de água doce.`,
    threats: `<span>Ameaças:</span> A pesca predatória, a degradação de habitats aquáticos e a construção de represas são ameaças significativas para o peixe-da-Amazônia.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Implementar regulamentações para a pesca sustentável, criar áreas protegidas e promover a conservação de habitats aquáticos.`,
  },
  {
    id: 8,
    class: "card-eight",
    title: "Peixe-boi-da-Amazônia",
    category: "água doce",
    img: "./assets/imgs/extinction10.png",
    desc: `<span>Características:</span> Os peixes-bois-da-Amazônia são mamíferos aquáticos conhecidos por seus corpos grandes, arredondados e achatados, com pele rugosa e coloração acinzentada.`,
    habitat: `<span>Habitat:</span> Eles habitam rios e lagos da bacia Amazônica, incluindo o Rio Amazonas.`,
    threats: `<span>Ameaças:</span> A perda de habitat devido ao desmatamento, a poluição da água, a colisão com embarcações e a caça ilegal representam ameaças significativas para o peixe-boi-da-Amazônia.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Estabelecer áreas de conservação, regulamentar a navegação para evitar colisões, promover a educação ambiental e reforçar a aplicação das leis de proteção à vida selvagem.`,
  },
  {
    id: 9,
    class: "card-nine",
    title: "Atum-Rabilho do Atlântico",
    category: "água salgada",
    img: "./assets/imgs/extinction11.png",
    desc: `<span>Características:</span> O atum-rabilho do Atlântico é um dos maiores atuns, conhecido por seu corpo alongado e coloração azul-acinzentada nas costas e prateada nas laterais.`,
    habitat: `<span>Habitat:</span> Esses atuns podem ser encontrados em águas oceânicas, principalmente no Oceano Atlântico, durante suas migrações.`,
    threats: `<span>Ameaças:</span> Sobrepesca é a principal ameaça para o atum-rabilho do Atlântico, resultando em uma drástica diminuição de suas populações.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Estabelecer cotas de pesca rigorosas, promover a pesca sustentável e implementar regulamentações para proteger áreas de desova.`,
  },
  {
    id: 10,
    class: "card-ten",
    title: "Esturjão-Atlântico",
    category: "água doce",
    img: "./assets/imgs/extinction12.png",
    desc: `<span>Características:</span> O esturjão-atlântico é conhecido por seu corpo alongado e suas escamas que se assemelham a uma armadura. Eles também são conhecidos por produzir caviar altamente valorizado.`,
    habitat: `<span>Habitat:</span> Esses esturjões são encontrados em rios que deságuam no Oceano Atlântico, incluindo rios na América do Norte e na Europa.`,
    threats: `<span>Ameaças:</span> A principal ameaça para o esturjão-atlântico é a pesca predatória, principalmente devido à demanda por seu caviar. A degradação do habitat e a poluição dos rios também contribuem para seu declínio.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> Implementar regulamentações rigorosas para proteger o esturjão, regulamentar a pesca para garantir a sustentabilidade e promover a conscientização sobre a conservação.`,
  },
  {
    id: 11,
    class: "card-eleven",
    title: "Salminus Brasiliensis",
    category: "água doce",
    img: "./assets/imgs/extinction13.png",
    desc: `<span>Características:</span> O Dourado é um peixe de água doce de tamanho médio a grande, conhecido por sua coloração dourada brilhante e corpo alongado. Eles são conhecidos por serem excelentes predadores.`,
    habitat: `<span>Habitat:</span> Eles são nativos das bacias hidrográficas do rio Paraná, Paraguai e Uruguai, no Brasil e em países vizinhos.`,
    threats: `<span>Ameaças:</span> A construção de represas, a poluição da água, a pesca predatória e a degradação do habitat são ameaças significativas para o Dourado.`,
    protection: `<span>Medidas de Proteção Recomendadas:</span> É crucial implementar regulamentações para proteger as áreas de reprodução e desova do Dourado, estabelecer cotas de pesca sustentável e promover a conscientização sobre a importância da conservação.`,
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
              class="extinction__img-two ${animal.class}"
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

let currentCategory = "água salgada";
filterAnimals(currentCategory);

const filterButtons = document.querySelectorAll("#filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.getAttribute("data-id");
    filterAnimals(currentCategory);
  });
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__data,
   .home__information, 
    .section__title,
   .text-one,
   .text-two,
   .text-three,
   .text-four,
   .text-five,
   .img-one,
   .img-two,
   .img-three,
   .img-four,
   .img-five,
   .img-six,
   .img-seven,
   .tips__border,
   .extinction__filter,
   .extinction__cards`,

  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about__img`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about__data`,
  {
    origin: "right",
    interval: 100,
  }
);
