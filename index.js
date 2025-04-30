// Modal
const modal = document.getElementById("modal");
// Função para abrir o modal depois de 4 segundos
setTimeout(() => {
  modal.classList.add("show");
}, 4000);

// Botão de fechar modal
const closeModal = document.querySelector(".modal span");
// Adiciona evento de fechar modal no botão de fechar
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Projetos
const projetos = [
  {
    nome: "Best Websites Dev",
    link: "https://joseisaacpy.github.io/best-websites-dev/",
    repo: "joseisaacpy/best-websites-dev",
    capa: "./img/projects/projeto-links-web.webp",
    descricao: "Coleção de sites úteis para desenvolvedores.",
    tecnologias: "HTML, CSS, JS",
  },
  {
    nome: "Clone Site Telego",
    link: "https://joseisaacpy.github.io/clone-site-telego/",
    repo: "joseisaacpy/clone-site-telego",
    capa: "",
    descricao: "Clonagem de uma landing page para prática de layout.",
    tecnologias: "HTML, CSS",
  },
  {
    nome: "Consumo de API GitHub",
    link: "https://joseisaacpy.github.io/consumindo-api-github/",
    repo: "joseisaacpy/consumindo-api-github",
    capa: "./img/projects/projeto-api-github.png",
    descricao: "Projeto que consome a API do GitHub.",
    tecnologias: "HTML, CSS, JS",
  },
  {
    nome: "Landing Page Equilíbrio",
    link: "https://joseisaacpy.github.io/landing-page-equilibrio/",
    repo: "joseisaacpy/landing-page-equilibrio",
    capa: "./projects/projeto-landing-gym.webp",
    descricao: "Landing page responsiva de tema relaxante.",
    tecnologias: "HTML, CSS, JS",
  },
  {
    nome: "Landing Page Barbeiro",
    link: "https://joseisaacpy.github.io/lp-igor-barbeiro/",
    repo: "joseisaacpy/lp-igor-barbeiro",
    capa: "./projects/lp-igor-barbeiro.webp",
    descricao: "Página para divulgação de serviços de barbearia.",
    tecnologias: "HTML, CSS, JS",
  },
  {
    nome: "Gerador de Dicas do Dia",
    link: "https://joseisaacpy.github.io/projeto-dicas-diarias/",
    repo: "joseisaacpy/projeto-dicas-diarias",
    capa: "./projects/projeto-dicas-diarias.webp",
    descricao: "Página que exibe dicas diárias e reflexivas.",
    tecnologias: "HTML, CSS, JavaScript",
  },
  {
    nome: "Página de Links para Web",
    link: "https://joseisaacpy.github.io/best-websites-dev/",
    repo: "joseisaacpy/best-websites-dev",
    capa: "./projects/projeto-links-web.webp",
    descricao: "Página de links úteis para Desenvolvedores Web.",
    tecnologias: "HTML, CSS, JavaScript",
  },
];
