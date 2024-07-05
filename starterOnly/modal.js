function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.bground .content .close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeBtn.addEventListener("click", () => closeModal(modalbg));

// close modal function
function closeModal(input) {
  input.style.display = "none";
}

// Check input and add error message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[name="reserve"]');
  const submitButton = form.querySelector('.btn-submit');
  const firstName = form.querySelector('#first');
  let error_defined = formData.length;
  let errorStates = {
    firstName: true,
    lastName: true,
    email: true,
    birthdate: true,
    quantity: true,
    location: true,
    terms: true
  };

  firstName.addEventListener("change", () => {
    if (firstName.value.length < 2) {
      firstName.style.border = "3px solid red";
      document.querySelector('.error_firstname')?.remove();
      firstName.insertAdjacentHTML("afterend", "<p class='error_message error_firstname'>Veuillez entrer 2 caractères ou plus pour le champ du nom.</p>");
      submitButton.setAttribute("disabled", "true");
      if (errorStates.firstName === false) {
        errorStates.firstName = true;
        if (errorStates.firstName) {
          error_defined += 1;
          console.log(error_defined)
        }
      }
    } else {
      firstName.style.borderColor = "green";
      document.querySelector('.error_firstname')?.remove();
      errorStates.firstName = false;
      if (errorStates.firstName === false) {
        error_defined -= 1;
        console.log(error_defined)
      }
      if (error_defined === 0) {
        submitButton.removeAttribute("disabled");
        console.log(error_defined)
      }
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit");

  });

  function enableSubmit() {
    if (error_defined) {
      submitButton.setAttribute("disabled", "disabled");
    } else {
      submitButton.removeAttribute("disabled");
    }
  }
});

