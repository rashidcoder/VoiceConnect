const buttons = document.querySelectorAll(".see-more");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const alreadyOpen = btn.classList.contains("rotated");

    buttons.forEach(b => {
      b.classList.remove("rotated");
      b.parentElement.nextElementSibling.style.display = "none";
    });

    if (!alreadyOpen) {
      btn.classList.add("rotated");
      btn.parentElement.nextElementSibling.style.display = "block";
    }
  });
});
