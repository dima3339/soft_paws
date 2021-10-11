 $(document).ready(function () {
   $(".menu a, .top a").on("click", function (e) {
     e.preventDefault();
     var id = $(this).attr('href'),
       top = $(id).offset().top;
     $('body, html').animate({scrollTop: top}, 1000);
   });
 });