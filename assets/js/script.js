let loanAmount=document.getElementById("loan");
let interestEl=document.getElementById("interest");
let monthsToPay=document.getElementById("monthstopay");
let monthEl;
let totalInterest;
function check(){
    let loan=loanAmount.value;
    let interest=interestEl.value;
    let monthPay=monthsToPay.value;
    totalInterest=(loan*interest*monthPay)/100;
    console.log(totalInterest);
    monthEl=totalInterest + parseFloat(loan);
    console.log(monthEl);
    document.getElementById("month").innerHTML=monthEl;


}
