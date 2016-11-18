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
            autoplayDisableOnInteraction: true,
            breakpoints: {
                1200: {
                    slidesPerView: 6.2
                },
                992: {
                    slidesPerView: 5.2
                },
                768: {
                    slidesPerView: 4.2
                },
                480: {
                    slidesPerView: 3.2
                },
                400: {
                    slidesPerView: 2.2
                }
            }
        });

        var swiper2 = new Swiper('.js-classes', {
            // pagination: '.swiper-pagination',
            direction: 'horizontal',
            slidesPerView: 7.2,
            paginationClickable: true,
            spaceBetween: 7,
            mousewheelControl: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: true,
            breakpoints: {
                1200: {
                    slidesPerView: 6.2
                },
                992: {
                    slidesPerView: 5.2
                },
                768: {
                    slidesPerView: 4.2
                },
                480: {
                    slidesPerView: 3.2
                },
                400: {
                    slidesPerView: 2.2
                }
            }
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
                    center: [52.805456, 40.972109],
                    zoom: 10
                }, {
                    searchControlProvider: 'yandex#search'
                });


            var myPlacemark = new ymaps.Placemark([52.951749,40.486755], {
                address: "",
                object: ""
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/include/img/point-map.png',
                // Размеры метки.
                iconImageSize: [30, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-3, -42]
            });

            var myPlacemark2 = new ymaps.Placemark([52.89607457144356,40.506563499999984], {
                address: "",
                object: ""
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/include/img/point-map.png',
                // Размеры метки.
                iconImageSize: [30, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-3, -42]
            });

            var myPlacemark3 = new ymaps.Placemark([52.705583571586466,41.39699149999999], {
                address: "",
                object: ""
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/include/img/point-map.png',
                // Размеры метки.
                iconImageSize: [30, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-3, -42]
            });
            var myPlacemark4 = new ymaps.Placemark([52.675601,41.465326], {
                address: "",
                object: ""
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/include/img/point-map.png',
                // Размеры метки.
                iconImageSize: [30, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-3, -42]
            });

            var myPlacemark5 = new ymaps.Placemark([52.758893,41.429034], {
                address: "",
                object: ""
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/include/img/point-map.png',
                // Размеры метки.
                iconImageSize: [30, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-3, -42]
            });

            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark2);
            myMap.geoObjects.add(myPlacemark3);
            myMap.geoObjects.add(myPlacemark4);
            myMap.geoObjects.add(myPlacemark5);
            myMap.behaviors.disable('scrollZoom');
        });

        viewGallery();
        popupCenter();
        openSubmenuPhone();
        burgerMenu();
        positionText();
        fixedMenu();

        window.onscroll = function() {
            popupCenter();
            fixedMenu();
        };

        window.onresize = function() {
            popupCenter();
            positionText();
        };

        function fixedMenu() {
            var $menu = $('.js-menu'),
                $header = $('.js-header'),
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            var $headerHeight = $header.outerHeight(),
                $menuHeight = $menu.outerHeight();

            if (scrollTop >= $headerHeight) {
                $menu.addClass('fixed');
                $header.css({'padding-bottom': $menuHeight + 'px'});
            } else {
                $menu.removeClass('fixed');
                $header.css({'padding-bottom': 0});
            }
        }

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

        function popupCenter() {
            var links = document.getElementsByClassName('js-view-popup'),
                close = document.getElementsByClassName('js-close'),
                overlay = document.getElementsByClassName('js-overlay')[0],
                popup = document.getElementsByClassName('js-popup')[0],
                body = document.body,
                docElem = document.documentElement,
                scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
                scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

            var width = popup.offsetWidth,
                height = popup.offsetHeight;

            popup.style.left = scrollLeft + (docElem.clientWidth - width) / 2 + 'px';
            popup.style.top = scrollTop + (docElem.clientHeight - height) / 2 + 'px';


            for (var i = 0; i < links.length; i++) {

                links[i].onclick = function() {
                    try {yaCounter36604400.reachGoal('viziv')} catch(e) {}
                    popup.classList.add('visible--popup');
                    overlay.classList.add('visible--overlay');
                }
            }

            for (var j = 0; j < close.length; j++) {
                close[j].onclick = function() {
                    popup.classList.remove('visible--popup');
                    overlay.classList.remove('visible--overlay');
                }
            }

        }

        function positionText() {
            var heightBlock = document.getElementsByClassName('js-height')[0],
                textBlock = document.getElementsByClassName('js-text')[0];

            if(heightBlock || textBlock) {

                var height = heightBlock.offsetHeight,
                    heightText = textBlock.offsetHeight;

                textBlock.style.top = height + 'px';
                heightBlock.style.marginBottom = heightText + 'px';
            }
        }

        function openSubmenuPhone() {

            var links = document.getElementsByClassName('js-arrow');

            if(links) {

                for (var i = 0; i < links.length; i++) {

                    links[i].onclick = function() {
                        this.classList.toggle('click--arrow');

                        var parent = this.parentNode,
                            ul = parent.querySelector('ul');

                        ul.classList.toggle('view--submenu');

                    }
                }
            }
        }

        function burgerMenu() {

            var burger = document.getElementsByClassName('js-burger')[0];

            if(burger) {

                burger.onclick = function() {
                    var parent = this.parentNode,
                        ul  = parent.querySelector('ul');

                    ul.classList.toggle('open--menu');

                }
            }
        }

        var $otherActions = $('.one-action .other-action');

        if ($otherActions.length) {
            $('.actions-content').append( $('<div class="one-action"></div>').append($('.one-action .other-action')) );
            $('.one-action + p').remove();
        }

    });


}());