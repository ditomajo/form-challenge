const form = document.getElementById('form');

const firtsName = document.getElementById('Firts-name');

const lastName = document.getElementById('Last-name');

const email = document.getElementById('email');

const Password = document.getElementById('Password');

const confirmPassWord = document.getElementById('Confirm-Password');



// show error
function showError(input, message){
const formControl = input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message;
}


// show sucess
function showSuccess(input){
const formControl = input.parentElement;
formControl.className = 'form-control success';
}



// regex

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([firtsName, lastName, email, Password, confirmPassWord]);
  checkLength(firtsName, 3, 15);
    checkLength(lastName, 3, 15);
  checkLength(Password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(Password, confirmPassWord);
});
