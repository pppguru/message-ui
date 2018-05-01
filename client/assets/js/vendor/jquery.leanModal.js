// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL
(function($) {
  $.fn.extend({
    leanModal: function(options) {
      var defaults = {
        top: 100,
        overlay: 0.75,
        closeButton: null
      };
      var overlay = $("<div id='lean_overlay'></div>");
      $("body").append(overlay);
      options = $.extend(defaults, options);
      return this.each(function() {
        var o = options;
        $(this).click(function(e) {
          var modal_id = $(this).attr("href");
          $("#lean_overlay").click(function() {
            close_modal(modal_id)
          });
          $(o.closeButton).click(function() {
            close_modal(modal_id)
          });
          var modal_height = $(modal_id).outerHeight();
          var modal_width = $(modal_id).outerWidth();
          $('body').addClass('noscroll');
          $(o.closeButton).css({
            "z-index": 11001,
            display: "block"
          });
          $("#lean_overlay").css({
            "display": "block",
            opacity: 0
          });
          $("#lean_overlay").fadeTo(200, o.overlay);
          $(modal_id).css({
            "display": "block",
            "position": "fixed",
            "opacity": 0,
            "z-index": 11000,
            "left": 0,
            "right": 0,
            "top": 0,
            "bottom": 0
          });
          $(modal_id).fadeTo(200, 1);
          e.preventDefault()
        })
      });

      function close_modal(modal_id) {
        $("#lean_overlay").fadeOut(200);
        $(modal_id).css({
          "display": "none"
        });
        $('.modal_close').css({
          display: "none"
        });
        $('body').removeClass('noscroll')
      }
    }
  })
})(jQuery);
