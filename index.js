// modal
const modal = document.getElementById("modal");
// função para abrir o modal depois de 4 segundos
setTimeout(() => {
  modal.classList.add("show");
}, 4000);

// botão de fechar modal
const closeModal = document.querySelector(".modal span");
// adiciona evento de fechar modal no botão de fechar
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
