/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll

$(document).ready(function(){
	
	window.addEventListener("scroll", function() {
		if (window.scrollY > 700) {
		  document.querySelector(".back-to-top").classList.add("visible");
		} else {
		  document.querySelector(".back-to-top").classList.remove("visible");
		}
	  });

	// Smooth scroll for anchor links with a hash
	$(".nav-link").on('click', function(event) {
	  if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		var offset = $(hash).offset().top;
  
		// Scroll smoothly
		$('html, body').animate({
		  scrollTop: offset
		}, 700, function(){
		  window.location.hash = hash;
		});
	  } 
	});
  
	// Smooth scroll for the back to top button
	$(".back-to-top").on('click', function(event) {
	  event.preventDefault();
  
	  // Scroll smoothly to the top
	  $('html, body').animate({
		scrollTop: 0
	  }, 700);
	});

	$('.navbar-brand').on('click', function(event) {
		event.preventDefault();
	
		// Scroll to the top of the page smoothly
		$('html, body').animate({
		  scrollTop: 0
		}, 700);
	  });
	  
  });




  