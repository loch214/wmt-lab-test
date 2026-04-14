const errorMsg = document.getElementById('errMsg');
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

function loginError() {
    if(!email.value || !password.value){
        errorMsg.innerHTML = 'Please fill all fields.'
        errorMsg.style.color = 'red'
    }else {
        errorMsg.innerHTML = 'All fields are filled.'
        errorMsg.style.color = 'green'
    }
}

loginForm.addEventListener('submit', function(event){

    event.preventDefault();

    loginError();
});




