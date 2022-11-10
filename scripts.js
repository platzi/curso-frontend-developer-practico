const user_btn = document.querySelector('.navbar-email')
const user_options = document.querySelector('.desktop-menu')

user_btn.addEventListener('click', ()=>{
    user_options.classList.toggle('inactive')
})