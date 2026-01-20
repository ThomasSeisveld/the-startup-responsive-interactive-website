const dropdown = document.querySelector(".dropdown");
const wrapper = document.querySelector(".wrapper");

const dropdownMenu = () => {
   dropdown.classList.toggle("is-active");
   wrapper.classList.toggle("is-active");
};

dropdown.addEventListener("click", () => {
   dropdownMenu();
});

window.addEventListener("click", (e) => {
   if (!e.target.closest(".dropdown") && !e.target.closest(".dropdown-menu")) {
      if (wrapper.classList.contains("is-active")) {
         dropdown.classList.remove("is-active");
         wrapper.classList.remove("is-active");
      }
   }
});

const asciiForm = document.querySelector(".ascii-form");
const asciiInput = document.querySelector(".ascii-input");
const outputContainer = document.querySelector(".output-container");
const asciiOutput = document.querySelector(".ascii-output");
const errorMessage = document.querySelector(".error-message");

asciiForm.addEventListener("submit", (e) => {
   e.preventDefault();
   convertASCII();
});

function convertASCII() {
   const tabInput = asciiInput.value.trim();
   asciiOutput.textContent = tabInput;
   outputContainer.style.display = "block";
   errorMessage.style.display = "none";
}

function showError(message) {
   errorMessage.textContent = message;
   errorMessage.style.display = "block";
   outputContainer.style.display = "none";
}