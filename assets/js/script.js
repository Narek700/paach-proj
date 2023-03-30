$(document).ready(function () {
    $('#headCarousel').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 4000,
        nextArrow: '<button class="btn-next icon-next"></button>',
        prevArrow: '<button class="btn-prev icon-prev"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('#carouselImag').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 4000,
    });

    $('.second-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: true,
                    slidesToShow: 2,
                    nextArrow: '<button class="btn-next icon-next"></button>',
                    prevArrow: '<button class="btn-prev icon-prev"></button>',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: true,
                    slidesToShow: 1,
                    nextArrow: '<button class="btn-next icon-next"></button>',
                    prevArrow: '<button class="btn-prev icon-prev"></button>',
                }
            }
        ]
    });

    $('#third').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });

    //tablet-mobile language change
    $('#btnChange').on('click', function () {
        $('#languageMenu').toggleClass('active');
    });

    //menu toggle for mobile-tablet
    $('#btnMenu').on('click', function () {
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    })

    //menu links click for mobile-tablet
    // $('#nav a').on('click', function (e) {
    //     e.preventDefault();
    // });

    $('.form__input-upload[type=file]').change(function () {
        $('#fileName').html($(this).val());
    });
});