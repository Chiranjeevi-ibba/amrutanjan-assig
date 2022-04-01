$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:1,
        dots:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
    
     
})