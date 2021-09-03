$(function () {

   $('.product-tabs__top-item').on('click', function (e) {
      e.preventDefault(); //отмена по ссылке
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active');

      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');

   })

   $('.product-slide__small').slick({
      asNavFor: '.product-slide__big',
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
   });
   $('.product-slide__big').slick({
      asNavFor: '.product-slide__small',
      draggable: false,
      arrows: false,
      fade: true,

   });

   $('.slider-top__inner').slick({
      arrows: false,
      dots: true,
      fade: true,
      // autoplay: true,
      // autoplaySpeed: 3000,
   });

   $('.select-style, .product-one__num').styler();

   $('.shop-content__filter-btn').on('click', function () {
      $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
      $(this).addClass('shop-content__filter-btn--active');
   });
   $('.button-list').on('click', function () {
      $('.product-item').addClass('product-item--list');
   });
   $('.button-grid').on('click', function () {
      $('.product-item').removeClass('product-item--list');
   });

   $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
   });

   $(".star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
   });

   const deadlineDate = new Date($('.promo__clock').attr('data-time')).getTime();
   const countdownDays = document.querySelector('.promo__clock-days .promo__number');
   const countdownHours = document.querySelector('.promo__clock-hours .promo__number');
   const countdownMinutes = document.querySelector('.promo__clock-minutes .promo__number');
   const countdownSeconds = document.querySelector('.promo__clock-seconds .promo__number');

   setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = deadlineDate - currentDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
      countdownMinutes.innerHTML = minutes;
      countdownSeconds.innerHTML = seconds;
   }, 1000);

});