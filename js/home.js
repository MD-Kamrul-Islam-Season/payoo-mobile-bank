//Add money to the account
//step-1: add an eventhandler to add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    //prevent page reload after form submit
    event.preventDefault();
    //step-2: get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);
  });
