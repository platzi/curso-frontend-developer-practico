document.addEventListener('DOMContentLoaded', function(){

    const showMenuUser = document.querySelector('.navbar-email')
    const menuEmail = document.querySelector('.desktop-menu')
    const iconMenumobile = document.querySelector('.menu')
    const menuMobile = document.querySelector('.mobile-menu')
    const iconCart = document.querySelector('.navbar-shopping-cart')
    const aside = document.querySelector('aside')
    const asideAdd = document.querySelector('.product-detail--add')
    const closeButton = document.querySelector('.product-detail-close')
    const imgAddCart = document.querySelector('.product-detail--add > img')

    
    showMenuUser.addEventListener('click', onClickShowMenuUser)
    iconMenumobile.addEventListener('click', onClickShowMenuMobile)
    iconCart.addEventListener('click', onClickCartShopping)
    closeButton.addEventListener('click', onClickCloseButton)
    
    function onClickShowMenuUser(){
        const isAsideClose = aside.classList.contains('hide--element')
        const isAsideAdd = asideAdd.classList.contains('hide--element')

        if(!isAsideClose){
            aside.classList.add('hide--element')
        }

        if(!isAsideAdd){
            asideAdd.classList.add('hide--element')
        }

        menuEmail.classList.toggle('hide--element')
    }

    function onClickShowMenuMobile(){
        const isAsideAddClose = asideAdd.classList.contains('hide--element')
        const isAsideClose = aside.classList.contains('hide--element')

        if(!isAsideAddClose){
            asideAdd.classList.add('hide--element')
        }

        if(!isAsideClose){
            aside.classList.add('hide--element')
        }

        menuMobile.classList.toggle('hide--element')

        if(!menuMobile.classList.contains('hide--element')){
            aside.classList.add('hide--element')
        }
    }

    function onClickCartShopping(){
        const isDesktopClose = menuEmail.classList.contains('hide--element')
        const isAsideAddClose = asideAdd.classList.contains('hide--element')
        const isMenuMobileClose = menuMobile.classList.contains('hide--element')

        if(!isDesktopClose){
            menuEmail.classList.add('hide--element')
        }

        if(!isAsideAddClose){
            asideAdd.classList.add('hide--element')
        }

        if(!isMenuMobileClose){
            menuMobile.classList.add('hide--element')
        }
        
        if(!aside.classList.contains('hide--element')){
            menuMobile.classList.add('hide--element')
        }

        aside.classList.toggle('hide--element')
    }

    function onClickCloseButton(){
        asideAdd.classList.add('hide--element')
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
        img: 'https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    function generateProducts(arr){
        for(product of arr){
            // div container
            const divProductCard = document.createElement('div')
            divProductCard.classList.add('product-card')
            // img product
            const img = document.createElement('img')
            img.src = product.img
            img.addEventListener('click', onClickImageProduct)
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

    function onClickImageProduct(e){
        const isMenuUserClose = menuEmail.classList.contains('hide--element')
        const isAsideClose = aside.classList.contains('hide--element')

        if(!isAsideClose) aside.classList.add('hide--element')
        if(!isMenuUserClose) menuEmail.classList.add('hide--element')

        asideAdd.classList.remove('hide--element')
        imgAddCart.src = e.target.currentSrc
    }


})