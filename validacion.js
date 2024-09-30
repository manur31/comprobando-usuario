const user = document.getElementById("user");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const pass_confirm = document.getElementById("pass_confirm");
const inputs = document.querySelectorAll('.form__input');
const warning__user_active = document.querySelector(".warning__user_active");

inputs.forEach((input) =>{
    input.addEventListener('keyup', () =>{
    });
});

form.addEventListener('submit', (e) =>{
    e.prevente.Default();

    let warnings = "";
    let entrar = false;
    let ExpRegUser = /^[a-z0-9_-]{3,16}$/;
    let ExpRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let ExpRegPass = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

    if(ExpRegUser.test(user.value)){
        warning__user_ative.style.display = "Block"
        entrar = true
    };

    if(!ExpRegEmail.test(email.value)){
        warnings += 'This email is not valid <br>';
        entrar = true
    }
    if(!ExpRegUser.test(user.value)){
        warnings += 'This password is not valid <br>';
        entrar = true
    }

    if(pass_confirm !== pass){
        warnings += 'Passwords do not match <br>';
        entrar = true
    }
})

