/**Аккордеон */
$('.js-accordeon dd:not(:first)').slideUp();

$('.js-accordeon dt').on('click', (ev) => {
  $(ev.target)
    .next('dd').slideToggle()
    .siblings('dd').slideUp();
});


const btnTriangle = document.querySelectorAll('.fa-caret-right');
const btnTextTriangleToogle = document.querySelectorAll('.faq_accordeon-header-title');

for(let i = 0; i < btnTextTriangleToogle.length; i++) {
    btnTextTriangleToogle[i].addEventListener('click', function(){
      for(let i = 0; i < btnTriangle.length; i++) {
        btnTriangle[i].classList.remove('fa-caret-right--active');
      }
      btnTriangle[i].classList.add('fa-caret-right--active');
    })
}




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
  $('.nav_item-link--mobile').click(function() {
      $('.header-mobile_bg').toggleClass('header-mobile_bg--active');
      $('.heade-mobile').toggleClass('heade-mobile--active');
      $('.menu-icon').toggleClass('active');
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




/**********Плавный скрол***********/

$(".nav_item-link").on("click", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();
  //забираем идентификатор бока с атрибута href
  var id  = $(this).attr('href'),
  //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top
  //анимируем переход на расстояние - top за 500 мс
  $('body,html').animate({scrollTop: top}, 1200);
});







/*const textWrapToggle = document.querySelector('#slider-1-layer-10');
const btnLinkToggle = document.querySelector('#slider-1-layer-8 a');

textWrapToggle.innerHTML = 'Закажи дизайн проекта до 31.12.2018 и получи авторский надзор бесплатно';*/