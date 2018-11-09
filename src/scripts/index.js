/**Аккордеон */
$('.js-accordeon dd:not(:first)').slideUp();

$('.js-accordeon dt').on('click', (ev) => {
  $(ev.target)
    .next('dd').slideToggle()
    .siblings('dd').slideUp();
});




/**Слайдер с отзывами */
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
      breakpoint: 850,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});



/**Мобильное меню**/
$(document).ready(function() {
  $('.menu-icon').click(function() {
      $(this).toggleClass('active');
      $('.header-mobile_bg').toggleClass('header-mobile_bg--active');
      $('.heade-mobile').toggleClass('heade-mobile--active');
  })
})


/********Форма обратной связи**********/

const formWrap = document.querySelector('.form-wrapper');

const btnForm = document.querySelectorAll('.form-link');

for(let i = 0; i < btnForm.length; i++) {
  btnForm[i].addEventListener('click', function(e){
    e.preventDefault();
    formWrap.classList.add('form-wrapper--active');
  })

  formWrap.addEventListener('click', function(){
    if(event.target == formWrap) {
      formWrap.classList.remove('form-wrapper--active');
    }
  })
}