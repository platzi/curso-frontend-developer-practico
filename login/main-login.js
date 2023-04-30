const loginButtom = document.querySelector(".primary-button login-button");
const signButtom = document.querySelector(".secondary-button signup-button");


signButtom.addEventListener('click', showSignUpPage)


function showSignUpPage(){
    console.log(loginButtom);
    window.location.href = "../signin/index-signin.html"
}
