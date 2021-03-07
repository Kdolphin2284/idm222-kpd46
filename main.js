const burgerObj = document.getElementById("burger")
const menuObj = document.getElementById("menu")
const xButtonObj = document.getElementById("xButton")
const menuOptionObj = document.getElementById("menuOption")
const darkStateObj = document.getElementById("darkenedState")

function noScroll(){
    window.scrollTo(0,0)
}

burgerObj.addEventListener("click", function(){
    darkenedState.hidden = !darkenedState.hidden
    window.addEventListener('scroll', noScroll)
    document.getElementById("menu").style.display = "flex";
    document.getElementById("menu").style.animation = "dropDown .35s ease-in forwards";
    console.log('Burger has been pressed, X is now available')
})

xButtonObj.addEventListener("click", function(){
    window.removeEventListener('scroll', noScroll);
    darkenedState.hidden = !darkenedState.hidden
    document.getElementById("menu").style.display = "none";
    console.log('Burger has been closed, burger is now available')
})

menuOptionObj.addEventListener("click", function(){
    window.removeEventListener('scroll', noScroll);
    darkenedState.hidden = !darkenedState.hidden
    document.getElementById("menu").style.display = "none";
    console.log('Burger has been closed, burger is now available')
})

darkStateObj.addEventListener("click", function(){
    window.removeEventListener('scroll', noScroll);
    darkenedState.hidden = !darkenedState.hidden
    document.getElementById("menu").style.display = "none";
    console.log('Burger has been closed, burger is now available')
})







