$('.js-accordeon dd:not(:first)').slideUp();

$('.js-accordeon dt').on('click', (ev) => {
  $(ev.target)
    .next('dd').slideToggle()
    .siblings('dd').slideUp();
});
