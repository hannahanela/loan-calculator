// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");


/** Retrieve form values. Returns object: {amount, years, rate}. */

function getFormValues() {
}


/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
}


/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
}


/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  let amountInput = document.getElementById("loan-amount");
  amountInput.value = 10000;

  let yearsInput = document.getElementById("loan-years");
  yearsInput.value = 10;

  let rateInput = document.getElementById("loan-rate");
  rateInput.value = 4.5;
}


/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}
