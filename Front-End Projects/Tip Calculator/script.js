const bill = document.getElementById("bill");
const percentage = document.getElementById("percentage");
const btn = document.getElementById("btn");
const total = document.getElementById("total");

function calculateTipp(){
    const billVal = bill.value*1
    const percentageVal = percentage.value*1
    
    const totalVal = billVal + (billVal*percentageVal/100)
    
    total.innerText = totalVal.toFixed(2)
}
btn.addEventListener("click",calculateTipp)