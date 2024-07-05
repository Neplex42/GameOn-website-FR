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
const closeBtnForm = document.querySelector('.close-modal-button');
const titleSuccess = document.querySelector('.valid-form-message');

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

  const errorStates = {
    firstName: true,
    lastName: true,
    email: true,
    birthdate: true,
    quantity: true,
    location: true,
    terms: true
  };

  let error_defined = Object.keys(errorStates).length;

  const fields = {
    firstName: form.querySelector('#first'),
    lastName: form.querySelector('#last'),
    email: form.querySelector('#email'),
    birthdate: form.querySelector('#birthdate'),
    quantity: form.querySelector('#quantity'),
    location: document.querySelectorAll('input[name="location"]'),
    terms: form.querySelector('#checkbox1')
  };

  function validateField(field, condition, errorMessage, stateKey) {
    if (condition) {
      field.style.border = "3px solid #e54858";
      field.closest('.formData').setAttribute("data-error", errorMessage);
      field.closest('.formData').setAttribute("data-error-visible", "true");
      if (!errorStates[stateKey]) {
        errorStates[stateKey] = true;
        error_defined += 1;
      }
    } else {
      field.style.border = "3px solid green";
      field.closest('.formData').removeAttribute("data-error");
      field.closest('.formData').setAttribute("data-error-visible", "false");
      if (errorStates[stateKey]) {
        errorStates[stateKey] = false;
        error_defined -= 1;
      }
    }
    enableSubmit();
  }

  fields.firstName.addEventListener("change", () => {
    validateField(fields.firstName, fields.firstName.value.length < 2, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", "firstName");
  });

  fields.lastName.addEventListener("change", () => {
    validateField(fields.lastName, fields.lastName.value.length < 2, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", "lastName");
  });

  fields.email.addEventListener("change", () => {
    validateField(fields.email, !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(fields.email.value)), "Vous devez entrer une adresse email valide.", "email");
  });

  fields.birthdate.addEventListener("change", () => {
    validateField(fields.birthdate, fields.birthdate.value === "", "Vous devez entrer votre date de naissance.", "birthdate");
  });

  fields.quantity.addEventListener("change", () => {
    validateField(fields.quantity, !(/^[0-9]+$/.test(fields.quantity.value)), "Vous devez entrer un nombre entre 0 et 99.", "quantity");
  });

  fields.location.forEach(radio => {
    radio.addEventListener("change", () => {
      let isChecked = Array.from(fields.location).some(radio => radio.checked);
      validateField(fields.location[0], !isChecked, "Vous devez choisir une ville.", "location");
    });
  });

  fields.terms.addEventListener("change", () => {
    validateField(fields.terms, !fields.terms.checked, "Vous devez vérifier que vous acceptez les termes et conditions.", "terms");
  });

  form.addEventListener("submit", (event) => {
    if (error_defined === 0) {
      event.preventDefault();
      form.style.opacity = "0";
      form.style.visibility = "hidden";
      titleSuccess.classList.remove('hide_opacity');
      closeBtnForm.classList.remove('hide_opacity');

      setTimeout(() => {
        form.submit();
        titleSuccess.classList.add('hide_opacity');
        closeBtnForm.classList.add('hide_opacity');
      }, 10000);

      closeBtn.addEventListener("click", () => form.submit());
      closeBtnForm.addEventListener("click", () => form.submit());
    }
  });

  function enableSubmit() {
    if (error_defined === 0) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "true");
    }
  }
});

