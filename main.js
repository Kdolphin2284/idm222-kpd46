const burgerObj = document.getElementById("burger")
const menuObj = document.getElementById("menu")
const xButtonObj = document.getElementById("xButton")
const menuOptionObj = document.getElementById("menuOption")

burgerObj.addEventListener("click", function(){
    menu.hidden = !menu.hidden
    darkenedState.hidden = !darkenedState.hidden
    console.log('Burger has been pressed, X is now available')
})

xButtonObj.addEventListener("click", function(){
    menu.hidden = !menu.hidden
    darkenedState.hidden = !darkenedState.hidden
    console.log('Burger has been closed, burger is now available')
})

menuOptionObj.addEventListener("click", function(){
    menu.hidden = !menu.hidden
    darkenedState.hidden = !darkenedState.hidden
    console.log('Burger has been closed, burger is now available')
})

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







