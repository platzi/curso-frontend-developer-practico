const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuBar = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoItem = document.querySelector('.navbar-shopping-cart');
const DivproductDetail = document.querySelector('.product-detail');

    menuEmail.addEventListener('click', toggleDesktopMenu);

        function toggleDesktopMenu(){

            const isProductDetailClosed = DivproductDetail.classList.contains('inactive');

            if (!isProductDetailClosed){
                DivproductDetail.classList.add('inactive');
            }
            
            desktopMenu.classList.toggle('inactive');
        }

    
    menuBar.addEventListener('click', toggleMobileMenu);
    
        function toggleMobileMenu(){

            const isProductDetailClosed = DivproductDetail.classList.contains('inactive');

                if (!isProductDetailClosed){
                    DivproductDetail.classList.add('inactive');
                }

                mobileMenu.classList.toggle('inactive');
        }



    menuCarritoItem.addEventListener('click', toggleProductDetail);
    
        function toggleProductDetail(){

            const ismobileMenuClosed = mobileMenu.classList.contains('inactive');

                if (!ismobileMenuClosed){
                    mobileMenu.classList.add('inactive');
                }

                DivproductDetail.classList.toggle('inactive');
           
        }