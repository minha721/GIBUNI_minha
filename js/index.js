//헤더 색깔 변화
$(function(){
  var header = $('.navbar');
  var page = $('#main');
  var pageOffsetTop = page.offset().top;
  $(window).resize(function(){
    pageOffsetTop = page.offset().top;
  });

  $(window).on('scroll', function(){
    if($(window).scrollTop() > pageOffsetTop) {
      header.addClass('down');
    } else {
      header.removeClass('down');
    }
  });
});

$(document).ready(function(){
  $(".main-text1").hide();
  $(".main-text1").fadeIn(3000);
  $(".main-text2").hide();
  $(".main-text2").fadeIn(3000);
  $(".button-border").hide();
  $(".button-border").slideDown(2000);
  $(".button").hide();
  $(".button").slideDown(2000);
})
