const inputs = document.querySelectorAll(".signin-form form input:not([type='submit'])")
const errorElement = document.getElementsByClassName("error-msg")
const submitElement = document.querySelector(".signin-form form input:last-of-type")
var validInput = 0;
function subValidation(event){
  inputs.forEach((item,id) => {

    //reset error msgs
    item.classList.remove("error-img");
    errorElement[id].style.display = "none"
    inputs[2].placeholder = "Email Address"
    inputs[2].style.setProperty("--c1","#565656")

    if(item.validity.valid){
      validInput++
      }
    //Email Validation
    if(!inputs[2].validity.valid){
      inputs[2].classList.add("error-img");
      errorElement[2].style.display = "block"
      inputs[2].style.borderColor = "red"
      inputs[2].placeholder = "email@example.com"
      inputs[2].value = ""
      inputs[2].style.setProperty("--c1","hsl(0, 100%, 74%)")
      event.preventDefault()
     
     }
     else{
      inputs[2].style.borderColor = "hsl(246, 25%, 77%)"
     }

    //Validation Text-Form
    if(item.type != "email" && item.value == ""){
      item.classList.add("error-img")
      errorElement[id].style.display = "block"
      event.preventDefault()
      item.style.borderColor = "red"
    }
    else{
      item.style.borderColor = "hsl(246, 25%, 77%)"
      }

    if(validInput === 4){
      alert("The code has been sent to your email!")
    }})
    
    validInput=0
   
  
}



submitElement.addEventListener("click",subValidation)