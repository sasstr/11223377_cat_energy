var menuButton = document.querySelector( ".main-navigation__menu-button" );

menuButton.classList.remove('main-navigation__menu-button--no-js');

menuButton.addEventListener("click", function (event) {
  event.preventDefault();

  if( menuButton.classList.contains("main-navigation__menu-button--closed") ){
  menuButton.classList.remove('main-navigation__menu-button--closed');
  menuButton.classList.add('main-navigation__menu-button--opened');
  }
    else {
      menuButton.classList.remove('main-navigation__menu-button--opened');
      menuButton.classList.add('main-navigation__menu-button--closed');
    }
});

/* let shade = document.querySelector( ".separator" );
let imgUp = document.querySelector( ".img-up" );
let wrapper = document.querySelector( ".wrapper" );
let separator = document.querySelector( ".separator" );

wrapper.addEventListener("mousemove", function (event) {
    event.preventDefault();
    if(event.buttons!=1) return;
    let stateX = event.clientX;
    if(event.clientX > 297 ) return;
    imgUp.style.width = (stateX-7) +"px";
    separator.style.marginLeft = ( stateX-7 ) +"px";
    }
  );

wrapper.addEventListener("click", function (event) {
     event.preventDefault();
    let stateX = event.clientX;
    if(event.clientX > 297 ) return;
    imgUp.style.width = (stateX-7) +"px";
    separator.style.marginLeft = ( stateX-7 ) +"px";
  }
 ); */
