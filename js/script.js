$('.cardSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

$('.slider').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  });
