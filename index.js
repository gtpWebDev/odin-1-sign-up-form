
// Only code required is to add event listeners to ensure that the two provided passwords match



/*
  This code provides client-side visual guidance to highlight when the two passwords don't match.
  This does not currently insist on the passwords matching on submit, which could be done either
  to a degree on the client-side, or more importantly on the server side.
*/


let firstPasswordInput = document.querySelector("#password");
let secondPasswordInput = document.querySelector("#confirm-password")
let passwordValidationText = document.querySelector("#password-validation-text")

firstPasswordInput.addEventListener("input", () => {
  passwordValidation(firstPasswordInput.value,secondPasswordInput.value)})

secondPasswordInput.addEventListener("input", () => {
  passwordValidation(firstPasswordInput.value,secondPasswordInput.value)
})


function passwordValidation(firstPassword,secondPassword) {

  let validationText
  let validationTextColor

  if (firstPassword === secondPassword) {
    validationText = "Passwords match, good job!"
    validationTextColor = "rgb(32, 98, 32)"
  } else if (firstPassword !== secondPassword) {
    validationText = "* Passwords do not match"
    validationTextColor = "rgb(199, 52, 52)"
  }

  passwordValidationText.textContent = validationText
  passwordValidationText.style.color = validationTextColor

}
