    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const menuIcon = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const carritoIcon = document.querySelector('.navbar-shopping-cart');
    const aside = document.querySelector('.product-detail');

    menuEmail.addEventListener('click', ToggleDesktopMenu);
    menuIcon.addEventListener('click', ToggleMobileMenu);
    carritoIcon.addEventListener('click', ToggleAside);

    function ToggleDesktopMenu() {
        const isAsideClosed = aside.classList.contains('inactive');

        if(!isAsideClosed){
            aside.classList.add('inactive');
        }
        desktopMenu.classList.toggle('inactive');
    }

    function ToggleMobileMenu(){
        const isAsideClosed = aside.classList.contains('inactive');

        if(!isAsideClosed){
            aside.classList.add('inactive');
        }
        mobileMenu.classList.toggle('inactive');
    }

    function ToggleAside(){
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

        if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
        }
        
        aside.classList.toggle('inactive');

    }