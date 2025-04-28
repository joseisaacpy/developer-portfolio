// modal
const modal = document.getElementById("modal");
setTimeout(() => {
  modal.classList.add("show");
}, 1000);

// botão de fechar modal
const closeModal = document.querySelector(".modal span");
// adiciona evento de fechar modal no botão de fechar
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
