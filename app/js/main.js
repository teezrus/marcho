$(function () {
   $('.slider-top__inner').slick({
      arrows: false,
      dots: true,
      fade: true,
      // autoplay: true,
      // autoplaySpeed: 3000,
   });

   $(".star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
   });
})