const menuEmail = document.getElementById('menu-email');
const desktopContextMenu = document.getElementById('desktop-menu');

menuEmail.addEventListener('click', () => {
  desktopContextMenu.classList.toggle('inactive');
});