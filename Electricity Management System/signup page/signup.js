document.getElementById("SignupForm").addEventListener("submit", function(event) {
event.preventDefault();
const firstName = document.getElementById("FirstName").querySelector("input");
    if (!firstName.value.trim()) {
      firstName.classList.add("is-invalid");
      return;
    } 
    
    else {
      firstName.classList.remove("is-invalid");
    }
    
const phoneNumber = document.getElementById("PhoneNumber").querySelector("input");
const phoneValue = phoneNumber.value.trim();
const phonePattern = /^[0-9]{10}$/;

    if (!phoneValue) {
      showError(phoneNumber, "Phone number is required.");
      return;
    } else if (!phonePattern.test(phoneValue)) {
      showError(phoneNumber, "Phone number should be 10 digits and contain only numbers.");
      return;
    }
    
    else {
      hideError(phoneNumber);
    }
  
    const consumerNumber = document.getElementById("CostumerNumber").querySelector("input");
    const consumerPattern = /^[0-9]{11}$/;
    if (!consumerNumber.value.trim()) {
      showError(consumerNumber, "Consumer number is required.");
      return;
    } else if (!consumerPattern.test(consumerNumber.value.trim())) {
      showError(consumerNumber, "Please enter a valid consumer number starting with the regional code followed by section, distribution, and service number.");
      return;
    }
    
    else {
      hideError(consumerNumber);
    }
    event.target.submit();
});
  
function showError(inputElement, errorMessage) {
   inputElement.classList.add("is-invalid");
   let errorElement = inputElement.parentNode.querySelector(".invalid-feedback");
   
   if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.classList.add("invalid-feedback");
    inputElement.parentNode.appendChild(errorElement);
}
  errorElement.textContent = errorMessage;
}  
  
function hideError(inputElement) {
   inputElement.classList.remove("is-invalid");
   const errorElement = inputElement.parentNode.querySelector(".invalid-feedback");
   if (errorElement) {
    inputElement.parentNode.removeChild(errorElement);
   }
}
  