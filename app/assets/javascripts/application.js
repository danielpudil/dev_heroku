// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function loaded() {
  document.getElementById("loaded").style.display = "block";
  document.getElementById("loader-wrapper").style.display = "none";
}

function mobileMenu() {
  var x = document.getElementById("mobile");

  if (x.className === "website-nav-menu-mobile") {
    x.className = "website-nav-menu-mobile-show";
  } else {
    x.className = "website-nav-menu-mobile";
  }
}

function zmena() {
  var scroll_pos = 0;
  const mq = window.matchMedia( "(min-width: 700px)" );
  scroll_pos = $(this).scrollTop();

  if (scroll_pos > 50) {
    document.getElementById("menu").style.position = "fixed";
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.zIndex = "5";
    document.getElementById("menu").style.width = "-webkit-fill-available";
    document.getElementById("menu").style.width = "-moz-available";
    document.body.style.marginTop = "87px";
  } else {
    document.getElementById("menu").style.position = "relative";
    document.getElementById("menu").style.display = "block";
    document.body.style.marginTop = "0";
  }
};
