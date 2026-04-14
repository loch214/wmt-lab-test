const erorMsg = document.getElementById('errMsg');
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

function loginError() {
    if(!email.value || !password.value){
        erorMsg.innerHTML = 'Please fill all fields.'
    }
}

loginForm.addEventListener(onsubmit, function(event){

    event.preventDefault();

    loginError();
});




