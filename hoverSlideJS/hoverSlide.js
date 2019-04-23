//hoverSlide by JSFanatik

$(document).ready(function(){
  $(".tab").mouseover(function() {
    $(this).animate({ "left": "-=40px" }, 200 );
  });
  $(".tab").mouseout(function() {
    $(this).animate({ "left": "+=40px" }, 200 );
  });

  $(".tab-left").mouseover(function() {
    $(this).animate({ "left": "+=40px" }, 200 );
  });
  $(".tab-left").mouseout(function() {
    $(this).animate({ "left": "-=40px" }, 200 );
  });
});

(function ( $ ) {
    $.fn.hoverSlide = function( options ) {

        var settings = $.extend({
          position: "fixed",
          color: "white",
          backgroundColor: "#abc",
          padding: "15px",
          left: "",
          right: "-50px",
          width: "150px",
          borderRadius: "5px",
          top: "60px",
          zIndex: 99,
          cursor: "pointer"
        }, options );

        return this.css(settings);
    };
}( jQuery ));
