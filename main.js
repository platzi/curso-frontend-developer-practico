document.addEventListener('DOMContentLoaded', function(){

    const showMenuUser = document.querySelector('.navbar-email')
    const menuEmail = document.querySelector('.desktop-menu')

    
    showMenuUser.addEventListener('click', onClickShowMenuUser)
    
    function onClickShowMenuUser(){
        menuEmail.classList.toggle('hide--element')
    }
})