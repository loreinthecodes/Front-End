const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");


function calculateAge(){
    const birthdayVal = inputEl.value;
    if(birthdayVal === ""  ){
        alert("Please Enter Your Birthday")
    }else{
        const age = getAge(birthdayVal)
        resultEl.innerText = `Your age is ${age} ${age>1 ? "years" : "year"} old`
    }
}
function getAge(birthdayVal){
const currentdate = new Date();
const birthdate = new Date(birthdayVal);
const month = currentdate.getMonth() - birthdate.getMonth();
let age = currentdate.getFullYear()-birthdate.getFullYear();
if(month<0 || (month === 0 && currentdate.getDate()< birthdate.getDate())){
    age--
}
return age;
}
btnEl.addEventListener("click",calculateAge)