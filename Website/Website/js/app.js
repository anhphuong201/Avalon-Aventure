var nameError = document.getElementById("nameError");
var emailError = document.getElementById('emailError');
var phoneError = document.getElementById('phoneError');
var questionError = document.getElementById('questionError');
var submitError = document.getElementById('submitError');

//Validate name
function validateName(){
  var name = document.getElementById('name').value;
  if (name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]+$/)){
    nameError.innerHTML = 'Name should be in letters';
    return false;
  }
  nameError.innerHTML = '';
  return true;
}

//Validate email
function validateEmail(){
  var email = document.getElementById('email').value;
  if (email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    emailError.innerHTML = 'Invalid email';
    return false;
  }
  emailError.innerHTML = '';
  return true;
}

//Validate Phone
function validatePhone(){
  var phone = document.getElementById('phone').value;
  if (!phone.match(/^[0-9]+$/)){
    phoneError.innerHTML = 'Only digits please';
    return false;
  }
  phoneError.innerHTML = '';
  return true;
}

// Validate Question
function validateQuestion(){
  var question = document.getElementById('question').value;
  if (question.length == 0){
    questionError.innerHTML = 'Question is require';
    return false
  }
  questionError.innerHTML = '';
  return true;
}

// Validate form before submitting
function validateForm(){
  if(!validateName() || !validateEmail() || !validatePhone() || !validateQuestion() ){
    submitError.innerHTML = "Please fix error to submit";
    return false
  }
}