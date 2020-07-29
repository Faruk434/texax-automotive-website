$(document).ready(function(){
//    
//    $('button').click(function(){
//        $('#myDIV').toggle(1000);
//    });
        
//    wowjs
    new WOW().init();
//    
//       $(document).ready(function() {
//           
//            $(".count").animateNumbers(4321, true, 2000);
//            
//            $("count").on("click", function() {
//                $(this).animateNumbers(1234, false);
//            });
//            
//
//        });
    
//   card slider

    $('.slider3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        speed: 1000,
    });



    
////    swipper
//    var swiper = new Swiper('.swiper-container', {
//      effect: 'coverflow',
//      grabCursor: true,
//      centeredSlides: true,
//      slidesPerView: 'auto',
//      coverflowEffect: {
//        rotate: 50,
//        stretch: 0,
//        depth: 100,
//        modifier: 1,
//        slideShadows : true,
//      },
//      pagination: {
//        el: '.swiper-pagination',
//      },
//    });
//    
//    go to top
    
     $('#myBtn').tottTop({
            scrollTop: 50
        });


    
    
});


