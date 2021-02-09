$(document).ready(function () {
/**
  // Маска телефона в форме
  $(".phone-inp").mask("+7 (999) 999-99-99");

  // Обертка таблицы wp
  $('figure.wp-block-table').children().unwrap();
  $(".container-page table").addClass('content-table');

  // gallery wp standart
  $("a.gallery-fancybox").fancybox();
  $("ul.wp-block-gallery li a").fancybox();
  $("ul.blocks-gallery-grid li a").fancybox();
  $("figure.wp-block-image a").fancybox();
  $('ul.blocks-gallery-grid li a').attr("data-fancybox","gallery");
  $('.wp-block-media-text__media a').attr("data-fancybox","gallery");
 */

  // Кнопка мобильного меню header
  $("a.header__menu-btn-mob").on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('header__menu-btn-mob_active');
    $(".header__main-menu").toggleClass('header__main-menu_active');
  });

});
// END READY

//Кнопка вверх
var linkTop = $('a.link-up');
$(window).scroll(function () {
    if ($(window).scrollTop() > 1100) {
        linkTop.addClass('link-up_show');
    } else {
        linkTop.removeClass('link-up_show');
    }
});
linkTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

// Фиксированное меню
/*
var options = {
    offset: 350
}
var header = new Headhesive('.header__top-menu', options);
*/ 


