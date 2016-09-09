(function () {
    "use strict";

    $(function(){

        $(".fancybox").fancybox({
            openEffect	: 'none',
            closeEffect	: 'none'
        });

        var swiper = new Swiper('.js-auto', {
           // pagination: '.swiper-pagination',
            direction: 'horizontal',
            slidesPerView: 7.2,
            paginationClickable: true,
            spaceBetween: 7,
            mousewheelControl: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: true
        });


       $('.swiper-slide').mouseover(function(){
           swiper.stopAutoplay();
       });
        $('.swiper-slide').mouseout(function(){
            swiper.startAutoplay();
        });


    });


}());