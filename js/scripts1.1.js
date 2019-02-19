window.onload=function() {
  var button = document.getElementById("hamburger-button");
  var menu = document.getElementById("hamburger-menu");

  button.onclick=function() {
	  if (menu.classList.contains('m-menu--hidden')) {
	    menu.classList.add('m-menu');
	    menu.classList.remove('m-menu--hidden');
	  } else {
	  	menu.classList.add('m-menu--hidden');
	   	menu.classList.remove('m-menu');
	  }
	}
}
