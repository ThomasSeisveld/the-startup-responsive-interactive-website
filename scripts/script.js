// Dropdown menu script
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

// convert ASCII script
const asciiForm = document.querySelector(".ascii-form");
const asciiInput = document.querySelector(".ascii-input");
const textarea = document.querySelector("textarea");
const result = document.querySelector(".counter");
const outputContainer = document.querySelector(".output-container");
const asciiOutput = document.querySelector(".ascii-output");
const errorMessage = document.querySelector(".error-message");
const convertButton = document.querySelector(".convert-button");

let limit = 500;
result.textContent = 0 + "/" + limit;

function updateFontSize() {
   let textLength = textarea.value.length;
   const maxSize = 20;
   const minSize = 14;
   const maxChars = limit;
   const ratio = Math.min(textLength / maxChars, 1);
   const size = Math.round(maxSize - (maxSize - minSize) * ratio);
   textarea.style.setProperty('--dynamic-font-size', size + 'px');
}


textarea.addEventListener("input", function () {
   let textLength = textarea.value.length;
   result.textContent = textLength + "/" + limit;
   updateFontSize();
   
   if (textLength > limit) {
      textarea.style.borderColor = "var(--limit-exceeded-color)";
      result.style.color = "var(--limit-exceeded-color)";
      convertButton.disabled = true;
      showError("Character limit exceeded!");
   }
   else {
      textarea.style.borderColor = "var(--v-border-color-dark)";
      result.style.color = "var(--v-text-color-dark)";
      convertButton.disabled = false;
      errorMessage.style.display = "none";
   }
});

convertButton.addEventListener("click", function(e) {
   e.preventDefault();
   convertASCII();
});



window.addEventListener("resize", updateFontSize);

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