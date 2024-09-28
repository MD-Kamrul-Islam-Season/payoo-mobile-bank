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

    //step-3: validate Pin

    //wrong way to validate pin number

    if (pinNumberInput === "1234") {
      console.log("Money added to your account");

      //step-4:get the current balance

      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      //step-5: add money with balance

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(addMoneyNumber, balanceNumber);

      //step-6:update the balance in the UI

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
