const myform = document.getElementById("login");

const inputs = myform.querySelectorAll("input");
const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    validateRequired(e.target);
  });
  input.addEventListener("focus", (e) => {
    e.target.nextElementSibling.classList.add("no_display");
  });
});

myform.querySelector("select").addEventListener("blur", (e) => {
  validateRequired(e.target);
});
myform.querySelector("select").addEventListener("focus", (e) => {
  e.target.nextElementSibling.classList.add("no_display");
});

const validateRequired = (field) => {
  if (field.classList.contains("textbox")) {
    if (field.value.trim() === "") {
      const siblingSpan = field.nextElementSibling;
      siblingSpan.classList.remove("no_display");
    } else if (field.type === "email") {
      if (!emailRegex.test(field.value)) {
        const siblingSpan = field.nextElementSibling;
        siblingSpan.classList.remove("no_display");
        siblingSpan.innerText = 'Please enter Valid Email'
      }
    }
  }
};
