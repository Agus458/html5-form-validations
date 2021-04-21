/* eslint-disable */
import "bootstrap";
import "./style.css";

import validator from "validator";

let form = document.getElementById("form");

form.addEventListener("submit", event => {
  // Evita el comportamiento default del form
  event.preventDefault();

  let myAlert = document.getElementById("myalert");

  // Card Validation
  let cardNumber = document.getElementById("card-number");

  if (validator.isEmpty(cardNumber.value)) {
    myAlert.style.display = "block";
    //myAlert.innerHTML = "Card Number can't be empty ";

    let li = document.createElement("li");
    let node = document.createTextNode("Card Number can't be empty");
    li.appendChild(node);

    let ul = document.getElementById("lista");
    ul.appendChild(li);

    cardNumber.classList.remove("border-success", "text-success");
    cardNumber.classList.add("border-danger", "text-danger");
  } else {
    if (!validator.isCreditCard(cardNumber.value)) {
      myAlert.style.display = "block";
      myAlert.innerHTML = "Invalid Card Number ";
      cardNumber.classList.remove("border-success", "text-success");
      cardNumber.classList.add("border-danger", "text-danger");
    } else {
      myAlert.innerHTML = "";
      myAlert.style.display = "none";
      cardNumber.classList.remove("border-danger", "text-danger");
      cardNumber.classList.add("border-success", "text-success");
      console.log("aqui");
    }
  }

  // CVC Validation
  let cvc = document.getElementById("cvc");

  if (validator.isEmpty(cvc.value)) {
    myAlert.style.display = "block";
    //myAlert.innerHTML = "CVC Number can't be empty";
    cvc.classList.remove("border-success", "text-success");
    cvc.classList.add("border-danger", "text-danger");
  } else {
    if (
      3 <= cvc.value.length &&
      cvc.value.length <= 4 &&
      validator.isNumeric(cvc.value)
    ) {
      myAlert.style.display = "none";
      //myAlert.innerHTML = "";
      cvc.classList.remove("border-danger", "text-danger");
      cvc.classList.add("border-success", "text-success");
    } else {
      myAlert.style.display = "block";
      //myAlert.innerHTML = "Invalid CVC Number";
      cvc.classList.remove("border-success", "text-success");
      cvc.classList.add("border-danger", "text-danger");
    }
  }
});
