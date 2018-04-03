function BankAccount(balance, name) {
  this.balance = balance;
  this.name = name;
}
BankAccount.prototype.withdrawl = function() {
  var newBalance = this.balance - parseInt($("#withdrawl").val());
  return this.balance = newBalance;
};
  BankAccount.prototype.deposit = function() {
    var newBalance = this.balance + parseInt($("#deposit").val());
    return this.balance = newBalance;
};
// BankAccount.prototype.deposit = function () {
//   return this.balance + this.deposit;
// };
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var balance = parseInt($("#initialdeposit").val());
    var name = $("#name").val();

    var newAccount = new BankAccount(balance, name);

    $("#balance h4").text(newAccount.balance);
    $("#depo").show();
    $("#wdButton").click(function() {
      if (isNaN(newAccount.withdrawl()) !== true) {
        newAccount.withdrawl();
        $("#balance h4").text(newAccount.balance);
      } else {
        alert("Enter a number....please...come on man.");
      }



    });
    $("#dpbutton").click(function() {
      newAccount.deposit();
      $("#balance h4").text(newAccount.balance);
    });
    console.log(newAccount);
  });
});
