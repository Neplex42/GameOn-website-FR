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

  const firstName = form.querySelector('#first');
  const lastName = form.querySelector('#last');
  const email = form.querySelector('#email');
  const birthdate = form.querySelector('#birthdate');
  const quantity = form.querySelector('#quantity');
  const radioButtons = document.querySelectorAll('input[name="location"]');
  const location = document.querySelectorAll(".formData")[5].querySelectorAll("input[type='radio']");
  const locationChecked = [...location].filter((r) => r.checked === true);
  const terms = form.querySelector('#checkbox1');


  firstName.addEventListener("change", () => {
    if (firstName.value.length < 2) {
      firstName.style.border = "3px solid #e54858";
      firstName.closest('.formData').setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      firstName.closest('.formData').setAttribute("data-error-visible", "true");
      submitButton.setAttribute("disabled", "true");
      if (errorStates.firstName === false) {
        errorStates.firstName = true;
        if (errorStates.firstName) {
          error_defined += 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    } else {
      firstName.style.border = "3px solid green";
      console.log('ouifhzieo')
      firstName.closest('.formData').setAttribute("data-error-visible", "false");
      firstName.closest('.formData').removeAttribute("data-error");
      if (errorStates.firstName) {
        errorStates.firstName = false;
        if (errorStates.firstName === false) {
          error_defined -= 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    }
  });

  lastName.addEventListener("change", () => {
    if (lastName.value.length < 2) {
      lastName.style.border = "3px solid #e54858";
      lastName.closest('.formData').setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      lastName.closest('.formData').setAttribute("data-error-visible", "true");
      submitButton.setAttribute("disabled", "true");
      if (errorStates.lastName === false) {
        errorStates.lastName = true;
        if (errorStates.lastName) {
          error_defined += 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    } else {
      lastName.style.border = "3px solid green";
      console.log('ouifhzieo')
      lastName.closest('.formData').setAttribute("data-error-visible", "false");
      lastName.closest('.formData').removeAttribute("data-error");
      if (errorStates.lastName) {
        errorStates.lastName = false;
        if (errorStates.lastName === false) {
          error_defined -= 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    }
  });

  email.addEventListener("change", () => {
    if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value))) {
      email.style.border = "3px solid #e54858";
      email.closest('.formData').setAttribute("data-error", "Vous devez entrer une adresse email valide.");
      email.closest('.formData').setAttribute("data-error-visible", "true");
      submitButton.setAttribute("disabled", "true");
      if (errorStates.email === false) {
        errorStates.email = true;
        if (errorStates.email) {
          error_defined += 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    } else {
      email.style.border = "3px solid green";
      console.log('ouifhzieo')
      email.closest('.formData').setAttribute("data-error-visible", "false");
      email.closest('.formData').removeAttribute("data-error");
      if (errorStates.email) {
        errorStates.email = false;
        if (errorStates.email === false) {
          error_defined -= 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    }
  });

  birthdate.addEventListener("change", () => {
    if (birthdate.value === "") {
      birthdate.style.border = "3px solid #e54858";
      birthdate.closest('.formData').setAttribute("data-error", "Vous devez entrer votre date de naissance.");
      birthdate.closest('.formData').setAttribute("data-error-visible", "true");
      submitButton.setAttribute("disabled", "true");
      if (errorStates.birthdate === false) {
        errorStates.birthdate = true;
        if (errorStates.birthdate) {
          error_defined += 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    } else {
      birthdate.style.border = "3px solid green";
      console.log('ouifhzieo')
      birthdate.closest('.formData').setAttribute("data-error-visible", "false");
      birthdate.closest('.formData').removeAttribute("data-error");
      if (errorStates.birthdate) {
        errorStates.birthdate = false;
        if (errorStates.birthdate === false) {
          error_defined -= 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    }
  });

  quantity.addEventListener("change", () => {
    if (!(/^[0-9]+$/.test(quantity.value))) {
      quantity.style.border = "3px solid #e54858";
      quantity.closest('.formData').setAttribute("data-error", "Vous devez entrer un nombre entre 0 et 99.");
      quantity.closest('.formData').setAttribute("data-error-visible", "true");
      submitButton.setAttribute("disabled", "true");
      if (errorStates.quantity === false) {
        errorStates.quantity = true;
        if (errorStates.quantity) {
          error_defined += 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    } else {
      quantity.style.border = "3px solid green";
      console.log('ouifhzieo')
      quantity.closest('.formData').setAttribute("data-error-visible", "false");
      quantity.closest('.formData').removeAttribute("data-error");
      if (errorStates.quantity) {
        errorStates.quantity = false;
        if (errorStates.quantity === false) {
          error_defined -= 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    }
  });

  radioButtons.forEach(radio => {
    radio.addEventListener("change", () => {
      let isChecked = Array.from(radioButtons).some(radio => radio.checked);

      if (isChecked) {

        if (errorStates.location) {
          error_defined -= 1;
          errorStates.location = false;
          console.log(error_defined);
        }
        console.log("Radio selection changed, error_defined:", error_defined);
      } else {
        console.log("No radio selected, error_defined:", error_defined);
      }
      enableSubmit();
    });
  });

  terms.addEventListener("change", () => {
    if (!terms.checked) {
      terms.style.border = "3px solid #e54858";
      terms.closest('.formData').setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
      terms.closest('.formData').setAttribute("data-error-visible", "true");
      submitButton.setAttribute("disabled", "true");
      if (errorStates.terms === false) {
        errorStates.terms = true;
        if (errorStates.terms) {
          error_defined += 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    } else {
      terms.style.border = "3px solid green";
      console.log('ouifhzieo')
      terms.closest('.formData').setAttribute("data-error-visible", "false");
      terms.closest('.formData').removeAttribute("data-error");
      if (errorStates.terms) {
        errorStates.terms = false;
        if (errorStates.terms === false) {
          error_defined -= 1;
          console.log(error_defined)
        }
      }
      enableSubmit();
    }
  });


  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (error_defined === 0) {
      console.log("submit");
      form.submit();
      //if (modal_congratulations.style.display === "none") {modal_congratulations.style.display = "block";}
    }
  });

  function enableSubmit() {
    if (error_defined === 0) {
      submitButton.removeAttribute("disabled");
    }
  }
});

