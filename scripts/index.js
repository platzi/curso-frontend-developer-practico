const emailNavbar = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')

emailNavbar.addEventListener('click', changeVisibilityMenuEmail)

function changeVisibilityMenuEmail(){
  let classToToggle = 'inactive'
  if(menuDesktop.classList.contains(classToToggle)){
    menuDesktop.classList.remove(classToToggle)
  }else{
    menuDesktop.classList.add(classToToggle)
  }
  //Also works: menuDesktop.classList.toggle(classToToggle)
}
