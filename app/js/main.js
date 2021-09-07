$(function () {


   $('.blog-page__slider').slick({
      infinite: false,
      nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 304 448"><path fill="#fff" d="M276.75 219.25l-185.5 185.5c-6.25 6.25-16.25 6.25-22.5 0l-41.5-41.5c-6.25-6.25-6.25-16.25 0-22.5l132.75-132.75-132.75-132.75c-6.25-6.25-6.25-16.25 0-22.5l41.5-41.5c6.25-6.25 16.25-6.25 22.5 0l185.5 185.5c6.25 6.25 6.25 16.25 0 22.5z"></path></svg></button>',
      prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 336 448"><path fill="#fff" d="M292.75 75.25l-132.75 132.75 132.75 132.75c6.25 6.25 6.25 16.25 0 22.5l-41.5 41.5c-6.25 6.25-16.25 6.25-22.5 0l-185.5-185.5c-6.25-6.25-6.25-16.25 0-22.5l185.5-185.5c6.25-6.25 16.25-6.25 22.5 0l41.5 41.5c6.25 6.25 6.25 16.25 0 22.5z"></path></svg></button>',
   });
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
      starSvg: '  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="16"viewBox = "0 0 512 512" ><path d = "M362.016 319.056l-0.16-0.096-1.056 0.848 1.504 0.224c0 0 64.832 163.264 51.248 186.928-26.704 20.24-141.472-89.52-156.384-104.016l0.096 0.56c0 0-128.944 128.768-158.8 105.744-17.888-12.992 47.152-192.48 47.152-192.48l0.304-0.048c-23.888-13.648-155.088-106.336-145.392-139.696 0.288-20.080 182.624-18.688 188.432-17.904 0.704-4.080 31.952-159.12 67.056-159.12 35.28 0 65.6 158.688 65.968 160.896h0.096l0.032 0.16 0.4-0.848c0 0 188.688-2.896 188.976 16.816 10.688 36.688-149.472 142.032-149.472 142.032z" ></path> </svg>',
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

   $('.menu-btn,.menu__item-link').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
      $('.menu-btn').toggleClass('active');
   });

   $('.footer-top__nav--slide').on('click', function () {
      $(this).next().slideToggle();
   });

});