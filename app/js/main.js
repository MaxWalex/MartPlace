$(function () {
  // =============== RATEYO

  $(".feature__slider-bottom-star").rateYo({
    starWidth: "17px",
    rating: 4.5,
  });

  $(".feature__slick").slick({
    nextArrow:
      '<div class="slick-next slick-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="9" height="28" viewBox="0 0 9 28"><title>angle-right</title><path d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"></path></svg></div>',
    prevArrow:
      '<div class="slick-prev slick-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="28" viewBox="0 0 11 28"><title>angle-left</title><path d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"></path></svg></div>',
  });

  $('.followers__slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    nextArrow:
      '<div class="slick-next slick-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="9" height="28" viewBox="0 0 9 28"><title>angle-right</title><path d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"></path></svg></div>',
    prevArrow:
      '<div class="slick-prev slick-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="28" viewBox="0 0 11 28"><title>angle-left</title><path d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"></path></svg></div>',
  })

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 320,
    from: 30,
    to: 300,
    prefix: "$",
  });

  $(".cart__star").rateYo({
    rating: 4.5,
    starWidth: "17px",
    ratedFill: "#ffc000"
  });
  $(".cart__star-list").rateYo({
    rating: 4.5,
    starWidth: "17px",
    ratedFill: "#ffc000"
  });

  $('.filter__list').on('click', function () {
    $(this).addClass('active')
    $('.filter__grid').removeClass('active')
    $('.carts__content').addClass('active')
  })
  $('.filter__grid').on('click', function () {
    $(this).addClass('active')
    $('.filter__list').removeClass('active')
    $('.carts__content').removeClass('active')
  })

  // $('.header__basket-trash').one("click", function () {
  //   $('.header__basket-item').on('click', function() {
  //     $(this).css('display', 'none')
  //   })
  // })

  // ============================ BURGER ======================

  $('.header__burger').on("click", function() {
    $('.menu__list, .header__burger').toggleClass('active')
  })

  // ================== TABS ============================

  $('.single-product__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.single-product__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  // ==================== CHECK ICON =========================

  $('.check-icon__default').on("click", function () {
    $('.product__info-license__single .check-icon__default').css('display', 'block')
    $('.check-icon').css('display', 'block') 
    $(this).css('display', 'none')
  })

  $('.check-icon__default').on("click", function () {
    $('.product__info-license__multi .check-icon__default').css('display', 'block')
    $('.check-icon').css('display', 'block') 
    $(this).css('display', 'none')
  })

  // ================ RATEYO

  $(".prodcut__info-total--rate").rateYo({
    starWidth: "17px",
    rating: 4.5,
    ratedFill: "#ffc000",
    starWidth: "20px"
  });

  $('.form__check-icon__default').on("click", function () {
    $('.form__check .form__check-icon').css('display', 'block')
    $('.form__check-icon').css('display', 'block') 
    $(this).css('display', 'none')
  })

  $('.form__check-icon').on("click", function () {
    $('.form__check .check-icon__default').css('display', 'block')
    $('.form__check-icon__default').css('display', 'block') 
    $(this).css('display', 'none')
  })

  let mixer = mixitup(".release__inner");

});

// ==================== JAVA SCRIPT ================


