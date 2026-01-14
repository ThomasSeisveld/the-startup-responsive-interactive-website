const dropdown = document.querySelector(".dropdown");
const wrapper = document.querySelector(".wrapper");

const dropdownMenu = () => {
   wrapper.classList.toggle("is-active");
};

dropdown.addEventListener("click", () => {
   dropdownMenu();
});

window.addEventListener("click", (e) => {
   if (!e.target.closest(".dropdown") && !e.target.closest(".dropdown-menu")) {
      if (wrapper.classList.contains("is-active")) {
         wrapper.classList.remove("is-active");
      }
   }
});