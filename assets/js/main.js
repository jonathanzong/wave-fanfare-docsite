$(document).ready(function() {
  var topmargin = $(window).height() - 60;
  $('.main-sections').css('margin-top', topmargin);

  $(window).resize(function() {
    topmargin = $(window).height() - 60;
    $('.main-sections').css('margin-top', topmargin);
  });

  var $carousel = $('.main-carousel').flickity({
    freeScroll: false,
    pageDots: false,
    prevNextButtons: false
  });

  $carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
    $.featherlight($(cellElement).children('img').attr('src'));
  });

  $('.down-arrow').click(function() {
    $("html, body").animate({ scrollTop: topmargin }, 500);
  });

  $(window).scroll(function() {

    // selectors
    var $window = $(window),
        $body = $('.main-sections'),
        $panel = $('.trigger-color');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop()// + ($window.height() / 3);

    if (scroll > 10) {
      $('.down-arrow').removeClass('show');
    }
    else {
      $('.down-arrow').addClass('show');
    }

    if (scroll > topmargin) {
      $('.interactive').addClass('active');
    }
    else {
      $('.interactive').removeClass('active');
    }

    $panel.each(function () {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.

      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

        var targetClass = 'color-' + $(this).data('color');

        if (!$body.hasClass(targetClass)) {
          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
          });

          // Add class of currently active div
          $body.addClass('color-' + $(this).data('color'));
        }
      }
    });

  }).scroll();

});
