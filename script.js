$(document).ready(function() {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      var target = $(this.hash).children();
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      console.log(target);
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "swing");
      }
    });

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

var $window = $(window);

function checkIfInView() {
  var windowHeight = $window.outerHeight();
  var windowTopPosition = $window.scrollTop();
  var windowBottomPosition = (windowTopPosition + windowHeight);

  $.each($('.flip-animation'), function() {
    var $element = $(this);
    var $parent = $element.parent().parent();
    var elementHeight = $parent.outerHeight();
    var elementTopPosition = $parent.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
    //console.log($(this).parent());

    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)){
      if($element[0].className.split(/\s+/).indexOf('animated') < 0) {
        $element.addClass('animated flipInY');
      }
    } else {
      if($element[0].className.split(/\s+/).indexOf('animated') >= 0) {
        $element.removeClass('animated flipInY');
      }
    }
  });

  $.each($('.bounce-animation'), function() {
    var $element = $(this);
    var $parent = $element.parent().parent();
    var elementHeight = $parent.outerHeight();
    var elementTopPosition = $parent.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
    //console.log($(this).parent());

    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)){
      if($element[0].className.split(/\s+/).indexOf('animated') < 0) {
        $element.css('animation-delay', Math.floor((Math.random() * 600) + 100).toString()+"ms");
        $element.addClass('animated bounceIn');
      }
    } else {
      if($element[0].className.split(/\s+/).indexOf('animated') >= 0) {
        $element.removeClass('animated bounceIn');
      }
    }
  });

  $.each($('.fade-animation'), function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);

    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)){
       $element.addClass('animated fadeIn');
    } else {
      //$element.removeClass('animated fadeIn');
    }
  });
}
