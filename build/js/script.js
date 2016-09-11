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

        var swiper2 = new Swiper('.js-classes', {
            // pagination: '.swiper-pagination',
            direction: 'horizontal',
            slidesPerView: 7.2,
            paginationClickable: true,
            spaceBetween: 7,
            mousewheelControl: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: true
        });


        $('.auto-slide').mouseover(function(){
           swiper.stopAutoplay();
        });

        $('.auto-slide').mouseout(function(){
            swiper.startAutoplay();
        });

        $('.classes-slide').mouseover(function(){
            swiper2.stopAutoplay();
        });

        $('.classes-slide').mouseout(function(){
            swiper2.startAutoplay();
        });


        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [52.89607457144356,40.506563499999984],
                    zoom: 10
                }, {
                    searchControlProvider: 'yandex#search'
                });


            var myPlacemark2 = new ymaps.Placemark([52.89607457144356,40.506563499999984], {
                address: "",
                object: ""
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/point-map.png',
                // Размеры метки.
                iconImageSize: [30, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-3, -42]
            });

            var myPlacemark = new ymaps.Placemark([52.705583571586466,41.39699149999999], {
                address: "",
                object: ""
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/point-map.png',
                // Размеры метки.
                iconImageSize: [30, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-3, -42]
            });

            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark2);
            myMap.behaviors.disable('scrollZoom');
        });

        function viewGallery() {
            var links = document.getElementsByClassName('js-c_link'),
                carousels = document.getElementsByClassName('js-carousel');

            for (var i = 0; i < links.length; i++) {

                links[i].onclick = function() {
                    var openBlock = this.getAttribute('data-slider');

                    for (var n = 0; n < links.length; n++ ) {
                        links[n].classList.remove('active');
                    }

                    this.classList.add('active');

                    for (var j = 0; j < carousels.length; j++) {
                        carousels[j].classList.add('no--visible');
                    }

                    var carousel = document.getElementsByClassName(openBlock)[0];
                        carousel.classList.remove('no--visible');
                }
            }
        }

        viewGallery();


    });


}());