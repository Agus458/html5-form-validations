/* eslint-disable */
import "bootstrap";
import "./style.css";

import validator from "validator";

let form = document.getElementById("form");

form.addEventListener("submit", event => {
  // Evita el comportamiento default del form
  event.preventDefault();

  let myAlert = document.getElementById("myalert");

  //Lista de errores
  let ul = document.getElementById("lista");

  // Card Validation
  let cardNumber = document.getElementById("card-number");
  let cardValid = false;

  if (validator.isEmpty(cardNumber.value)) {
    // remueve el li anterior
    let aux = document.getElementById("card-alert");
    if (aux != null) {
      aux.remove();
    }

    // Creacion del li
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "Card Number can't be empty";
    li.setAttribute("id", "card-alert");

    // Agregado a la lista
    ul.appendChild(li);

    cardValid = false;

    cardNumber.classList.remove("border-success", "text-success");
    cardNumber.classList.add("border-danger", "text-danger");
  } else {
    if (!validator.isCreditCard(cardNumber.value)) {
      // remueve el li anterior
      let aux = document.getElementById("card-alert");
      if (aux != null) {
        aux.remove();
      }

      // Creacion del li
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = "Invalid Card Number";
      li.setAttribute("id", "card-alert");

      // Agregado a la lista
      ul.appendChild(li);

      cardValid = false;

      cardNumber.classList.remove("border-success", "text-success");
      cardNumber.classList.add("border-danger", "text-danger");
    } else {
      // remueve el li anterior
      let aux = document.getElementById("card-alert");
      if (aux != null) {
        aux.remove();
      }

      cardValid = true;

      cardNumber.classList.remove("border-danger", "text-danger");
      cardNumber.classList.add("border-success", "text-success");
    }
  }

  // CVC Validation
  let cvc = document.getElementById("cvc");
  let cvcValid = false;

  if (validator.isEmpty(cvc.value)) {
    // remueve el li anterior
    let aux = document.getElementById("cvc-alert");
    if (aux != null) {
      aux.remove();
    }

    // Creacion del li
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "CVC Number can't be empty";
    li.setAttribute("id", "cvc-alert");

    // Agregado a la lista
    ul.appendChild(li);

    cvcValid = false;

    cvc.classList.remove("border-success", "text-success");
    cvc.classList.add("border-danger", "text-danger");
  } else {
    if (
      3 <= cvc.value.length &&
      cvc.value.length <= 4 &&
      validator.isNumeric(cvc.value)
    ) {
      // remueve el li anterior
      let aux = document.getElementById("cvc-alert");
      if (aux != null) {
        aux.remove();
      }

      cvcValid = true;

      cvc.classList.remove("border-danger", "text-danger");
      cvc.classList.add("border-success", "text-success");
    } else {
      // remueve el li anterior
      let aux = document.getElementById("cvc-alert");
      if (aux != null) {
        aux.remove();
      }

      // Creacion del li
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = "Invalid CVC Number";
      li.setAttribute("id", "cvc-alert");

      // Agregado a la lista
      ul.appendChild(li);

      cvcValid = false;

      cvc.classList.remove("border-success", "text-success");
      cvc.classList.add("border-danger", "text-danger");
    }
  }

  // Amount validation
  let amount = document.getElementById("amount");
  let amountValid = false;

  // Si esta vacio
  if (validator.isEmpty(amount.value)) {
    // remueve el li anterior
    let aux = document.getElementById("amount-alert");
    if (aux != null) {
      aux.remove();
    }

    // Creacion del li
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "Amount Number can't be empty";
    li.setAttribute("id", "amount-alert");

    // Agregado a la lista
    ul.appendChild(li);

    amountValid = false;

    amount.classList.remove("border-success", "text-success");
    amount.classList.add("border-danger", "text-danger");
  } else {
    // Si es un monto correcto
    if (validator.isDecimal(amount.value)) {
      // remueve el li anterior
      let aux = document.getElementById("amount-alert");
      if (aux != null) {
        aux.remove();
      }

      amountValid = true;

      amount.classList.remove("border-danger", "text-danger");
      amount.classList.add("border-success", "text-success");
    } else {
      // Si no corresponde el tipo de dato
      // remueve el li anterior
      let aux = document.getElementById("amount-alert");
      if (aux != null) {
        aux.remove();
      }

      // Creacion del li
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = "Invalid Amount Number";
      li.setAttribute("id", "amount-alert");

      // Agregado a la lista
      ul.appendChild(li);

      amountValid = false;

      amount.classList.remove("border-success", "text-success");
      amount.classList.add("border-danger", "text-danger");
    }
  }

  // Name validation
  let name = document.getElementById("name");
  let nameValid = false;

  // Si esta vacio
  if (validator.isEmpty(name.value)) {
    // remueve el li anterior
    let aux = document.getElementById("name-alert");
    if (aux != null) {
      aux.remove();
    }

    // Creacion del li
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "First Name can't be empty";
    li.setAttribute("id", "name-alert");

    // Agregado a la lista
    ul.appendChild(li);

    nameValid = false;

    name.classList.remove("border-success", "text-success");
    name.classList.add("border-danger", "text-danger");
  } else {
    // Si es un monto correcto
    if (validator.isAlpha(name.value)) {
      // remueve el li anterior
      let aux = document.getElementById("name-alert");
      if (aux != null) {
        aux.remove();
      }

      nameValid = true;

      name.classList.remove("border-danger", "text-danger");
      name.classList.add("border-success", "text-success");
    } else {
      // Si no corresponde el tipo de dato
      // remueve el li anterior
      let aux = document.getElementById("name-alert");
      if (aux != null) {
        aux.remove();
      }

      // Creacion del li
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = "Invalid First Name";
      li.setAttribute("id", "name-alert");

      // Agregado a la lista
      ul.appendChild(li);

      nameValid = false;

      name.classList.remove("border-success", "text-success");
      name.classList.add("border-danger", "text-danger");
    }
  }

  // Last Name validation
  let lastName = document.getElementById("last-name");
  let lastNameValid = false;

  // Si esta vacio
  if (validator.isEmpty(lastName.value)) {
    // remueve el li anterior
    let aux = document.getElementById("last-name-alert");
    if (aux != null) {
      aux.remove();
    }

    // Creacion del li
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "Last Name can't be empty";
    li.setAttribute("id", "last-name-alert");

    // Agregado a la lista
    ul.appendChild(li);

    lastNameValid = false;

    lastName.classList.remove("border-success", "text-success");
    lastName.classList.add("border-danger", "text-danger");
  } else {
    // Si es un monto correcto
    if (validator.isAlpha(lastName.value)) {
      // remueve el li anterior
      let aux = document.getElementById("last-name-alert");
      if (aux != null) {
        aux.remove();
      }

      lastNameValid = true;

      lastName.classList.remove("border-danger", "text-danger");
      lastName.classList.add("border-success", "text-success");
    } else {
      // Si no corresponde el tipo de dato
      // remueve el li anterior
      let aux = document.getElementById("last-name-alert");
      if (aux != null) {
        aux.remove();
      }

      // Creacion del li
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = "Invalid Last Name";
      li.setAttribute("id", "last-name-alert");

      // Agregado a la lista
      ul.appendChild(li);

      lastNameValid = false;

      lastName.classList.remove("border-success", "text-success");
      lastName.classList.add("border-danger", "text-danger");
    }
  }

  // City validation
  let city = document.getElementById("city");
  let cityValid = false;

  // Si esta vacio
  if (validator.isEmpty(city.value)) {
    // remueve el li anterior
    let aux = document.getElementById("city-alert");
    if (aux != null) {
      aux.remove();
    }

    // Creacion del li
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "City can't be empty";
    li.setAttribute("id", "city-alert");

    // Agregado a la lista
    ul.appendChild(li);

    cityValid = false;

    city.classList.remove("border-success", "text-success");
    city.classList.add("border-danger", "text-danger");
  } else {
    // Si es un dato correcto
    if (validator.isAlpha(city.value)) {
      // remueve el li anterior
      let aux = document.getElementById("city-alert");
      if (aux != null) {
        aux.remove();
      }

      cityValid = true;

      city.classList.remove("border-danger", "text-danger");
      city.classList.add("border-success", "text-success");
    } else {
      // Si no corresponde el tipo de dato
      // remueve el li anterior
      let aux = document.getElementById("city-alert");
      if (aux != null) {
        aux.remove();
      }

      // Creacion del li
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = "Invalid City";
      li.setAttribute("id", "city-alert");

      // Agregado a la lista
      ul.appendChild(li);

      cityValid = false;

      city.classList.remove("border-success", "text-success");
      city.classList.add("border-danger", "text-danger");
    }
  }

  // State validation
  let state = document.getElementById("state");
  let stateValid = false;

  // Si esta vacio
  if (state.value == "null") {
    // remueve el li anterior
    let aux = document.getElementById("state-alert");
    if (aux != null) {
      aux.remove();
    }

    // Creacion del li
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "State can't be empty";
    li.setAttribute("id", "state-alert");

    // Agregado a la lista
    ul.appendChild(li);

    stateValid = false;

    state.classList.remove("border-success", "text-success");
    state.classList.add("border-danger", "text-danger");
  } else {
    // Si es un dato correcto
    // remueve el li anterior
    let aux = document.getElementById("state-alert");
    if (aux != null) {
      aux.remove();
    }

    stateValid = true;

    state.classList.remove("border-danger", "text-danger");
    state.classList.add("border-success", "text-success");
  }

  // PostalCode validation
  let postalCode = document.getElementById("postal-code");
  let postalCodeValid = false;

  // Si esta vacio
  if (validator.isEmpty(postalCode.value)) {
    // remueve el li anterior
    let aux = document.getElementById("postalCode-alert");
    if (aux != null) {
      aux.remove();
    }

    // Creacion del li
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "Postal Code can't be empty";
    li.setAttribute("id", "postalCode-alert");

    // Agregado a la lista
    ul.appendChild(li);

    postalCodeValid = false;

    postalCode.classList.remove("border-success", "text-success");
    postalCode.classList.add("border-danger", "text-danger");
  } else {
    // Si es un dato correcto
    // remueve el li anterior
    let aux = document.getElementById("postalCode-alert");
    if (aux != null) {
      aux.remove();
    }

    postalCodeValid = true;

    postalCode.classList.remove("border-danger", "text-danger");
    postalCode.classList.add("border-success", "text-success");
  }

  // Si todos los datos son correctoss oculta la alerta
  if (
    cardValid &&
    cvcValid &&
    amountValid &&
    nameValid &&
    lastNameValid &&
    cityValid &&
    stateValid &&
    postalCodeValid
  ) {
    myAlert.style.display = "none";
  } else {
    myAlert.style.display = "block";
  }
});
