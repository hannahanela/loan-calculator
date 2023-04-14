"use strict";
// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");
const amountInput = document.getElementById("loan-amount");
const yearsInput = document.getElementById("loan-years");
const rateInput = document.getElementById("loan-rate");
const paymentSpan = document.getElementById("calc-monthly-payment");


/** Retrieve form values. Returns object: {amount, years, rate}. */

function getFormValues() {
  let amount = amountInput.value;
  let years = yearsInput.value;
  let rate = rateInput.value;

  return { amount, years, rate };
}


/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
  if (amount < 0) return 'Please enter a valid loan amount.'
  if (rate <= 0) return 'Please enter a valid rate.'

  let numPayments = (years % 2 === 0) ? years * 12 : false;
  if (!numPayments) return 'Please enter a valid number of years.'

  let interest = (rate / 100) / 12;
  let monthlyPayment = (amount * interest) / (1 - (1 + interest)**(-Math.abs(numPayments)));

  return monthlyPayment;
}


/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  let { amount, years, rate } = getFormValues();
  let monthlyPayment = calcMonthlyPayment(amount, years, rate).toFixed(2);
  paymentSpan.innerText = monthlyPayment;
}


/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  amountInput.value = 10000;
  yearsInput.value = 10;
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
