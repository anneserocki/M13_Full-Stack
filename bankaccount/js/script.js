function bankAccount(ownerName) {
    let balance = 0;
    const owner = ownerName;

    return {
      withdrawal: function(withdrawalAmount) {
        if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
          balance -= withdrawalAmount;
          return true; // Withdrawal successful
        } else {
          return false; // Withdrawal failed
        }
      },
      deposit: function(depositAmount) {
        if (depositAmount > 0) {
          balance += depositAmount;
          return true; // Deposit successful
        } else {
          return false; // Deposit failed
        }
      },
      getBalance: function() {
        return balance;
      },
      getOwnerName: function() {
        return owner;
      }
    };
  }

  // 
  let account;

  document.getElementById("nameBtn").addEventListener("click", function() {
    const name = prompt("Enter your name:");
    account = bankAccount(name);
    updateAccountDetails();
  });

  document.getElementById("depositBtn").addEventListener("click", function() {
    const depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
    const success = account.deposit(depositAmount);
    if (success) {
      updateAccountDetails();
    } else {
      alert("Invalid deposit amount.");
    }
  });

  document.getElementById("withdrawalBtn").addEventListener("click", function() {
    const withdrawalAmount = parseFloat(prompt("Enter the amount to withdraw:"));
    const success = account.withdrawal(withdrawalAmount);
    if (success) {
      updateAccountDetails();
    } else {
      alert("Invalid withdrawal amount or insufficient balance");
    }
  });

  function updateAccountDetails() {
    const accountDetails = document.getElementById("accountDetails");
    accountDetails.innerHTML = `
      <p>Owner: ${account.getOwnerName()}</p>
      <p>Balance: $${account.getBalance()}</p>
    `;
  }