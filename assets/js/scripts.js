'use strict';

$(document).ready(function() {

  // anchor
  $(".go-to").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href");

    if ($(anchor).length) {
      var run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
  });

  // back top button
  var backtotop = $('.main-footer .mouse');
  backtotop.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '1500');
  });

  $(".mobile-menu").on("click", function(){
    $(this).toggleClass("active");
    $(".main-header .main-menu").stop().slideToggle( "slow", function(){
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  $.fn.forceNumbericOnly = function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >=
          48 && key <= 57) || (key >= 96 && key <= 105) || key == 107 || key ==
          109 || key == 173 || key == 61);
      });
    });
  };

  $('input[type=tel]').forceNumbericOnly();

  var Accordion = function(el, multiple,link='.link') {
    this.el = el || {};
    this.multiple = multiple || false;
    this.link = link;

    // Variables privadas
    var links = this.el.find(this.link);
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.stop().slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }
  var accordion = new Accordion($('#accordion'), false);
  

  $('.slider-galery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.slider-galery-arrow',
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
  });

  var slider = $('.slider-photograph');

  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.slider-btn-prev').on('click', function() {
    $(slider).slick('slickPrev');
  });
  $('.slider-btn-next').on('click', function() {
    $(slider).slick('slickNext');
  });

  $('.slider-blog').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false
  });
  var accordion = new Accordion($('#accordion__two'), false,'.link__click');

  $('.slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-photographer',
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true
  });
  $('.slider-photographer').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-text',
    centerMode: true,
    centerPadding: '30px',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
         slidesToShow: 3,
         slidesToScroll: 1
        }
      },
      {
          breakpoint: 770,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
          }
      }
    ]
  });

  $('.tab-btn').on('click', function() {
    let id = $(this).attr('data-id')

    $('.tab-btn').removeClass('active')
    $(this).addClass('active')
    $('.price__tr').removeClass('active')
    $('.'+id).addClass('active')
  });

  var accordion = new Accordion($('#accordion__faq'), false,'.link__faq');


  // sign-up
  $(document).on("click", ".sign__up .step-two .prev-btn", function(){
    $(".step-two").removeClass("is-active");
    $(".step-one").addClass("is-active");
  });

  // Updates the url under the input
  $(document).on('keyup', '#signup_url', function () {
      $('.example-url').html('http://<span class="emphasis">' + $(this).val() + '</span>.instaproofs.com');
  });


  // validation

  //empty validation
  $(document).on('blur', '.validateJs .required', function(e) {
    $(this).closest('.form-group').removeClass('error');
    $(this).closest('.form-group').find('.error-message').remove();
    if($(this).val() == "") {
      $(this).closest('.form-group').addClass('error');
      $(this).closest('.form-group').append('<p class="error-message">field can not be empty</p>')
    } else if ($(this).val().length > 0 && $(this).val().length < 2){
      $(this).closest('.form-group').addClass('error');
      $(this).closest('.form-group').append('<p class="error-message">Please enter at least 2 characters.</p>')
    } else {
      $(this).closest('.form-group').removeClass('error');
      $(this).closest('.form-group').find('.error-message').remove();
    }
  })
  //mail validation
  // var email = $("input[type='email']");
  var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  $(document).on('blur', '.validateJs input[type="email"]', function(e) {
    var email = $(this);
    console.log(email.val())
    $(this).closest('.form-group').removeClass('error');
    $(this).closest('.form-group').find('.error-message').remove();
    if (!pattern.test(email.val())) {
       $(this).closest('.form-group').addClass('error');
      $(this).closest('.form-group').append('<p class="error-message">' + email.val() + ' is not a valid email</p>');
      email.focus;
      //return false;
    } else {
      $(this).closest('.form-group').removeClass('error');
      $(this).closest('.form-group').find('.error-message').remove();
    }
  });

  //select validation
  $(document).on('change', '.custom-select', function() {
    $(this).closest('.form-group').removeClass('error');
    $(this).closest('.form-group').find('.error-message').remove();
    if($(this).val() > 0) {
      $(this).closest('.form-group').removeClass('error');
      $(this).closest('.form-group').find('.error-message').remove();
    } else {
      $(this).closest('.form-group').addClass('error');
      $(this).closest('.form-group').append('<p class="error-message">field can not be empty</p>');
    }
  });




  //submit button
  $(document).on('click', '.validateJs .form-btn', function(e) {
    e.preventDefault();

    //empty validation
    $(this).closest('.validateJs').find('.required').each(function() {
      $(this).closest('.form-group').removeClass('error');
      $(this).closest('.form-group').find('.error-message').remove();
      if ($(this).val().length < 1) {
        $(this).closest('.form-group').addClass('error');
        $(this).closest('.form-group').append('<p class="error-message">field can not be empty</p>')
      } else if ($(this).val().length > 0 && $(this).val().length < 2){
        $(this).closest('.form-group').addClass('error');
        $(this).closest('.form-group').append('<p class="error-message">Please enter at least 2 characters.</p>')
      } else {
        $(this).closest('.form-group').removeClass('error');
        $(this).closest('.form-group').find('.error-message').remove();
      }
    });

    //email validation
    $(this).closest('.validateJs').find('input[type="email"]').each(function(){
      var email = $(this);
      $(this).closest('.form-group').removeClass('error');
      $(this).closest('.form-group').find('.error-message').remove();
      if (!pattern.test(email.val())) {
         $(this).closest('.form-group').addClass('error');
        $(this).closest('.form-group').append('<p class="error-message">' + email.val() + ' is not a valid email</p>')
        email.focus;
      } else {
        $(this).closest('.form-group').removeClass('error');
        $(this).closest('.form-group').find('.error-message').remove();
      }
    });

    //select validation
    $(this).closest('form').find('.custom-select').each(function(){
      $(this).closest('.form-group').removeClass('error');
      $(this).closest('.form-group').find('.error-message').remove();
      if($(this).val() > 0) {
        $(this).closest('.form-group').removeClass('error');
        $(this).closest('.form-group').find('.error-message').remove();
      } else {
        $(this).closest('.form-group').addClass('error');
        $(this).closest('.form-group').append('<p class="error-message">field can not be empty</p>');
      }
    });


    if($(this).hasClass('stepOneJs') && $('.step-one .error').length < 1){
      $(".step-one").removeClass("is-active");
      $(".step-two").addClass("is-active");
        
      $(".step-two").find('.form-group').removeClass('error');
      $(".step-two").find('.form-group .error-message').remove();
    }

    if($(this).hasClass('steptwoJs') && $('.step-two .error').length < 1){
      // form.submit();
      window.location.href = "/thank.html";
    }

  })

});
