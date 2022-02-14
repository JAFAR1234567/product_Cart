const phonePlus = document.querySelector("#phone_plus");
const phoneMinus = document.querySelector("#phone_minus");
const phoneNumber = document.querySelector("#phone_number");
const phonePrice = document.querySelector("#phone_price");

const casePlus = document.querySelector("#case_plus");
const caseMinus = document.querySelector("#case_minus");
const caseNumber = document.querySelector("#case_number");
const casePrice = document.querySelector("#case_price");

const subTotal = document.querySelector("#sub_total");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");

//Parse product number value
function getProductnumber(product, isIncrease) {
  const ProductNumber = parseFloat(product.value);
  if (isIncrease) {
    if (product.value < 5) {
      return (product.value = ProductNumber + 1);
    }
    else{
      return product.value = product.value;
    }
  } else if (product.value > 1) {
    return (product.value = ProductNumber - 1);
  }
}

function getInputValue(input) {
  const inputValue = parseFloat(input.value);
  return inputValue;
}

function updatePrice(countedPoduct, isPhone) {
  if (isPhone && countedPoduct >= 1) {
    phonePrice.innerText = countedPoduct * 10;
  } else if (countedPoduct >= 1) {
    casePrice.innerText = countedPoduct * 5;
  }
  updateTotal();
}

function updateTotal() {
  const PhoneTotal = getInputValue(phoneNumber) * 10;
  const caseTotal = getInputValue(caseNumber) * 5;
  const totalAmount = PhoneTotal + caseTotal;
  subTotal.innerText = totalAmount;
  tax.innerText = parseFloat(totalAmount) * 0.1;
  total.innerText = parseFloat(totalAmount) + parseFloat(tax.innerText);
}

//phone plus handler
phonePlus.addEventListener("click", () => {
  const phoneCountplus = getProductnumber(phoneNumber, true);
  updatePrice(phoneCountplus, true);
});

//phone minus handler
phoneMinus.addEventListener("click", () => {
  const phoneCountminus = getProductnumber(phoneNumber, false);
  updatePrice(phoneCountminus, true);
});

//case plus handler
casePlus.addEventListener("click", () => {
  const caseCountplus = getProductnumber(caseNumber, true);
  updatePrice(caseCountplus, false);
});

//Case minus handler
caseMinus.addEventListener("click", () => {
  const caseCountminus = getProductnumber(caseNumber, false);
  updatePrice(caseCountminus, false);
});
