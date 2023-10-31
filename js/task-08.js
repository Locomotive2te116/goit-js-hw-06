
const userForm = document.querySelector(".login-form");



function getValueOfEmail() {
    const inputEmail = document.querySelector('[type="email"]');
  if (inputEmail.value !== "") {
    return inputEmail.value;
  } else {
      alert('Поле має бути заповненим');
  }
  
}
function getValueOfPass() {
  const inputPass = document.querySelector('[type="password"]');
  if (inputPass.value !== "") {
    return inputPass.value;
  } else {
      alert('Поле має бути заповненим');
  }
  
}

 
  
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
  const email = getValueOfEmail();
 const pass = getValueOfPass();  
   if (email && pass) {
    console.log({ email, pass });
  }
  userForm.reset();
});