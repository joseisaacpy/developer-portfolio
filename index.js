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
    nome: "Gerador de Dicas do Dia",
    link: "https://joseisaacpy.github.io/projeto-dicas-diarias/",
    repo: "joseisaacpy/projeto-dicas-diarias",
    capa: "./img/projects/projeto-dicas-diarias.webp",
    descricao:
      "Descubra dicas diárias inspiradoras para refletir e começar bem o dia!",
    tecnologias: "HTML, CSS, JavaScript",
  },
  {
    nome: "Landing Page Barbeiro",
    link: "https://joseisaacpy.github.io/lp-igor-barbeiro/",
    repo: "joseisaacpy/lp-igor-barbeiro",
    capa: "./img/projects/projeto-igor-barbeiro.webp",
    descricao: "Página para divulgação de serviços de barbearia.",
    tecnologias: "HTML, CSS, JavaScript",
  },
  {
    nome: "Consumo de API GitHub",
    link: "https://joseisaacpy.github.io/consumindo-api-github/",
    repo: "joseisaacpy/consumindo-api-github",
    capa: "./img/projects/projeto-api-github.webp",
    descricao: "Projeto que consome a API do GitHub.",
    tecnologias: "HTML, CSS, JavaScript",
  },
  {
    nome: "Landing Page Equilíbrio",
    link: "https://joseisaacpy.github.io/landing-page-equilibrio/",
    repo: "joseisaacpy/landing-page-equilibrio",
    capa: "./img/projects/projeto-landing-gym.webp",
    descricao:
      "Página responsiva com foco em bem-estar, cores escuras e layout moderno.",
    tecnologias: "HTML, CSS, JavaScript",
  },
  {
    nome: "Clone Site Telego",
    link: "https://joseisaacpy.github.io/clone-site-telego/",
    repo: "joseisaacpy/clone-site-telego",
    capa: "./img/projects/projeto-clone-site-telego.webp",
    descricao: "Clonagem de uma landing page para prática de layout.",
    tecnologias: "HTML, CSS",
  },

  {
    nome: "Best Websites Dev",
    link: "https://joseisaacpy.github.io/best-websites-dev/",
    repo: "joseisaacpy/best-websites-dev",
    capa: "./img/projects/projeto-links-web.webp",
    descricao: "Coleção de sites úteis para desenvolvedores.",
    tecnologias: "HTML, CSS, JavaScript",
  },
];

// Container dos projetos
const containerProjects = document.querySelector(".container-projects");

if (containerProjects) {
  // Variável de auxílio
  let html = "";

  // Para cada projeto
  projetos.forEach((projeto) => {
    html += `
    <div class="item-project" data-aos="flip-up">
    <img
    src="${projeto.capa}"
    alt="Imagem do projeto ${projeto.nome}"
    />
    <h3>${projeto.nome}</h3>
          <p>${projeto.descricao}</p>
          <p><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
          <a
          href="${projeto.link}"
          target="_blank"
          >🔗 Ver Projeto</a
          >
          </div>
          `;
    containerProjects.innerHTML = html;
  });
}
