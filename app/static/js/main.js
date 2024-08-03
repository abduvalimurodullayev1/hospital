/*================================================
[  Table of contents  ]
================================================

1. Variables
2. Mobile Menu
3. Mega Menu
4. One Page Navigation
5. Toogle Search
6. Current Year Copyright area
7. Background Image
8. wow js init
9. Tooltip
10. Nice Select
11. Default active and hover item active
12. Product Details Page
13. Isotope Gallery Active  ( Gallery / Portfolio )
14. LightCase jQuery Active
15. Slider One Active 
16. Product Slider One
17. Tab Product Slider One
18. Blog Slider One
19. Testimonial Slider - 1
20. Testimonial Slider - 2
21. Testimonial Slider - 3
22. Category Slider
23. Image Slide  - 1 (Screenshot) 
24. Image Slide - 2
25. Image Slide - 3
26. Image Slide - 4 
27. Brand Logo
28. Blog Gallery (Blog Page )
29. Countdown
30. Counter Up
31. Instagram Feed
32. Price Slider
33. Quantity plus minus
34. scrollUp active
35. Parallax active
36. Header menu sticky



======================================
[ End table content ]
======================================*/

(function($) {
  "use strict";

    jQuery(document).ready(function(){
      
        /* --------------------------------------------------------
            1. Variables
        --------------------------------------------------------- */
        var $window = $(window),
        $body = $('body');

        /* --------------------------------------------------------
            2. Mobile Menu
        --------------------------------------------------------- */
         /* ---------------------------------
            Utilize Function 
        ----------------------------------- */
        (function () {
            var $ltn__utilizeToggle = $('.ltn__utilize-toggle'),
                $ltn__utilize = $('.ltn__utilize'),
                $ltn__utilizeOverlay = $('.ltn__utilize-overlay'),
                $mobileMenuToggle = $('.mobile-menu-toggle');
            $ltn__utilizeToggle.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $target = $this.attr('href');
                $body.addClass('ltn__utilize-open');
                $($target).addClass('ltn__utilize-open');
                $ltn__utilizeOverlay.fadeIn();
                if ($this.parent().hasClass('mobile-menu-toggle')) {
                    $this.addClass('close');
                }
            });
            $('.ltn__utilize-close, .ltn__utilize-overlay').on('click', function (e) {
                e.preventDefault();
                $body.removeClass('ltn__utilize-open');
                $ltn__utilize.removeClass('ltn__utilize-open');
                $ltn__utilizeOverlay.fadeOut();
                $mobileMenuToggle.find('a').removeClass('close');
            });
        })();

        /* ------------------------------------
            Utilize Menu
        ----------------------------------- */
        function mobileltn__utilizeMenu() {
            var $ltn__utilizeNav = $('.ltn__utilize-menu, .overlay-menu'),
                $ltn__utilizeNavSubMenu = $ltn__utilizeNav.find('.sub-menu');

            /*Add Toggle Button With Off Canvas Sub Menu*/
            $ltn__utilizeNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

            /*Category Sub Menu Toggle*/
            $ltn__utilizeNav.on('click', 'li a, .menu-expand', function (e) {
                var $this = $(this);
                if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
                    e.preventDefault();
                    if ($this.siblings('ul:visible').length) {
                        $this.parent('li').removeClass('active');
                        $this.siblings('ul').slideUp();
                        $this.parent('li').find('li').removeClass('active');
                        $this.parent('li').find('ul:visible').slideUp();
                    } else {
                        $this.parent('li').addClass('active');
                        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                        $this.closest('li').siblings('li').find('ul:visible').slideUp();
                        $this.siblings('ul').slideDown();
                    }
                }
            });
        }
        mobileltn__utilizeMenu();

        /* --------------------------------------------------------
            3. Mega Menu
        --------------------------------------------------------- */
        $('.mega-menu').each(function(){
            if($(this).children('li').length){
                var ulChildren = $(this).children('li').length;
                $(this).addClass('column-'+ulChildren)
            }
        });
        

        /* Remove Attribute( href ) from sub-menu title in mega-menu */
        /*
        $('.mega-menu > li > a').removeAttr('href');
        */


        /* Mega Munu  */
        /* $(".mega-menu").parent().css({"position": "inherit"}); */
        $(".mega-menu").parent().addClass("mega-menu-parent");
        

        /* Add space for Elementor Menu Anchor link */
        $( window ).on( 'elementor/frontend/init', function() {
            elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
                return scrollTop - 75;
            });
        });

        /* --------------------------------------------------------
            3-2. Category Menu
        --------------------------------------------------------- */

        $('.ltn__category-menu-title').on('click', function(){
            $('.ltn__category-menu-toggle').slideToggle(500);
        });	

        /* Category Menu More Item show */
        $('.ltn__category-menu-more-item-parent').on('click', function(){
            $('.ltn__category-menu-more-item-child').slideToggle();
            $(this).toggleClass('rx-change');

        });

        /* Category Submenu Column Count */
        $('.ltn__category-submenu').each(function(){
            if($(this).children('li').length){
                var ulChildren = $(this).children('li').length;
                $(this).addClass('ltn__category-column-no-'+ulChildren)
            }
        });

        /* Category Menu Responsive */
        function ltn__CategoryMenuToggle(){
            $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').on('click', function(){
            if($(window).width() < 991){
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp();
                }
                else {
                    element.addClass('open');
                    element.children('ul').slideDown();
                    element.siblings('li').children('ul').slideUp();
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp();
                }
            }
            });
            $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').append('<span class="expand"></span>');
        }
        ltn__CategoryMenuToggle();


        /* ---------------------------------------------------------
            4. One Page Navigation ( jQuery Easing Plugin )
        --------------------------------------------------------- */
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });


        /* --------------------------------------------------------
            5. Toogle Search
        -------------------------------------------------------- */
        // Handle click on toggle search button
        $('.header-search-1').on('click', function() {
            $('.header-search-1, .header-search-1-form').toggleClass('search-open');
            return false;
        });


        /* ---------------------------------------------------------
            6. Current Year Copyright area
        --------------------------------------------------------- */
        $(".current-year").text((new Date).getFullYear());


        /* ---------------------------------------------------------
            7. Background Image
        --------------------------------------------------------- */
        var $backgroundImage = $('.bg-image, .bg-image-top');
        $backgroundImage.each(function() {
            var $this = $(this),
                $bgImage = $this.data('bs-bg');
            $this.css('background-image', 'url('+$bgImage+')');
        });


        /* ---------------------------------------------------------
            8. wow js init
        --------------------------------------------------------- */
        new WOW().init();


        /* ---------------------------------------------------------
            9. Tooltip
        --------------------------------------------------------- */
        $('[data-bs-toggle="tooltip"]').tooltip();


        /* --------------------------------------------------------
            10. Nice Select
        --------------------------------------------------------- */
        $('select').niceSelect();

        
        /* --------------------------------------------------------
            11. Default active and hover item active
        --------------------------------------------------------- */
        var ltn__active_item = $('.ltn__feature-item-6, .ltn__our-journey-wrap ul li, .ltn__pricing-plan-item')
        ltn__active_item.mouseover(function() {
            ltn__active_item.removeClass('active');
            $(this).addClass('active');
        });

        /* --------------------------------------------------------
            12. Product Details Page
        --------------------------------------------------------- */
        $('.ltn__shop-details-large-img').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.ltn__shop-details-small-img'
        });
        $('.ltn__shop-details-small-img').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.ltn__shop-details-large-img',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
                        
        /* --------------------------------------------------------
            13. Isotope Gallery Active  ( Gallery / Portfolio )
        -------------------------------------------------------- */
        var $ltnGalleryActive = $('.ltn__gallery-active'),
            $ltnGalleryFilterMenu = $('.ltn__gallery-filter-menu');
        /*Filter*/
        $ltnGalleryFilterMenu.on( 'click', 'button, a', function() {
            var $this = $(this),
                $filterValue = $this.attr('data-filter');
            $ltnGalleryFilterMenu.find('button, a').removeClass('active');
            $this.addClass('active');
            $ltnGalleryActive.isotope({ filter: $filterValue });
        });
        /*Grid*/
        $ltnGalleryActive.each(function(){
            var $this = $(this),
                $galleryFilterItem = '.ltn__gallery-item';
            $this.imagesLoaded( function() {
                $this.isotope({
                    itemSelector: $galleryFilterItem,
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.ltn__gallery-sizer',
                    }
                });
            });
        });

        /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
        $('a[data-rel^=lightcase]').lightcase({
            transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
            swipe: true,
            maxWidth: 1170,
            maxHeight: 600,
        });

        /* --------------------------------------------------------
            15. Slider One Active 
        --------------------------------------------------------- */
        $('.ltn__slide-one-active').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            dots: true,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        }).on('afterChange', function(){
            new WOW().init();
        });
        /* --------------------------------------------------------
            15-2. Slider Active 2
        --------------------------------------------------------- */
        $('.ltn__slide-active-2').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        }).on('afterChange', function(){
            new WOW().init();
        });

        
        /*----------------------
            Slider 11 active
        -----------------------*/
        $('.ltn__slider-11-active').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.ltn__slider-11-pagination-count .count').text('0'+i);
            $('.ltn__slider-11-pagination-count .total').text('0' + slick.slideCount);

            $('.ltn__slider-11-slide-item-count .count').text('0'+i);
            $('.ltn__slider-11-slide-item-count .total').text('/0' + slick.slideCount);
            new WOW().init();
        }).slick({
            dots: false, /* slider left or right side pagination count with line */
            arrows: false, /* slider arrow  */
            appendDots: '.ltn__slider-11-pagination-count',
            infinite: true,
            autoplay: false,
            autoplaySpeed: 10000,
            speed: 500,
            asNavFor: '.ltn__slider-11-img-slide-arrow-active',
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.ltn__slider-11-img-slide-arrow-active').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            centerMode: false,
            centerPadding: '0px',
            asNavFor: '.ltn__slider-11-active',
            dots: false, /* image slide dots */
            arrows: false, /* image slide arrow */
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: true,
                        dots: false,
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            16-1. Product Slider One
        --------------------------------------------------------- */
        $('.ltn__product-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            16-1. Product Slider One
        --------------------------------------------------------- */
        $('.ltn__product-slider-item-three-active').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            16-2. Product Slider Item Four
        --------------------------------------------------------- */
        $('.ltn__product-slider-item-four-active').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            16-2. Product Slider Item Four
        --------------------------------------------------------- */
        $('.ltn__product-slider-item-four-active-full-width').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            16-3. Related Product Slider One
        --------------------------------------------------------- */
        $('.ltn__related-product-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            ## Related Product Slider One
        --------------------------------------------------------- */
        $('.ltn__related-product-slider-two-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            ## Related Product Slider One
        --------------------------------------------------------- */
        $('.ltn__popular-product-widget-active').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
        });

        /* --------------------------------------------------------
            17. Tab Product Slider One
        --------------------------------------------------------- */
        $('.ltn__tab-product-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        /* --------------------------------------------------------
            17. Small Product Slider One
        --------------------------------------------------------- */
        $('.ltn__small-product-slider-active').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            18. Blog Slider One
        --------------------------------------------------------- */
        $('.ltn__blog-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            19. Testimonial Slider - 1
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-active').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            20. Testimonial Slider - 2
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-2-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            21. Testimonial Slider - 3
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-3-active').slick({
            arrows: true,
            centerMode: true,
            centerPadding: '80px',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            21. Testimonial Slider - 5
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-5-active').slick({
            arrows: true,
            centerMode: false,
            centerPadding: '80px',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        /* --------------------------------------------------------
            21. Testimonial Slider - 6
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-6-active').slick({
            arrows: true,
            dots: false,
            centerMode: false,
            centerPadding: '80px',
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            22. Category Slider
        --------------------------------------------------------- */
        $('.ltn__category-slider-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            22. Category Slider
        --------------------------------------------------------- */
        $('.ltn__category-slider-active-six').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 3,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            23. Image Slide  - 1 (Screenshot) 
        --------------------------------------------------------- */
        $('.ltn__image-slider-1-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            24. Image Slide - 2
        --------------------------------------------------------- */
        $('.ltn__image-slider-2-active').slick({
            rtl: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '80px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '50px'
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '50px'
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            25. Image Slide - 3
        --------------------------------------------------------- */
        $('.ltn__image-slider-3-active').slick({
            rtl: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            26. Image Slide - 4 
        --------------------------------------------------------- */
        $('.ltn__image-slider-4-active').slick({
            rtl: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            ## Image Slide - 5
        --------------------------------------------------------- */
        $('.ltn__image-slider-5-active').slick({
            rtl: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '450px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '250px',
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '200px',
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '150px',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0px',
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            27. Brand Logo
        --------------------------------------------------------- */
        if($('.ltn__brand-logo-active').length){
            $('.ltn__brand-logo-active').slick({
                rtl: false,
                arrows: false,
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        };


        /* --------------------------------------------------------
            # upcoming-project-slider-1
        --------------------------------------------------------- */
        $('.ltn__upcoming-project-slider-1-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            # ltn__search-by-place-slider-1-active
        --------------------------------------------------------- */
        $('.ltn__search-by-place-slider-1-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            28. Blog Gallery (Blog Page )
        --------------------------------------------------------- */
        if($('.ltn__blog-gallery-active').length){
            $('.ltn__blog-gallery-active').slick({
                rtl: false,
                arrows: true,
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
            });
        };

        /* --------------------------------------------------------
            29. Countdown
        --------------------------------------------------------- */
        $('[data-countdown]').each(function () {

            var $this = $(this),
                finalDate = $(this).data('countdown');
            if (!$this.hasClass('countdown-full-format')) {
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime('<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
                });
            } else {
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime('<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
                });
            }

        });


        /* --------------------------------------------------------
            30. Counter Up
        --------------------------------------------------------- */
        // $('.ltn__counter').counterUp();

        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });
        $('.counter').addClass('animated fadeInDownBig');  
        $('h3').addClass('animated fadeIn');
        

        /* --------------------------------------------------------
            31. Instagram Feed
        --------------------------------------------------------- */
        if($('.ltn__instafeed').length){
            $.instagramFeed({
                'username': 'envato',
                'container': ".ltn__instafeed",
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'styling': false,
                'items': 12,
                "image_size": "600", /* 320 */
            });
            $('.ltn__instafeed').on("DOMNodeInserted", function (e) {
                if (e.target.className == 'instagram_gallery') {
                    $('.ltn__instafeed-slider-2 .' + e.target.className).slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                        nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    })
                    $('.ltn__instafeed-slider-1 .' + e.target.className).slick({
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                        nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                        responsive: [{
                            breakpoint: 119,
                            settings: {
                                slidesToShow: 4
                            }
                        }, {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 3
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    });
                }
            });
        };


        /* ---------------------------------------------------------
            32. Price Slider
        --------------------------------------------------------- */
        $( ".slider-range" ).slider({
            range: true,
            min: 50,
            max: 5000,
            values: [ 50, 1500 ],
            slide: function( event, ui ) {
                $( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
        " - $" + $( ".slider-range" ).slider( "values", 1 ) ); 


        /* --------------------------------------------------------
            33. Quantity plus minus
        -------------------------------------------------------- */
        $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
        $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
            } 
            else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } 
                else {
                    newVal = 0;
                }
            }
            $button.parent().find("input").val(newVal);
        });


	    /* --------------------------------------------------------
            34. scrollUp active
        -------------------------------------------------------- */
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });


	    /* --------------------------------------------------------
            35. Parallax active ( About Section  )
        -------------------------------------------------------- */
        /* 
        > 1 page e 2 ta call korle 1 ta kaj kore 
        */
        if($('.ltn__parallax-effect-active').length){
            var scene = $('.ltn__parallax-effect-active').get(0);
            var parallaxInstance = new Parallax(scene);
        }


	    /* --------------------------------------------------------
            36. Testimonial Slider 4
        -------------------------------------------------------- */
        var ltn__testimonial_quote_slider = $('.ltn__testimonial-slider-4-active');
        ltn__testimonial_quote_slider.slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: true,
            fade: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
                }
            ]
        });

        /* have to write code for bind it with static images */
        ltn__testimonial_quote_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var liIndex = nextSlide + 1;
            var slideImageliIndex = (slick.slideCount == liIndex) ? liIndex - 1 : liIndex;
            var cart = $('.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' + slideImageliIndex + '"]').find('.ltn__testimonial-image');
            var imgtodrag = $('.ltn__testimonial-quote-menu li:nth-child(' + liIndex + ')').find("img").eq(0);
            if (imgtodrag) {
                AnimateTestimonialImage(imgtodrag, cart)
            }
        });

        /* have to write code for bind static image to slider accordion to slide index of images */
        $(document).on('click', '.ltn__testimonial-quote-menu li', function (e) {
            var el = $(this);
            var elIndex = el.prevAll().length;
            ltn__testimonial_quote_slider.slick('slickGoTo', elIndex);
            var cart = $('.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' + elIndex + '"]').find('.ltn__testimonial-image');
            var imgtodrag = el.find("img").eq(0);
            if (imgtodrag) {
                AnimateTestimonialImage(imgtodrag, cart)
            }

        });



        function AnimateTestimonialImage(imgtodrag, cart) {
            var imgclone = imgtodrag.clone().offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            }).css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '130px',
                'width': '130px',
                'z-index': '100'
            }).addClass('quote-animated-image').appendTo($('body')).animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 130,
                'height': 130
            }, 300);


            imgclone.animate({
                'visibility': 'hidden',
                'opacity': '0'
            }, function () {
                $(this).remove()
            });
        }


        /* --------------------------------------------------------
            Newsletter Popup
        -------------------------------------------------------- */
        $('#ltn__newsletter_popup').modal('show');


        /* --------------------------------------------------------
            Progress Bar Round
        -------------------------------------------------------- */
        $(function() {
            $(".progress").each(function() {

                var value = $(this).attr('data-value');
                var left = $(this).find('.progress-left .progress-bar');
                var right = $(this).find('.progress-right .progress-bar');

                if (value > 0) {
                    if (value <= 50) {
                        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                    } else {
                        right.css('transform', 'rotate(180deg)')
                        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                    }
                }

            })

            function percentageToDegrees(percentage) {
            return percentage / 100 * 360
            }
        });




    });


    /* --------------------------------------------------------
        36. Header menu sticky
    -------------------------------------------------------- */
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".ltn__header-sticky").removeClass("sticky-active");
        } else {
            $(".ltn__header-sticky").addClass("sticky-active");
        }
    }); 


    $(window).on('load',function(){
        /*-----------------
            preloader
        ------------------*/
        if($('#preloader').length){
            var preLoder = $("#preloader");
            preLoder.fadeOut(1000);

        };


    });


  
})(jQuery);