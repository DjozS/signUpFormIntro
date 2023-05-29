const claimBtn = document.getElementById("claim")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const nameP = document.getElementById("nameP")
const surnameP = document.getElementById("surnameP")
const mailP = document.getElementById("mailP")
const passP = document.getElementById("passP")
const alert1 = document.getElementById("alert1")
const alert2 = document.getElementById("alert2")
const alert3 = document.getElementById("alert3")
const alert4 = document.getElementById("alert4")
claimBtn.addEventListener("click", function(){
   if(input1.value == ""){
    nameP.textContent = "First Name cannot be empty";
    alert1.style.display = "flex";
    input1.style.borderColor = "hsl(0, 74%, 70%)";
    input1.placeholder = ""
   }
   if(input2.value == ""){
    surnameP.textContent = "Last Name cannot be empty";
    alert2.style.display = "flex";
    input2.style.borderColor = "hsl(0, 74%, 70%)";
    input2.placeholder = ""
   }
   if(input3.value == ""){
    mailP.textContent = "Looks like this is not an email";
    alert3.style.display = "flex";
    input3.style.borderColor = "hsl(0, 74%, 70%)";
    input3.placeholder = ""
   }
   if(input4.value == ""){
    passP.textContent = "Password cannot be empty";
    alert4.style.display = "flex";
    input4.style.borderColor = "hsl(0, 74%, 70%)";
    input4.placeholder = ""
   }
})
