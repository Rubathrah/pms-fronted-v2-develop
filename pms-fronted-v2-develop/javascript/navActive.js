$(document).ready(function(){
    var path = window.location.href;

     $('.nav-link').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });
  });