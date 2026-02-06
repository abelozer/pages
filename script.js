document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    document.body.classList.add("is-leaving");
  });
});
