document.addEventListener('DOMContentLoaded', function(){

    const showMenuUser = document.querySelector('.navbar-email')
    const menuEmail = document.querySelector('.desktop-menu')
    const iconMenumobile = document.querySelector('.menu')
    const menuMobile = document.querySelector('.mobile-menu')
    const iconCart = document.querySelector('.navbar-shopping-cart')
    const aside = document.querySelector('aside')
    
    showMenuUser.addEventListener('click', onClickShowMenuUser)
    iconMenumobile.addEventListener('click', onClickShowMenuMobile)
    iconCart.addEventListener('click', onClickCartShopping)
    
    function onClickShowMenuUser(){
        const isAsideClose = aside.classList.contains('hide--element')

        if(!isAsideClose){
            aside.classList.add('hide--element')
        }

        menuEmail.classList.toggle('hide--element')
    }

    function onClickShowMenuMobile(){
        menuMobile.classList.toggle('hide--element')

        if(!menuMobile.classList.contains('hide--element')){
            aside.classList.add('hide--element')
        }
    }

    function onClickCartShopping(){
        const isDesktopClose = menuEmail.classList.contains('hide--element')

        if(!isDesktopClose){
            menuEmail.classList.add('hide--element')
        }
        
        if(!aside.classList.contains('hide--element')){
            menuMobile.classList.add('hide--element')
        }

        aside.classList.toggle('hide--element')
    }

    const productList = []
    productList.push({
        name: 'Bike',
        price: 120,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    productList.push({
        name: 'Car',
        price: 200,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    productList.push({
        name: 'Skate',
        price: 100,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    function generateProducts(arr){
        for(product of arr){
            // div container
            const divProductCard = document.createElement('div')
            divProductCard.classList.add('product-card')
            // img product
            const img = document.createElement('img')
            img.src = product.img
            // div product info
            const divProductInfo = document.createElement('div')
            divProductInfo.classList.add('product-info')
            // div container price and name
            const divPriceName = document.createElement('div')
            // paragraph price
            const priceParagraph = document.createElement('p')
            priceParagraph.textContent = `$${product.price}`
            // paragraph name
            const nameParagraph = document.createElement('p')
            nameParagraph.textContent = product.name
            // figure
            const figure = document.createElement('figure')
            // image svg
            const imgSvg = document.createElement('img')
            imgSvg.src= './icons/bt_add_to_cart.svg'
    
            figure.appendChild(imgSvg)
            divPriceName.append(priceParagraph, nameParagraph)
    
            divProductInfo.append(divPriceName, figure)
    
            divProductCard.append(img, divProductInfo)
    
            document.querySelector('.cards-container').appendChild(divProductCard)
    
        }
    }

    generateProducts(productList)


})