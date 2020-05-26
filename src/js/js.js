//ALTERA COR NAVBAR
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 400)

});


//ALTERA COR FONTE NAVBAR
$(window).scroll(function () {
  var pixel = window.pageYOffset;

  if (pixel > 400) {
    nav1.style.color = '#4B1A0C';
    nav2.style.color = '#4B1A0C';
    nav3.style.color = '#4B1A0C';
    navBrand.style.color = '#4B1A0C';
  } else {
    nav1.style.color = '#FB9DB6';
    nav2.style.color = '#FB9CB6';
    nav3.style.color = '#FB9CB6';
    navBrand.style.color = '#FB9CB6';
  }
});


//REDUZ O TAMANHO DO NAVBAR DE ACORDO COM SCROLL
$(window).scroll(function () {
  if ($("#mainNav").offset().top > 400) {
    $('#mainNav').addClass('shrink');
  } else {
    $('#mainNav').removeClass('shrink');
  }
});

//SUAVIZA SCROLL DA TELA
$(".nav-item a").on('click', function () {
  $("html, body").animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800)
})


//ANIMAÇÃO GALERIA ZOOM MAGNIFIC
$(document).ready(function () {
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: { enabled: true }
    // other options
  });
});
