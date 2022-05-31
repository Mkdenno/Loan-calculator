let loanAmount=document.getElementById("loan");
let interestEl=document.getElementById("interest");
let monthsToPay=document.getElementById("monthstopay");
let monthEl;
let eachMonth;
let totalInterest;
let totalLoan;
let year;
let months;
let days;
function check(){
    let loan=loanAmount.value;
    let interest=interestEl.value;
    let monthPay=monthsToPay.value;
    totalInterest=(loan*interest*monthPay)/100;
    console.log(totalInterest);
    monthEl=totalInterest + parseFloat(loan);
    eachMonth=monthEl/12;
    console.log(monthEl);
    document.getElementById("eachmonth").innerHTML=eachMonth;
    document.getElementById("month").innerHTML=monthEl;


}
