const burgerObj = document.getElementById("burger")
const menuObj = document.getElementById("menu")
const xButtonObj = document.getElementById("xButton")
const menuOptionObj = document.getElementById("menuOption")

burgerObj.addEventListener("click", function(){
    darkenedState.hidden = !darkenedState.hidden
    document.getElementById("menu").style.display = "flex";
    document.getElementById("menu").style.animation = "dropDown .35s ease-in forwards";
    console.log('Burger has been pressed, X is now available')
})

xButtonObj.addEventListener("click", function(){
    darkenedState.hidden = !darkenedState.hidden
    document.getElementById("menu").style.display = "none";
    console.log('Burger has been closed, burger is now available')
})

menuOptionObj.addEventListener("click", function(){
    menu.hidden = !menu.hidden
    darkenedState.hidden = !darkenedState.hidden
    console.log('Burger has been closed, burger is now available')
})

// MAKE IT SO THAT THERE IS NO SCROLL WHILE LOOKING AT THE DROPDOWN MENU

// MAKE CLICK ON DARKENED STATE TO CLOSE MENU

// $('#open').click(function() {
//     $('#modalOverlay').show().addClass('modal-open');
//   });
  
//   $('#close').click(function() {
//     var elem = $('#modalOverlay');
//     elem.removeClass('modal-open');
//     setTimeout(function() {
//       elem.hide();
//     },200);
//   });







