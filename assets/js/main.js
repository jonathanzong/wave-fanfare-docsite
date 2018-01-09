$(document).ready(function() {
  $('.main-sections').css('margin-top', $(window).height() - 60);

  PDFObject.embed("/assets/pdf/WaveFanfare_2017_Snyder_score.pdf", "#score-pdf", {
    fallbackLink: "<p>The score for the performance can be viewed <a href='/assets/pdf/WaveFanfare_2017_Snyder_score.pdf'>by clicking here</a>.</p>"
  });

  var $carousel = $('.main-carousel').flickity({
    freeScroll: false,
    pageDots: false,
    prevNextButtons: false
  });

  $carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
    console.log('lightbox');
  });
});

$(window).scroll(function() {
  // selectors
  var $window = $(window),
      $body = $('.main-sections'),
      $panel = $('.trigger-color');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop()// + ($window.height() / 3);

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


