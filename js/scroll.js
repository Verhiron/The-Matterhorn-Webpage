//jQuery
$(document).ready(function() {
    $(document).scroll(function () {
        // changes the navbar colour when page scrolls 
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });

      // Animates the scroll when scroll button is clicked
      $(".scroll").on('click', function(event) {

        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
  
            // Store hash
            var hash = this.hash;
            // animates the scroll down to body
            $('html, body').animate({
                scrollTop: $(hash).offset().top
             }, 1500);
        } else {
            console.log("error");
        }
    });
    
});

//pure js
/*
document.addEventListener("click", function(){
  document.getElementById("returnMsg")
});
*/