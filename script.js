// This code adds a smooth scroll effect to the navigation menu.

$(document).ready(function() {
    $('.nav-link').on('click', function(event) {
      event.preventDefault();
  
      // Get the ID of the section to scroll to.
      var sectionId = $(this).attr('href');
  
      // Scroll to the section.
      $('html, body').animate({
        scrollTop: $(sectionId).offset().top
      }, 500);
    });
  });

