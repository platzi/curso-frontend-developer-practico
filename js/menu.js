const desktopMenu = document.getElementById("desktopMenu");
const navbarRight = document.getElementById("navbarRight");
const menuBtn     = document.getElementById("menuBtn");
const mobileMenu  = document.getElementById("mobileMenu");

navbarRight.addEventListener("click",()=>{
    desktopMenu.classList.toggle("display-none");

})

menuBtn.addEventListener("click",()=>{
    
    mobileMenu.classList.toggle("menu-animation");
    mobileMenu.classList.toggle("menu-animation-reverse");

    console.log(mobileMenu.classList)

    const state = mobileMenu.classList.contains('display-none');
    
    if(!state)
    {
        setTimeout(()=>{
            mobileMenu.classList.toggle("display-none")
        },300);
        console.log("Si")
    }
    else
    {
        console.log("No")
        mobileMenu.classList.toggle("display-none")
    }
})