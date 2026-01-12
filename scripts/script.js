const dropdown = document.querySelector(".dropdown");

const dropdownMenu = () => {
   dropdown.classList.toggle("is-active");
};

dropdown.addEventListener("click", () => {
   dropdownMenu();
});

window.addEventListener("click", (e) => {
   if (!e.target.closest(".dropdown")) {
      if (dropdown.classList.contains("is-active")) {
         dropdownMenu();
      }
   }
});