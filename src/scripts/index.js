$('.js-accordeon dd:not(:first)').slideUp();

$('.js-accordeon dt').on('click', (ev) => {
  $(ev.target)
    .next('dd').slideToggle()
    .siblings('dd').slideUp();
});



$('.reviews_slider-wrap').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


